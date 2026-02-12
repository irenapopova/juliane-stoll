<script setup>
import { computed, ref } from "vue";
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
    const rawCategory = name.split(/[-_]/)[0] || "Allgemein";
    const category =
      rawCategory.charAt(0).toUpperCase() + rawCategory.slice(1).toLowerCase();
    return {
      src,
      name: label || "Moment",
      category,
    };
  })
  .sort((a, b) => a.name.localeCompare(b.name));

const sizeCycle = ["wide", "tall", "square", "wide", "square", "tall"];

const placeholders = Array.from({ length: 8 }, (_, index) => ({
  src: "",
  name: `Platzhalter ${index + 1}`,
  category: "Beispiel",
  placeholder: true,
}));

const categories = computed(() => {
  const set = new Set(images.map((image) => image.category));
  return ["Alle", ...Array.from(set).sort()];
});

const activeCategory = ref("Alle");

const filteredImages = computed(() => {
  if (activeCategory.value === "Alle") return images;
  return images.filter((image) => image.category === activeCategory.value);
});

const displayImages = computed(() =>
  images.length ? filteredImages.value : placeholders,
);
</script>

<template>
  <section :class="s.page">
    <div v-if="images.length" :class="s.sliderWrap">
      <ImageSlider :images="images" compact class="noRadius" />
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
      <div :class="s.heroCard">
        <p :class="s.heroQuote">
          Natur, Struktur und Nähe – ein Raum, in dem Kinder sich sicher fühlen
          und entfalten können.
        </p>
        <div :class="s.heroMeta">
          <span>Ressourcenorientiert</span>
          <span>Beziehungsstark</span>
          <span>Kreativ</span>
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
        <figure
          v-for="(image, index) in displayImages"
          :key="image.src || image.name"
          :class="[s.tile, s[sizeCycle[index % sizeCycle.length]], { [s.placeholder]: image.placeholder }]"
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
        </figure>
      </div>
    </section>
    <div v-if="!images.length" :class="s.empty">
      <h2 :class="s.sectionTitle">Bilder hinzufügen</h2>
      <p :class="s.body">
        Lege deine Fotos in <strong>src/assets/images</strong> ab. Unterstützt
        werden JPG, PNG, WebP und AVIF. Die Galerie lädt die Bilder automatisch.
      </p>
    </div>
  </section>
</template>
