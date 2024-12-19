<template>
  <header class="bg-white shadow-md">
    <nav class="container mx-auto flex justify-between items-center py-4">
      <div class="text-xl font-bold">Brand</div>
      <ul class="flex space-x-6">
        <li v-for="link in links" :key="link.href">
          <a :href="link.href" class="text-gray-600 hover:text-blue-500">
            {{ link.label }}
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
</script>
