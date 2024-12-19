<template>
  <section class="bg-white py-16">
    <div class="container mx-auto max-w-xl">
      <h2 class="text-3xl font-bold text-center mb-8">{{ title }}</h2>
      <p class="text-center text-lg mb-12">{{ subtitle }}</p>
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div v-for="field in fields" :key="field.label">
          <label class="block text-gray-700 mb-2">{{ field.label }}</label>
          <input
            v-if="field.type !== 'textarea'"
            :type="field.type"
            :placeholder="field.placeholder"
            :required="field.required"
            class="w-full border border-gray-300 rounded-lg p-3"
          />
          <textarea
            v-else
            :placeholder="field.placeholder"
            :required="field.required"
            class="w-full border border-gray-300 rounded-lg p-3"
          ></textarea>
        </div>
        <button type="submit" class="btn-primary w-full">
          {{ submit }}
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
const { data } = await useContent('form');
const { title, subtitle, fields, submit } = data;

function handleSubmit() {
  alert('Form submitted!');
}
</script>
