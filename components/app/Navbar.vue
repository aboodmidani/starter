<template>
    <nav :class="$config.ui.navbar.background" class="py-4">
      <div class="container mx-auto flex justify-between items-center">
        <a href="/" class="text-lg font-bold" :class="$config.ui.navbar.text">MySite</a>
        <div class="flex space-x-4">
          <a href="/" class="text-white hover:text-gray-300">Home</a>
          <a href="/about" class="text-white hover:text-gray-300">About</a>
          <a href="/contact" class="text-white hover:text-gray-300">Contact</a>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { useAppConfig } from '#imports'
  </script>
  