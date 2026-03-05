<script setup>
import { ref, useId, watch } from "vue";
import { RouterLink, useRoute } from "vue-router";
import ThemeSwitch from "./ThemeSwitch.vue";
import Burger from "./Burger.vue";
import s from "../styles/components/header.module.css";

const isOpen = ref(false);
const route = useRoute();
const navId = `primary-navigation-${useId()}`;

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

watch(
  () => route.path,
  () => {
    isOpen.value = false;
  },
);
</script>

<template>
  <header :class="s.header">
    <div :class="s.inner">
      <div :class="s.brand">
        <RouterLink to="/about" :class="s.brandLink">Juliane Stoll</RouterLink>
      </div>

      <nav
        :id="navId"
        :class="[s.nav, isOpen && s.navOpen]"
        aria-label="Primary"
        @click="isOpen = false"
      >
        <RouterLink to="/about" :class="s.link" active-class="active">About</RouterLink>
        <RouterLink to="/resume" :class="s.link" active-class="active">Resume</RouterLink>
        <RouterLink to="/methodik" :class="s.link" active-class="active">Methodik</RouterLink>
        <RouterLink to="/gallery" :class="s.link" active-class="active">Galerie</RouterLink>
        <RouterLink to="/videos" :class="s.link" active-class="active">Videos</RouterLink>
        <RouterLink to="/contact" :class="s.link" active-class="active">Kontakt</RouterLink>
      </nav>

      <div :class="s.right">
        <div :class="s.burgerWrap">
          <Burger :open="isOpen" :controls="navId" @toggle="toggleMenu" />
        </div>
        <ThemeSwitch />
      </div>
    </div>
  </header>
</template>
