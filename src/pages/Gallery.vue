<script setup>
import { computed, onMounted, onUnmounted, ref } from "vue";
import s from "../styles/pages/gallery.module.css";
import ImageSlider from "../components/ImageSlider.vue";

const modules = import.meta.glob("../assets/images/**/*.{jpg,jpeg,png,webp,avif}", {
  eager: true,
  import: "default",
});

const categoryMap = {
  naturpaedagogik: "Naturpädagogik",
  garden: "Garden",
  abenteuer: "Abenteuer",
  wandern: "Wandern",
  kochen: "Kochen",
  projekte: "Projekte",
  vibes: "Vibes",
};

const categoryLabels = {
  naturpaedagogik: "Naturpädagogik",
  garden: "Gartenimpression",
  abenteuer: "Abenteuerblick",
  wandern: "Wanderblick",
  kochen: "Kochmoment",
  projekte: "Projektmoment",
  vibes: "Vibes",
};

const images = Object.entries(modules)
  .map(([path, src]) => {
    const parts = path.split("/");
    const imagesIndex = parts.lastIndexOf("images");
    const categoryKey = imagesIndex >= 0 ? parts[imagesIndex + 1] : "abenteuer";

    if (!categoryKey || categoryKey === "profile") return null;

    const file = parts[parts.length - 1] || "";
    const name = file.replace(/\.[^.]+$/, "");
    const label = name.replace(/[-_]+/g, " ").trim();

    return {
      src,
      baseName: label || "Moment",
      categoryKey,
      category: categoryMap[categoryKey] || "Abenteuer",
    };
  })
  .filter(Boolean)
  .sort((a, b) => a.baseName.localeCompare(b.baseName));

const sliderImages = images
  .filter((image) => image.categoryKey !== "naturpaedagogik")
  .slice(0, 8);

const labeledImages = images.map((image) => ({
  ...image,
  name: `${categoryLabels[image.categoryKey] || "Moment"}`,
}));

const sizeCycle = ["wide", "tall", "square", "wide", "square", "tall"];

const placeholders = Array.from({ length: 8 }, (_, index) => ({
  src: "",
  name: `Platzhalter ${index + 1}`,
  categoryKey: "abenteuer",
  category: "Abenteuer",
  placeholder: true,
}));

const categoryOrder = [
  "alle",
  "naturpaedagogik",
  "garden",
  "abenteuer",
  "wandern",
  "kochen",
  "projekte",
  "vibes",
];

const categories = computed(() => categoryOrder);

const activeCategory = ref("alle");
const lightboxImage = ref(null);

const filteredImages = computed(() => {
  if (activeCategory.value === "alle") return labeledImages;
  return labeledImages.filter((image) => image.categoryKey === activeCategory.value);
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
            v-for="categoryKey in categories"
            :key="categoryKey"
            type="button"
            :class="[s.chip, { [s.chipActive]: categoryKey === activeCategory }]"
            :aria-pressed="categoryKey === activeCategory"
            @click="activeCategory = categoryKey"
          >
            {{ categoryKey === "alle" ? "Alle" : categoryMap[categoryKey] }}
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
