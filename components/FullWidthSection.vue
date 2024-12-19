<template>
  <section :class="bg + ' ' + textColor + ' py-12'">
    <div class="text-center">
      <h2 class="text-3xl font-semibold">{{ title }}</h2>
      <p class="mt-4">{{ description }}</p>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  bg: String,
  textColor: String,
});
</script>
