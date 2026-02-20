<script setup>
import s from "../styles/pages/videoGallery.module.css";

const modules = import.meta.glob("../assets/videos/**/*.{mp4,webm,ogg}", {
  eager: true,
  import: "default",
});

const localVideos = Object.entries(modules)
  .map(([path, src]) => {
    const file = path.split("/").pop() || "";
    const name = file.replace(/\.[^.]+$/, "");
    const label = name.replace(/[-_]+/g, " ").trim();
    const topic =
      path.split("/").slice(-2, -1)[0]?.replace(/[-_]+/g, " ").trim() ||
      "Alltag";
    return {
      src,
      name: label || "Video",
      topic,
    };
  })
  .sort((a, b) => a.name.localeCompare(b.name));

const sampleVideos = [
  {
    src: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    name: "Naturmoment im Garten",
    topic: "Naturpädagogik",
  },
  {
    src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    name: "Kreativer Ausdruck",
    topic: "Kreativität",
  },
  {
    src: "https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    name: "Gemeinsames Lernen",
    topic: "Beziehung",
  },
];

const videos = localVideos.length ? localVideos : sampleVideos;
</script>

<template>
  <section :class="s.page">
    <div :class="s.hero">
      <div :class="s.heroText">
        <p :class="s.kicker">Video Galerie</p>
        <h1 :class="s.title">Momente in Bewegung</h1>
        <p :class="s.lede">
          Kurze Einblicke in Naturerfahrungen, kreative Prozesse und pädagogische
          Arbeit – visuell, nahbar und authentisch.
        </p>
      </div>
      <div :class="s.heroCard">
        <p :class="s.heroQuote">
          Jeder Clip erzählt von Beziehung, Struktur und den kleinen Schritten,
          die Entwicklung sichtbar machen.
        </p>
        <div :class="s.heroMeta">
          <span>Verlässlich</span>
          <span>Praktisch</span>
          <span>Beziehungsstark</span>
        </div>
      </div>
    </div>

    <div v-if="videos.length" :class="s.grid">
      <article v-for="video in videos" :key="video.src" :class="s.card">
        <div :class="s.tv">
          <video :class="s.video" controls preload="metadata">
            <source :src="video.src" />
            Dein Browser unterstützt dieses Video nicht.
          </video>
        </div>
        <div :class="s.cardBody">
          <div :class="s.cardMeta">
            <span :class="s.topic">{{ video.topic }}</span>
          </div>
          <h3 :class="s.cardTitle">{{ video.name }}</h3>
        </div>
      </article>
    </div>

    <div v-else :class="s.empty">
      <h2 :class="s.sectionTitle">Keine Videos gefunden</h2>
      <p :class="s.body">
        Lege deine Videos in <strong>src/assets/videos</strong> ab. Unterstützt
        werden MP4, WebM und OGG.
      </p>
    </div>
  </section>
</template>
