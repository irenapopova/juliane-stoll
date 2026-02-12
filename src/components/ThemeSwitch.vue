<script setup>
import s from "../styles/components/ThemeSwitch.module.css";
import { useTheme } from "../composables/useTheme.js";

const { theme, toggleTheme } = useTheme();
</script>

<template>
  <button :class="s.btn" type="button" @click="toggleTheme" :aria-label="`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`">
    <span :class="s.icon" aria-hidden="true">{{ theme === "dark" ? "🌙" : "☀️" }}</span>
  </button>
</template>
