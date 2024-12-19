<template>
  <section class="flex flex-col md:flex-row items-center gap-8 md:gap-16 py-16">
    <div class="flex-1">
      <img :src="image" alt="Section Image" class="rounded-lg shadow-lg" />
    </div>
    <div class="flex-1 text-center md:text-left">
      <h2 class="text-3xl font-bold mb-4">{{ title }}</h2>
      <p class="text-lg mb-6">{{ text }}</p>
      <a :href="button.link" class="btn-primary">{{ button.text }}</a>
    </div>
  </section>
</template>

<script setup>
const { data } = await useContent('section2');
const { image, title, text, button } = data;
</script>

<style>
.btn-primary {
  @apply bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600;
}
</style>
