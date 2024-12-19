<template>
    <footer :class="$config.ui.footer.background" class="py-8">
      <div class="container mx-auto text-center">
        <p :class="$config.ui.footer.text">{{ $config.ui.footer.content.text }}</p>
        <div class="mt-4">
          <a href="$config.ui.footer.content.privacy" :class="$config.ui.footer.linkHover">Privacy Policy</a> |
          <a href="$config.ui.footer.content.terms" :class="$config.ui.footer.linkHover">Terms of Service</a>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  import { useAppConfig } from '#imports'
  </script>
  