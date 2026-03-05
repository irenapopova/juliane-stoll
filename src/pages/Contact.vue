<script setup>
import { RouterLink } from "vue-router";
import s from "../styles/pages/contact.module.css";
import ImageSlider from "../components/ImageSlider.vue";
import portrait320 from "../assets/images/profile/julia-profile-320.jpg";
import portrait640 from "../assets/images/profile/julia-profile-640.jpg";
import portrait960 from "../assets/images/profile/julia-profile-960.jpg";
import { imageEntries } from "../data/images";

const contact = {
  name: "Juliane Stoll",
  city: "Berlin (Spandau)",
  email: "Stoll.juli84@gmail.com",
  phone: "",
};

const sliderImages = imageEntries
  .filter((image) => image.path.includes("/slider/"))
  .map((image) => ({
    src: image.src,
    name: image.label || "Moment",
  }))
  .sort((a, b) => a.name.localeCompare(b.name));
</script>

<template>
  <section :class="s.page">
    <div v-if="sliderImages.length" :class="s.sliderWrap">
      <ImageSlider :images="sliderImages" compact :showCaptions="false" />
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
        <img
          :class="s.portrait"
          :src="portrait640"
          :srcset="`${portrait320} 320w, ${portrait640} 640w, ${portrait960} 960w`"
          sizes="(max-width: 900px) 70vw, 320px"
          alt="Porträt von Juliane Stoll"
          width="960"
          height="960"
          decoding="async"
          fetchpriority="high"
        />
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
