<template>
  <div class="container mx-auto py-16 grid md:grid-cols-2 gap-8 items-center">
    <img :src="image" alt="Section Image" class="w-full rounded-lg shadow-md" />
    <div>
      <h2 :class="theme.typography.heading" class="mb-4">{{ title }}</h2>
      <p :class="theme.typography.base" class="mb-6">{{ description }}</p>
      <a :href="buttonLink" :class="button.default.class">{{ buttonText }}</a>
    </div>
  </div>
</template>

<script setup>
import { useAppConfig } from '#app';

const { ui } = useAppConfig();
const theme = ui.theme;
const button = ui.components.button;

const image = "/path-to-image.jpg";
const title = "Why Choose Us?";
const description = "We provide the best services to help you succeed.";
const buttonText = "Learn More";
const buttonLink = "/about";
</script>
