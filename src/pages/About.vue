<script setup>
import s from "../styles/pages/about.module.css";
import portrait from "../assets/juliane-portrait.svg";
</script>

<template>
  <section :class="s.page">
    <div :class="s.card">
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

    <div :class="s.panel">
      <h2 :class="s.sectionTitle">Was mich antreibt</h2>
      <p :class="s.body">
        Verantwortung übernehmen, Dinge praktisch anpacken und dabei das
        Zwischenmenschliche nicht aus dem Blick verlieren. Ich mag klare
        Abläufe, ehrliche Kommunikation und Aufgaben, die Sinn stiften – ob in
        der Betreuung, im technischen Bereich oder im Organisieren von
        Strukturen.
      </p>
    </div>
  </section>
</template>
