<template>
  <footer :class="footer.wrapper">
    <div class="container mx-auto text-center py-8">
      <p class="mb-4">© 2024 My Nuxt App. All rights reserved.</p>
      <ul class="flex justify-center space-x-4">
        <li v-for="link in links" :key="link.label">
          <a :href="link.href" :class="footer.top.container">
            {{ link.label }}
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script setup>
import { useAppConfig } from '#app';

const { ui } = useAppConfig();
const footer = ui.footer;

const links = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];
</script>
