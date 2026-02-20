<script setup>
import { RouterLink } from "vue-router";
import ThemeSwitch from "./ThemeSwitch.vue";
import s from "../styles/components/header.module.css";
</script>

<template>
  <header :class="s.header">
    <div :class="s.inner">
      <div :class="s.brand">
        <RouterLink to="/about" :class="s.brandLink">Juliane Stoll</RouterLink>
      </div>

      <nav :class="s.nav" aria-label="Primary">
        <RouterLink to="/about" :class="s.link" active-class="active">About</RouterLink>
        <RouterLink to="/resume" :class="s.link" active-class="active">Resume</RouterLink>
        <RouterLink to="/methodik" :class="s.link" active-class="active">Methodik</RouterLink>
        <RouterLink to="/gallery" :class="s.link" active-class="active">Galerie</RouterLink>
        <RouterLink to="/videos" :class="s.link" active-class="active">Videos</RouterLink>
        <RouterLink to="/contact" :class="s.link" active-class="active">Kontakt</RouterLink>
      </nav>

      <div :class="s.right">
        <ThemeSwitch />
      </div>
    </div>
  </header>
</template>
