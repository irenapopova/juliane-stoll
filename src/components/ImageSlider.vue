<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from "vue";
import s from "../styles/components/imageSlider.module.css";

const props = defineProps({
  images: {
    type: Array,
    default: () => [],
  },
  compact: {
    type: Boolean,
    default: false,
  },
  showCaptions: {
    type: Boolean,
    default: true,
  },
  autoPlay: {
    type: Boolean,
    default: true,
  },
  interval: {
    type: Number,
    default: 5200,
  },
});

const active = ref(0);
const total = computed(() => props.images.length);
const hasImages = computed(() => total.value > 0);
const dimensions = computed(() =>
  props.compact ? { width: 1600, height: 500 } : { width: 1600, height: 900 },
);

function shouldLoad(index) {
  if (!hasImages.value) return false;
  if (index === active.value) return true;
  if (total.value < 3) return true;
  const nextIndex = (active.value + 1) % total.value;
  const prevIndex = (active.value - 1 + total.value) % total.value;
  return index === nextIndex || index === prevIndex;
}
let timer = null;

function goTo(index) {
  if (!hasImages.value) return;
  const nextIndex = (index + total.value) % total.value;
  active.value = nextIndex;
}

function next() {
  goTo(active.value + 1);
}

function prev() {
  goTo(active.value - 1);
}

function stop() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
}

function start() {
  if (!props.autoPlay || total.value < 2) return;
  stop();
  timer = setInterval(next, props.interval);
}

onMounted(start);
onUnmounted(stop);

watch(
  () => [props.autoPlay, props.interval, total.value],
  () => {
    stop();
    start();
  },
);
</script>

<template>
  <section
    v-if="hasImages"
    :class="[s.slider, { [s.compact]: props.compact }]"
    @mouseenter="stop"
    @mouseleave="start"
  >
    <div :class="s.viewport">
      <div :class="s.track" :style="{ transform: `translateX(-${active * 100}%)` }">
        <figure
          v-for="(image, index) in images"
          :key="image.src"
          :class="s.slide"
          :aria-hidden="index !== active"
        >
          <img
            v-if="shouldLoad(index)"
            :class="[s.image, 'lazy']"
            :src="image.src"
            :alt="image.name"
            :width="dimensions.width"
            :height="dimensions.height"
            :loading="index === 0 ? 'eager' : 'lazy'"
            :fetchpriority="index === 0 ? 'high' : 'auto'"
            decoding="async"
            @load="(event) => event.target.classList.add('is-loaded')"
          />
          <div v-else :class="s.imagePlaceholder" aria-hidden="true"></div>
          <figcaption v-if="props.showCaptions" :class="s.caption">{{ image.name }}</figcaption>
        </figure>
      </div>
    </div>

    <button type="button" :class="s.controlLeft" @click="prev" aria-label="Vorheriges Bild">
      ‹
    </button>
    <button type="button" :class="s.controlRight" @click="next" aria-label="Nächstes Bild">
      ›
    </button>

    <div :class="s.dots" role="group" aria-label="Bildauswahl">
      <button
        v-for="(_, index) in images"
        :key="`dot-${index}`"
        type="button"
        :class="[s.dot, { [s.activeDot]: index === active }]"
        :aria-label="`Zum Bild ${index + 1}`"
        :aria-pressed="index === active"
        @click="goTo(index)"
      ></button>
    </div>
  </section>
</template>
