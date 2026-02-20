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

const isYouTubeUrl = (url) =>
  typeof url === "string" &&
  (url.includes("youtube.com") || url.includes("youtu.be"));

const getYouTubeId = (url) => {
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("youtu.be")) {
      return parsed.pathname.replace("/", "");
    }
    if (parsed.searchParams.has("v")) {
      return parsed.searchParams.get("v");
    }
    const parts = parsed.pathname.split("/");
    const embedIndex = parts.findIndex((part) => part === "embed");
    if (embedIndex !== -1 && parts[embedIndex + 1]) {
      return parts[embedIndex + 1];
    }
    const shortsIndex = parts.findIndex((part) => part === "shorts");
    if (shortsIndex !== -1 && parts[shortsIndex + 1]) {
      return parts[shortsIndex + 1];
    }
  } catch (error) {
    return "";
  }
  return "";
};

const toYouTubeEmbed = (url) => {
  const id = getYouTubeId(url);
  if (!id) {
    return url;
  }
  return `https://www.youtube.com/embed/${id}`;
};

const sampleVideos = [
  {
    src: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    name: "Naturmoment im Garten",
    topic: "Naturpädagogik",
  },
  {
    src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    name: "Kreativer Alltag",
    topic: "Kreativität",
  },
  {
    src: "https://www.youtube.com/watch?v=GMniyQIc1eU",
    name: "Gemeinsame Wege",
    topic: "Beziehung",
    kind: "youtube",
  },
];

const videos = (localVideos.length ? localVideos : sampleVideos).map((video) => {
  const isYouTube = video.kind === "youtube" || isYouTubeUrl(video.src);
  if (isYouTube) {
    return {
      ...video,
      kind: "youtube",
      embedSrc: toYouTubeEmbed(video.src),
    };
  }
  return {
    ...video,
    kind: "file",
  };
});
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
          <iframe
            v-if="video.kind === 'youtube'"
            :class="s.video"
            :src="video.embedSrc"
            :title="video.name"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            loading="lazy"
            allowfullscreen
          ></iframe>
          <video v-else :class="s.video" controls preload="metadata">
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
