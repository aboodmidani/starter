<template>
  <nav :class="bg + ' ' + textColor + ' p-4'">
    <ul class="flex space-x-6">
      <li v-for="(link, index) in links" :key="index">
        <a :href="link.url" class="hover:underline">{{ link.text }}</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
defineProps({
  links: Array,
  bg: String,
  textColor: String,
});
</script>
