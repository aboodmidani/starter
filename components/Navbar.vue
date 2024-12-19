<template>
  <header class="navbar">
    <nuxt-ui-navbar :links="links" />
  </header>
</template>

<script setup>
const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];
</script>

<style>
.navbar {
  background: #fff;
  border-bottom: 1px solid #eee;
}
</style>
