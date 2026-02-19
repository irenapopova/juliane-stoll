<script setup>
import { computed, onMounted, onUnmounted, ref } from "vue";
import s from "../styles/pages/gallery.module.css";
import ImageSlider from "../components/ImageSlider.vue";

const modules = import.meta.glob("../assets/images/*.{jpg,jpeg,png,webp,avif}", {
  eager: true,
  import: "default",
});

const images = Object.entries(modules)
  .map(([path, src]) => {
    const file = path.split("/").pop() || "";
    const name = file.replace(/\.[^.]+$/, "");
    const label = name.replace(/[-_]+/g, " ").trim();
    const lower = name.toLowerCase();

    let category = "Adventure";
    if (lower.includes("garden")) category = "Garden";
    else if (lower.includes("natur")) category = "Natur";

    return {
      src,
      baseName: label || "Moment",
      category,
    };
  })
  .sort((a, b) => a.baseName.localeCompare(b.baseName));

const sliderImages = images.slice(0, 8);

const categoryLabels = {
  Natur: "Naturmoment",
  Garden: "Gartenimpression",
  Adventure: "Abenteuerblick",
};

const labeledImages = images.map((image) => ({
  ...image,
  name: `${categoryLabels[image.category] || "Moment"}`,
}));

const sizeCycle = ["wide", "tall", "square", "wide", "square", "tall"];

const placeholders = Array.from({ length: 8 }, (_, index) => ({
  src: "",
  name: `Platzhalter ${index + 1}`,
  category: "Adventure",
  placeholder: true,
}));

const categories = computed(() => {
  const set = new Set(labeledImages.map((image) => image.category));
  return ["Alle", ...Array.from(set).sort()];
});

const activeCategory = ref("Alle");
const lightboxImage = ref(null);

const filteredImages = computed(() => {
  if (activeCategory.value === "Alle") return labeledImages;
  return labeledImages.filter((image) => image.category === activeCategory.value);
});

const displayImages = computed(() =>
  labeledImages.length ? filteredImages.value : placeholders,
);

function openLightbox(image) {
  if (image.placeholder) return;
  lightboxImage.value = image;
}

function closeLightbox() {
  lightboxImage.value = null;
}

function handleKey(event) {
  if (event.key === "Escape") {
    closeLightbox();
  }
}

onMounted(() => {
  window.addEventListener("keydown", handleKey);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKey);
});
</script>

<template>
  <section :class="s.page">
    <div v-if="sliderImages.length" :class="s.sliderWrap">
      <ImageSlider :images="sliderImages" compact class="noRadius" />
    </div>

    <div :class="s.hero">
      <div :class="s.heroText">
        <p :class="s.kicker">Galerie</p>
        <h1 :class="s.title">Momente, die bleiben</h1>
        <p :class="s.lede">
          Ein visueller Eindruck meiner Arbeit, meiner Umgebung und der
          Atmosphäre, in der Entwicklung, Kreativität und Beziehung wachsen.
        </p>
      </div>
      <div :class="[s.heroCard, s.rainbowCard]">
        <p :class="s.heroQuote">
          Natur, Struktur und Nähe – ein Raum, in dem Kinder sich sicher fühlen
          und entfalten können.
        </p>
        <div :class="s.heroMeta">
          <span :class="s.metaChip">Ressourcenorientiert</span>
          <span :class="s.metaChip">Beziehungsstark</span>
          <span :class="s.metaChip">Kreativ</span>
        </div>
      </div>
    </div>

    <section :class="s.gallerySection">
      <div :class="s.filterBar">
        <span :class="s.filterLabel">Kategorien</span>
        <div :class="s.filterChips" role="tablist" aria-label="Kategorien">
          <button
            v-for="category in categories"
            :key="category"
            type="button"
            :class="[s.chip, { [s.chipActive]: category === activeCategory }]"
            :aria-pressed="category === activeCategory"
            @click="activeCategory = category"
          >
            {{ category }}
          </button>
        </div>
      </div>

      <div :class="s.gallery">
        <button
          v-for="(image, index) in displayImages"
          :key="image.src || image.name"
          :class="[s.tile, s[sizeCycle[index % sizeCycle.length]], { [s.placeholder]: image.placeholder }]"
          type="button"
          :aria-label="image.placeholder ? 'Platzhalter' : image.name"
          :disabled="image.placeholder"
          @click="openLightbox(image)"
        >
          <img
            v-if="!image.placeholder"
            :src="image.src"
            :alt="image.name"
            :class="s.image"
          />
          <div v-else :class="s.placeholderCard">
            <span :class="s.placeholderLabel">{{ image.name }}</span>
            <span :class="s.placeholderHint">Bald hier</span>
          </div>
          <figcaption v-if="!image.placeholder" :class="s.caption">{{ image.name }}</figcaption>
          <span v-if="!image.placeholder" :class="s.categoryTag">{{ image.category }}</span>
        </button>
      </div>
    </section>

    <div v-if="lightboxImage" :class="s.lightbox" @click.self="closeLightbox">
      <div :class="s.lightboxCard" role="dialog" aria-modal="true">
        <button :class="s.lightboxClose" type="button" aria-label="Schließen" @click="closeLightbox">
          ×
        </button>
        <img :class="s.lightboxImage" :src="lightboxImage.src" :alt="lightboxImage.name" />
        <div :class="s.lightboxMeta">
          <h3 :class="s.lightboxTitle">{{ lightboxImage.name }}</h3>
          <span :class="s.lightboxTag">{{ lightboxImage.category }}</span>
        </div>
      </div>
    </div>
    <div v-if="!images.length" :class="s.empty">
      <h2 :class="s.sectionTitle">Bilder hinzufügen</h2>
      <p :class="s.body">
        Lege deine Fotos in <strong>src/assets/images</strong> ab. Unterstützt
        werden JPG, PNG, WebP und AVIF. Die Galerie lädt die Bilder automatisch.
      </p>
    </div>
  </section>
</template>
