<script setup lang="ts">
import Footer from "./components/Footer.vue";
const appConfig = useAppConfig();
</script>

<template>
  <div>
    <NuxtLayout>
      <Navbar
        :heroText="appConfig.navbar.heroText"
        :firstText="appConfig.navbar.firstText"
        :secondText="appConfig.navbar.secondText"
      />
      <NuxtPage />
      <Footer />
    </NuxtLayout>
  </div>
</template>
