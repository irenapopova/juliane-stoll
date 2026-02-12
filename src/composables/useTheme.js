import { ref, onMounted, watch } from "vue";

const THEME_KEY = "theme";

export function useTheme() {
  const theme = ref("dark");

  function apply(t) {
    document.documentElement.dataset.theme = t;
  }

  function toggleTheme() {
    theme.value = theme.value === "dark" ? "light" : "dark";
  }

  onMounted(() => {
    const saved = localStorage.getItem(THEME_KEY);

    if (saved === "light" || saved === "dark") {
      theme.value = saved;
    } else {
      const prefersLight = window.matchMedia(
        "(prefers-color-scheme: light)",
      ).matches;

      theme.value = prefersLight ? "light" : "dark";
    }

    apply(theme.value);
  });

  watch(theme, (t) => {
    apply(t);
    localStorage.setItem(THEME_KEY, t);
  });

  return { theme, toggleTheme };
}
