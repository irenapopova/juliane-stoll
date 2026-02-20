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
        <RouterLink to="/methodik" :class="s.link" active-class="footerActive">Methodik</RouterLink>
        <RouterLink to="/gallery" :class="s.link" active-class="footerActive">Galerie</RouterLink>
        <RouterLink to="/videos" :class="s.link" active-class="footerActive">Videos</RouterLink>
        <RouterLink to="/contact" :class="s.link" active-class="footerActive">Kontakt</RouterLink>
      </nav>
    </div>
  </footer>
</template>
