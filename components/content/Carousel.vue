<script setup lang="ts">
const items = [
  "https://picsum.photos/468/468?random=1",
  "https://picsum.photos/468/468?random=2",
  "https://picsum.photos/468/468?random=3",
  "https://picsum.photos/468/468?random=4",
  "https://picsum.photos/468/468?random=5",
  "https://picsum.photos/468/468?random=6",
];
</script>

<template>
  <section class="w-full py-16 px-6">
    <div class="container mx-auto ">
      <UCarousel
        v-slot="{ item }"
        loop
        arrows
        dots
        :autoplay="{ delay: 2000 }"
        :items="items"
        :ui="{ item: 'basis-1/3' }"
      >
        <img :src="item" width="234" height="234" class="rounded-lg" />
      </UCarousel>
    </div>
  </section>
</template>
