<template>
    <section :class="$config.ui.colors.primary" class="text-center py-20">
      <h1 class="text-white text-5xl font-extrabold">
        <slot name="title" />
      </h1>
      <p class="text-white text-lg mt-4">
        <slot name="subtitle" />
      </p>
      <div class="mt-6">
        <a href="#" class="bg-yellow-500 text-white py-2 px-6 rounded-full">
          <slot name="button" />
        </a>
      </div>
    </section>
  </template>
  
  <script setup>
  import { useAppConfig } from '#imports'
  </script>
  