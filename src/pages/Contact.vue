<script setup>
import { RouterLink } from "vue-router";
import s from "../styles/pages/contact.module.css";
import ImageSlider from "../components/ImageSlider.vue";
import portrait from "../assets/images/julia-profile.jpg";

const contact = {
  name: "Juliane Stoll",
  city: "Berlin (Spandau)",
  email: "Stoll.juli84@gmail.com",
  phone: "",
};

const modules = import.meta.glob("../assets/images/*.{jpg,jpeg,png,webp,avif}", {
  eager: true,
  import: "default",
});

const images = Object.entries(modules)
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
</script>

<template>
  <section :class="s.page">
    <div v-if="images.length" :class="s.sliderWrap">
      <ImageSlider :images="images" compact />
    </div>

    <div :class="s.hero">
      <div :class="s.heroText">
        <p :class="s.kicker">Kontakt</p>
        <h1 :class="s.title">Lassen Sie uns ins Gespräch kommen</h1>
        <p :class="s.lede">
          Ich freue mich über Anfragen rund um pädagogische Begleitung,
          Familienarbeit und naturpädagogische Angebote. Ich melde mich zeitnah
          zurück und kläre alle Details persönlich.
        </p>

        <div :class="[s.contactCard, s.rainbowBorder]">
          <div :class="s.contactRow">
            <span :class="s.label">Name</span>
            <span>{{ contact.name }}</span>
          </div>
          <div :class="s.contactRow">
            <span :class="s.label">Ort</span>
            <span>{{ contact.city }}</span>
          </div>
          <div :class="s.contactRow">
            <span :class="s.label">E-Mail</span>
            <a :class="s.link" :href="`mailto:${contact.email}`">{{ contact.email }}</a>
          </div>
          <div v-if="contact.phone" :class="s.contactRow">
            <span :class="s.label">Telefon</span>
            <span>{{ contact.phone }}</span>
          </div>
        </div>

        <div :class="s.actions">
          <a :class="s.primary" :href="`mailto:${contact.email}`">E-Mail senden</a>
          <RouterLink :class="s.secondary" to="/resume">Lebenslauf</RouterLink>
        </div>
      </div>

      <div :class="s.heroMedia">
        <img :class="s.portrait" :src="portrait" alt="Porträt von Juliane Stoll" />
        <div :class="[s.mediaNote, s.rainbowNote]">
          <h2 :class="s.mediaTitle">Zusammenarbeit</h2>
          <p :class="s.body">
            Verlässliche Kommunikation, klare Absprachen und eine
            ressourcenorientierte Haltung stehen im Mittelpunkt. Ich arbeite
            strukturgebend, bindungsorientiert und lösungsorientiert.
          </p>
        </div>
      </div>
    </div>

    <div :class="s.grid">
      <div :class="s.infoCard">
        <h3 :class="s.cardTitle">Schwerpunkte</h3>
        <ul :class="s.list">
          <li>Bindungs- und beziehungsorientiertes Arbeiten</li>
          <li>Naturpädagogik & kreative Ausdrucksformen</li>
          <li>Strukturgebende Alltagsbegleitung</li>
        </ul>
      </div>
      <div :class="s.infoCard">
        <h3 :class="s.cardTitle">Verfügbarkeit</h3>
        <p :class="s.body">
          Termine nach Absprache, bevorzugt im Raum Berlin/Brandenburg. Für
          konkrete Anfragen bitte eine kurze Nachricht mit Zeitraum und Thema.
        </p>
      </div>
      <div :class="[s.infoCard, s.rainbowCard]">
        <h3 :class="s.cardTitle">Zusammenarbeit mit Jugendamt</h3>
        <p :class="s.body">
          Transparente Dokumentation, regelmäßige Rückmeldungen und klare
          Zielabsprachen schaffen Sicherheit im Hilfeprozess.
        </p>
      </div>
    </div>
  </section>
</template>
