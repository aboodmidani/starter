<template>
  <footer class="bg-gray-800 text-white py-6">
    <div class="container mx-auto text-center text-sm">
      {{ text }}
    </div>
  </footer>
</template>

<script setup>
const { data } = await useContent('footer');
const text = data.text;
</script>
