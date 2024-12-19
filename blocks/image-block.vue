<template>
    <div class="image-block">
      <img :src="src" :alt="alt" class="w-full h-auto" />
      <p class="text-center">{{ caption }}</p>
    </div>
  </template>
  
  <script setup>
  defineProps({
    src: String,
    alt: String,
    caption: String,
  });
  </script>
  