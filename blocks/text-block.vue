<template>
    <div :class="alignmentClass">
      <p>{{ content }}</p>
    </div>
  </template>
  
  <script setup>
  defineProps({
    content: String,
    alignment: {
      type: String,
      default: 'left',
    },
  });
  
  const alignmentClass = `text-${alignment}`;
  </script>
  