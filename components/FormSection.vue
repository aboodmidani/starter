<template>
  <section class="p-8">
    <form class="max-w-lg mx-auto space-y-4">
      <h2 class="text-2xl mb-4">{{ title }}</h2>
      <div v-for="(field, index) in fields" :key="index" class="space-y-2">
        <label :for="field.label" class="block">{{ field.label }}</label>
        <input v-if="field.type !== 'textarea'" :type="field.type" :placeholder="field.placeholder" class="w-full px-4 py-2 border rounded" />
        <textarea v-if="field.type === 'textarea'" :placeholder="field.placeholder" class="w-full px-4 py-2 border rounded"></textarea>
      </div>
      <button :class="buttonColor + ' py-2 px-4 rounded text-white'" type="submit">{{ buttonText }}</button>
    </form>
  </section>
</template>

<script setup>
defineProps({
  fields: Array,
  buttonText: String,
  buttonColor: String,
});
</script>
