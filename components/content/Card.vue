<template>
  <div class="card bg-primary text-primary-content w-96">
    <div class="card-body">
      <h2 class="card-title">
        <slot name="title">Card title!</slot>
      </h2>
      <p>
        <ContentSlot :content="descriptionContent" />
      </p>
      <div class="card-actions justify-end">
        <button class="btn">
          <slot name="buttonText">Buy Now</slot>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  descriptionContent: {
    type: String,
    default: 'If a dog chews shoes whose shoes does he choose?',
  },
})
</script>
