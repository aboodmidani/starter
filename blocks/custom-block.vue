<template>
    <div class="custom-block">
      <h3>{{ title }}</h3>
      <p>{{ body }}</p>
      <a :href="buttonLink" class="btn btn-primary">{{ buttonText }}</a>
    </div>
  </template>
  
  <script setup>
  defineProps({
    title: String,
    body: String,
    buttonText: String,
    buttonLink: String,
  });
  </script>
  