<script setup>
import { RouterLink } from "vue-router";
import s from "../styles/components/footer.module.css";
</script>

<template>
  <footer :class="s.footer">
    <div :class="s.inner">
      <span>© {{ new Date().getFullYear() }} Juliane Stoll</span>
      <nav :class="s.nav" aria-label="Footer">
        <RouterLink to="/about" :class="s.link" active-class="footerActive">Über mich</RouterLink>
        <RouterLink to="/resume" :class="s.link" active-class="footerActive">Lebenslauf</RouterLink>
      </nav>
    </div>
  </footer>
</template>
