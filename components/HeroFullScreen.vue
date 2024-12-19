<template>
  <div
    :class="`relative bg-cover bg-center h-screen flex items-center justify-center text-white`"
    :style="{ backgroundImage: `url(${background})`, color: theme.text }"
  >
    <div class="text-center">
      <h1 :class="theme.typography.heading">{{ title }}</h1>
      <p :class="theme.typography.base">{{ subtitle }}</p>
    </div>
  </div>
</template>

<script setup>
import { useAppConfig } from '#app';

const { ui } = useAppConfig();
const theme = ui.theme.variables.light;

const background = "/path-to-hero-image.jpg";
const title = "Welcome to Our Website";
const subtitle = "Discover amazing features and experience the best.";
</script>
