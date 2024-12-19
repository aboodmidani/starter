<template>
    <section class="half-image-text">
      <div class="row">
        <div class="image">
          <img :src="image" alt="Section Image" />
        </div>
        <div class="text">
          <slot />
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const image = '/path-to-image.jpg';
  </script>
  
  <style>
  .row {
    display: flex;
    flex-wrap: wrap;
  }
  .image {
    flex: 1;
  }
  .text {
    flex: 1;
    padding: 2rem;
  }
  </style>
  