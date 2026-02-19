<script setup>
import { computed, onMounted, onUnmounted, ref } from "vue";
import s from "../styles/components/boxSlicer.module.css";

const props = defineProps({
  images: {
    type: Array,
    default: () => [],
  },
  slices: {
    type: Number,
    default: 6,
  },
  duration: {
    type: Number,
    default: 900,
  },
  autoPlay: {
    type: Boolean,
    default: false,
  },
  interval: {
    type: Number,
    default: 5000,
  },
});

const currentIndex = ref(0);
const nextIndex = ref(0);
const isAnimating = ref(false);
const sliceEffects = ref([]);
let timer = null;

const hasImages = computed(() => props.images.length > 0);
const currentImage = computed(() => props.images[currentIndex.value]);
const upcomingImage = computed(() => props.images[nextIndex.value]);

const sliceCount = computed(() => Math.max(3, props.slices));
const sliceList = computed(() => Array.from({ length: sliceCount.value }, (_, i) => i));

function buildSliceEffects() {
  sliceEffects.value = sliceList.value.map(() => {
    const tx = (Math.random() * 2 - 1) * 80;
    const ty = (Math.random() * 2 - 1) * 60;
    const rot = (Math.random() * 2 - 1) * 18;
    const delay = Math.random() * 0.18;
    return { tx, ty, rot, delay };
  });
}

function goTo(index) {
  if (!hasImages.value || isAnimating.value) return;
  nextIndex.value = (index + props.images.length) % props.images.length;
  if (nextIndex.value === currentIndex.value) return;

  buildSliceEffects();
  isAnimating.value = true;

  window.setTimeout(() => {
    currentIndex.value = nextIndex.value;
    isAnimating.value = false;
  }, props.duration + 220);
}

function next() {
  goTo(currentIndex.value + 1);
}

function previous() {
  goTo(currentIndex.value - 1);
}

function startAuto() {
  if (!props.autoPlay || props.images.length < 2) return;
  stopAuto();
  timer = window.setInterval(next, props.interval);
}

function stopAuto() {
  if (timer) {
    window.clearInterval(timer);
    timer = null;
  }
}

onMounted(() => {
  startAuto();
});

onUnmounted(() => {
  stopAuto();
});
</script>

<template>
  <div :class="s.wrapper" v-if="hasImages" @mouseenter="stopAuto" @mouseleave="startAuto">
    <div :class="s.stage">
      <div
        :class="s.frame"
        :style="{ backgroundImage: `url(${isAnimating ? upcomingImage?.src : currentImage?.src})` }"
      ></div>

      <div
        v-for="(slice, index) in sliceList"
        :key="`slice-${index}`"
        :class="[s.slice, { [s.isAnimating]: isAnimating }]"
        :style="{
          '--slice-index': index,
          '--slice-count': sliceCount,
          '--slice-width': `${100 / sliceCount}%`,
          '--bg-current': `url(${currentImage?.src})`,
          '--tx': `${sliceEffects[index]?.tx || 0}px`,
          '--ty': `${sliceEffects[index]?.ty || 0}px`,
          '--rot': `${sliceEffects[index]?.rot || 0}deg`,
          '--delay': `${sliceEffects[index]?.delay || 0}s`,
          '--duration': `${props.duration}ms`,
        }"
      ></div>

      <div :class="s.description">
        <h3>{{ currentImage?.title || "" }}</h3>
      </div>
    </div>

    <div :class="s.shadow"></div>

    <div :class="s.navArrows">
      <button type="button" @click="next">Next</button>
      <button type="button" @click="previous">Previous</button>
    </div>
  </div>
</template>
