<script setup>
import s from "../styles/components/burger.module.css";

const props = defineProps({
  open: { type: Boolean, default: false },
  controls: { type: String, default: "" },
});

const emit = defineEmits(["toggle"]);
</script>

<template>
  <button
    type="button"
    :class="s.burger"
    :aria-expanded="props.open"
    :aria-controls="props.controls"
    aria-label="Navigation öffnen"
    @click="emit('toggle')"
  >
    <span :class="[s.line, props.open && s.lineTopOpen]"></span>
    <span :class="[s.line, props.open && s.lineMidOpen]"></span>
    <span :class="[s.line, props.open && s.lineBotOpen]"></span>
  </button>
</template>
