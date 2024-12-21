<template>
  <div class="hero min-h-screen" :style="`background-image: url(${imageUrl});`">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-neutral-content text-center">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold text-white">
          <ContentSlot name="herotitle">Title</ContentSlot>
        </h1>
        <p class="mb-5">
          <slot name="herodescription" unwrap="p"
            >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
            amet praesentium, quibusdam explicabo ipsam recusandae. Possimus
            praesentium alias porro, saepe doloremque animi reprehenderit
            tempore, facilis consequuntur, quos fugiat. Eveniet, harum.</slot
          >
        </p>
        <button class="btn btn-primary">
          <slot name="herobuttonText">Get Started</slot>
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
