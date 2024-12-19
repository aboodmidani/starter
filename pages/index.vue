<template>
  <div class="home-page">
    <h1>{{ page.title }}</h1>
    <div v-for="(block, index) in page.blocks" :key="index">
      <component
        :is="getBlockComponent(block.type)"
        v-bind="block"
      />
    </div>
  </div>
</template>

<script setup>
import { useContent } from '@nuxt/content';
import TextBlock from '~/content/blocks/text-block.vue';
import ImageBlock from '~/content/blocks/image-block.vue';
import CustomBlock from '~/content/blocks/custom-block.vue';

const page = await useContent('pages/home.yml').fetch();

const blockComponents = {
  'text-block': TextBlock,
  'image-block': ImageBlock,
  'custom-block': CustomBlock,
};

const getBlockComponent = (type) => blockComponents[type] || null;
</script>
