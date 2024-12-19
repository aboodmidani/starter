<template>
    <div class="hero" :style="{ backgroundImage: `url(${background})` }">
      <div class="content">
        <slot />
      </div>
    </div>
  </template>
  
  <script setup>
  const background = '/path-to-image.jpg';
  </script>
  
  <style>
  .hero {
    height: 100vh;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .content {
    text-align: center;
    color: #fff;
  }
  </style>
  