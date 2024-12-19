<template>
  <div class="container mx-auto py-16">
    <h2 :class="theme.typography.heading" class="mb-8 text-center">
      {{ formTitle }}
    </h2>
    <form class="max-w-lg mx-auto space-y-4">
      <div v-for="field in fields" :key="field.name">
        <label class="block mb-2 font-medium" :for="field.name">
          {{ field.label }}
        </label>
        <input
          :id="field.name"
          :type="field.type"
          :placeholder="field.placeholder"
          :class="input.class"
        />
      </div>
      <button type="submit" :class="button.default.class">
        Submit
      </button>
    </form>
  </div>
</template>

<script setup>
import { useAppConfig } from '#app';

const { ui } = useAppConfig();
const theme = ui.theme;
const button = ui.components.button;
const input = ui.components.input;

const formTitle = "Contact Us";
const fields = [
  { name: "name", label: "Name", type: "text", placeholder: "Enter your name" },
  { name: "email", label: "Email", type: "email", placeholder: "Enter your email" },
  { name: "message", label: "Message", type: "textarea", placeholder: "Enter your message" },
];
</script>
