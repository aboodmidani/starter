<template>
  <nav :class="header.wrapper">
    <div class="container mx-auto flex justify-between items-center py-4">
      <a href="/" class="text-xl font-bold">Brand</a>
      <ul class="flex space-x-4">
        <li v-for="link in links" :key="link.label">
          <a
            :href="link.href"
            :class="[header.links.base, link.active ? header.links.active : header.links.inactive]"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { useAppConfig } from '#app';

const { ui } = useAppConfig();
const header = ui.header;

const links = [
  { href: "/", label: "Home", active: true },
  { href: "/about", label: "About", active: false },
  { href: "/contact", label: "Contact", active: false },
];
</script>
