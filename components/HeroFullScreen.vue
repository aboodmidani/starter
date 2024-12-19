<template>
  <section :class="bg + ' ' + textColor + ' p-16'">
    <div class="text-center">
      <h1 class="text-4xl font-bold">{{ title }}</h1>
      <p class="text-xl mt-4">{{ subtitle }}</p>
      <img :src="image" class="mt-8 mx-auto w-full h-auto" />
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String,
  image: String,
  textColor: String,
  bg: String,
});
</script>
