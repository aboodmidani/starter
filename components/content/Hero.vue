<template>
  <div class="hero min-h-screen" :style="`background-image: url(${imageUrl});`">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-neutral-content text-center">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold text-white">
          <ContentSlot name="herotitle" unwrap="p" />
        </h1>
        <p class="mb-5">
          <ContentSlot name="herodescription" unwrap="p" />
        </p>
        <button class="btn btn-primary">
          <ContentSlot name="herobuttonText" unwrap="p" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  imageUrl: {
    type: String,
    default:
      "https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp",
  },
});
</script>
