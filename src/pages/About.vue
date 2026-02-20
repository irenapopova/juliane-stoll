<script setup>
import s from "../styles/pages/about.module.css";
import portrait from "../assets/images/profile/julia-profile.jpg";
import ImageSlider from "../components/ImageSlider.vue";
import BoxSlicer from "../components/BoxSlicer.vue";
import garden1 from "../assets/images/garden/julia-garden.jpg";
import garden2 from "../assets/images/garden/julia-garden2.jpg";
import garden3 from "../assets/images/garden/julia-garden3.jpg";
import garden4 from "../assets/images/garden/julia-garden4.jpg";
import garden5 from "../assets/images/garden/julia-garden5.jpg";
import garden6 from "../assets/images/garden/julia-garden7.jpg";

const modules = import.meta.glob("../assets/images/**/*.{jpg,jpeg,png,webp,avif}", {
  eager: true,
  import: "default",
});

const images = Object.entries(modules)
  .filter(([path]) => !path.includes("/profile/"))
  .map(([path, src]) => {
    const file = path.split("/").pop() || "";
    const name = file.replace(/\.[^.]+$/, "");
    const label = name.replace(/[-_]+/g, " ").trim();
    return {
      src,
      name: label || "Moment",
    };
  })
  .sort((a, b) => a.name.localeCompare(b.name));

const sliderImages = images
  .filter(({ src }) => !src.includes("/naturpaedagogik/"))
  .slice(0, 8);

const boxSlicerImages = [
  { src: garden1, title: "Gartenimpression" },
  { src: garden2, title: "Natürlicher Raum" },
  { src: garden3, title: "Ruhige Momente" },
  { src: garden4, title: "Grüne Wege" },
  { src: garden5, title: "Licht & Blätter" },
  { src: garden6, title: "In der Natur" },
];
</script>

<template>
  <section :class="s.page">
    <div v-if="sliderImages.length" :class="s.sliderWrap">
      <ImageSlider :images="sliderImages" compact class="noRadius" />
    </div>

    <div :class="[s.card, s.rainbowLine]">
      <div :class="s.hero">
        <img
          :class="s.avatar"
          :src="portrait"
          alt="Porträt von Juliane Stoll"
        />
        <div :class="s.heroText">
          <p :class="s.kicker">Über mich</p>
          <h1 :class="s.title">Mit Herz, Hand und Klarheit</h1>
          <p :class="s.lede">
            Ich bin Juliane Stoll – naturverbunden, strukturiert und nahbar. Ich
            arbeite gern mit Menschen, schaffe Ordnung in komplexen Situationen
            und bringe Ruhe sowie Verlässlichkeit in den Alltag.
          </p>
        </div>
      </div>
    </div>

    <div :class="[s.panel, s.rainbowLine]">
      <h2 :class="s.sectionTitle">Was mich antreibt</h2>
      <p :class="s.body">
        Verantwortung übernehmen, Dinge praktisch anpacken und dabei das
        Zwischenmenschliche nicht aus dem Blick verlieren. Ich mag klare
        Abläufe, ehrliche Kommunikation und Aufgaben, die Sinn stiften – ob in
        der Betreuung, im technischen Bereich oder im Organisieren von
        Strukturen.
      </p>
    </div>

    <div :class="[s.panel, s.rainbowLine]">
      <h2 :class="s.sectionTitle">Leistungsprofil</h2>
      <ul :class="s.list">
        <li>Strukturieren, planen und zuverlässig umsetzen.</li>
        <li>Praktisch denken, klar kommunizieren, Lösungen finden.</li>
        <li>Verantwortung übernehmen – auch in anspruchsvollen Situationen.</li>
        <li>Ordnung schaffen, Prioritäten setzen und sauber dokumentieren.</li>
      </ul>
    </div>

    <div :class="s.panel">
      <h2 :class="s.sectionTitle">Pädagogik</h2>
      <p :class="s.body">
        Mein Ansatz ist bindungsorientiert, ressourcenstark und klar
        strukturgebend. Ich begleite Kinder entwicklungsbegleitend, damit sie
        sich sicher fühlen und wachsen können.
      </p>

      <div :class="s.accordion">
        <details :class="s.dropdown" open>
          <summary :class="s.summary">Pädagogische Konzepte</summary>
          <div :class="s.dropdownBody">
            <p :class="s.body">
              Ich arbeite ressourcenorientiert und begleite Kinder individuell
              in ihrer Entwicklung. Im Mittelpunkt stehen Beziehung, Vertrauen
              und eine klare Struktur. Naturerfahrung, kreatives Arbeiten und
              alltagsnahe Lernprozesse fördern Selbstständigkeit, soziale
              Kompetenzen und emotionales Wachstum.
            </p>
          </div>
        </details>

        <details :class="s.dropdown">
          <summary :class="s.summary">Pädagogische Haltung</summary>
          <div :class="s.dropdownBody">
            <p :class="s.body">
              Meine pädagogische Arbeit basiert auf einer wertschätzenden und
              bindungsorientierten Haltung. Kinder werden als eigenständige
              Persönlichkeiten wahrgenommen und in ihrem Tempo begleitet.
              Strukturgebende Rituale schaffen Orientierung und stärken
              Selbstvertrauen.
            </p>
            <ul :class="s.list">
              <li>Bindungs- und beziehungsorientiert.</li>
              <li>Ressourcen- und stärkenorientiert.</li>
              <li>Partizipativ und lösungsorientiert.</li>
              <li>Ganzheitlich und entwicklungsbegleitend.</li>
            </ul>
          </div>
        </details>

        <details :class="s.dropdown">
          <summary :class="s.summary">Naturpädagogik</summary>
          <div :class="s.dropdownBody">
            <p :class="s.body">
              Ein Schwerpunkt meiner Arbeit liegt in der naturpädagogischen
              Begleitung. Durch Bewegung im Freien, achtsame Wahrnehmung und
              praktische Erfahrungen werden Lernen, Kreativität und
              Selbstwirksamkeit gefördert. Die Natur dient dabei als geschützter
              Raum für Entwicklung und Beziehung.
            </p>
          </div>
        </details>

        <details :class="s.dropdown">
          <summary :class="s.summary">Persönliche Stärken</summary>
          <div :class="s.dropdownBody">
            <ul :class="s.list">
              <li>Individuelle Entwicklungsbegleitung.</li>
              <li>Naturpädagogische Methoden.</li>
              <li>Kreativer Ausdruck mit Farbe, Pflanzen und Holz.</li>
              <li>Struktur und Verlässlichkeit im Alltag.</li>
              <li>Förderung von Selbstständigkeit und sozialen Kompetenzen.</li>
              <li>Klar, empathisch und zugewandt im Umgang.</li>
            </ul>
          </div>
        </details>
      </div>
    </div>

    <div :class="s.columns">
      <div :class="[s.panel, s.rainbowLine, s.pulseCard]">
        <h2 :class="s.sectionTitle">Methodische Kompetenzen</h2>
        <ul :class="s.list">
          <li>Strukturiertes Arbeiten und saubere Abläufe.</li>
          <li>Planung, Terminübersicht und Priorisierung.</li>
          <li>Sorgfalt im Detail und verlässliche Dokumentation.</li>
          <li>Ruhig bleiben, wenn es hektisch wird.</li>
        </ul>
      </div>
      <div :class="[s.panel, s.rainbowLine, s.pulseCard]">
        <h2 :class="s.sectionTitle">Soziale Kompetenzen</h2>
        <ul :class="s.list">
          <li>Freundlich, zugewandt und empathisch im Umgang.</li>
          <li>Teamorientiert, hilfsbereit und loyal.</li>
          <li>Verantwortungsbewusst und vertrauenswürdig.</li>
          <li>Klar, respektvoll und verbindlich in der Kommunikation.</li>
        </ul>
      </div>
    </div>

    <div :class="s.splitSection">
      <img
        :class="s.splitImage"
        :src="portrait"
        alt="Natur und Begleitung"
      />
      <div :class="s.splitText">
        <h2 :class="s.sectionTitle">Begleitung mit Herz und Struktur</h2>
        <p :class="s.body">
          Ich schaffe sichere Rahmen, in denen Kinder sich gesehen fühlen und
          wachsen können. Mit klaren Abläufen, kreativen Impulsen und einer
          ruhigen, wertschätzenden Haltung entsteht ein verlässlicher Alltag.
        </p>
        <p :class="s.body">
          Naturerfahrung, handwerkliche Elemente und gemeinsames Lernen stärken
          Selbstwirksamkeit, soziale Kompetenzen und Vertrauen.
        </p>
      </div>
    </div>

    <div :class="[s.card, s.rainbowCard]">
      <div :class="s.hero">
        <div :class="s.heroText">
          <p :class="s.kicker">Zusammenarbeit</p>
          <h2 :class="s.title">Verlässlich und klar im Miteinander</h2>
          <p :class="s.lede">
            Ich arbeite verbindlich, transparent und ressourcenorientiert.
            Klare Absprachen, regelmäßige Rückmeldungen und eine ruhige,
            wertschätzende Kommunikation schaffen Vertrauen und Orientierung.
          </p>
        </div>
        <img
          :class="s.avatar"
          :src="portrait"
          alt="Juliane Stoll"
        />
      </div>
    </div>

    <div :class="s.boxSlicerWrap">
      <BoxSlicer :images="boxSlicerImages" :slices="7" :autoPlay="true" />
    </div>
  </section>
</template>
