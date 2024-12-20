```components/content/Hero.vue
<template>
  <div class="hero min-h-screen" :style="`background-image: url(${imageUrl});`">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-neutral-content text-center">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold text-white">
          {{ title }}
        </h1>
        <p class="mb-5">
          {{ description }}
        </p>
        <button class="btn btn-primary">
          {{ buttonText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  imageUrl: {
    type: String,
    default: "https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp",
  },
  herotitle: {
    type: String,
    default: "Hello there",
  },
  herodescription: {
    type: String,
    default: "Your journey starts here. Discover amazing things today!",
  },
  herobuttonText: {
    type: String,
    default: "Get Started",
  },
});
</script>