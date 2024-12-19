<template>
  <Layout>
    <Hero>
      <template #title>
        Welcome to Our Website
      </template>
      <template #subtitle>
        Discover amazing services and products with us.
      </template>
      <template #button>
        Get Started
      </template>
    </Hero>

    <TwoRowsSection />
    <OneRowSection />
    <Cards />
  </Layout>
</template>

<script setup>
import Layout from '~/components/app/Layout.vue'
import Hero from '~/components/section/Hero.vue'
import TwoRowsSection from '~/components/section/TwoRowsSection.vue'
import OneRowSection from '~/components/section/OneRowSection.vue'
import Cards from '~/components/section/Cards.vue'
</script>
