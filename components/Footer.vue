<template>
  <footer :class="bg + ' ' + textColor + ' p-4 text-center'">
    <p>{{ content }}</p>
  </footer>
</template>

<script setup>
defineProps({
  content: String,
  bg: String,
  textColor: String,
});
</script>
