<template>
  <div
    class="relative bg-cover bg-center h-screen flex items-center justify-center text-white"
    :style="{ backgroundImage: `url(${background})` }"
  >
    <div class="text-center">
      <h1 class="text-4xl md:text-6xl font-bold mb-4">{{ title }}</h1>
      <p class="text-lg md:text-2xl">{{ subtitle }}</p>
    </div>
  </div>
</template>

<script setup>
const { data } = await useContent('hero');
const { title, subtitle, background } = data;
</script>
