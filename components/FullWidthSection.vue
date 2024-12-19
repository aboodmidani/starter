<template>
  <section class="bg-gray-100 py-16">
    <div class="container mx-auto">
      <p class="text-center text-lg md:text-xl">{{ content }}</p>
    </div>
  </section>
</template>

<script setup>
const { data } = await useContent('section1');
const { content } = data;
</script>
