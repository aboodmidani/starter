<template>
    <div>
      <Navbar />
      <main>
        <slot />
      </main>
      <Footer />
    </div>
  </template>
  
  <script setup>
  import Navbar from '~/components/app/Navbar.vue'
  import Footer from '~/components/app/Footer.vue'
  </script>
  