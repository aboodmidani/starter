<template>
    <section class="form-section">
      <form @submit.prevent="handleSubmit">
        <slot />
      </form>
    </section>
  </template>
  
  <script setup>
  function handleSubmit() {
    alert('Form submitted!');
  }
  </script>
  
  <style>
  .form-section {
    padding: 2rem;
    background: #fff;
    border: 1px solid #ddd;
  }
  </style>
  