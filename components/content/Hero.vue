<template>
  <div
    class="hero min-h-screen"
    :style="`background-image: url(${backgroundImage});`"
  >
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-neutral-content text-center">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold">
          <slot name="title">Hello there</slot>
        </h1>
        <p class="mb-5">
          <ContentSlot :content="descriptionContent" />
        </p>
        <button class="btn btn-primary">
          <slot name="buttonText">Get Started</slot>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const backgroundImage = 'https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp'

// You can use this prop to pass custom description content when using the component in markdown
defineProps({
  descriptionContent: {
    type: String,
    default: 'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.',
  },
})
</script>
