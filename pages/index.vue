<template>
  <div>
    <Hero />
    <section class="w-full bg-gray-100 py-16 px-6">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold text-gray-800">Full Row Section</h2>
        <p class="mt-4 text-lg text-gray-600">
          This is a full-width section with a centered container.
        </p>
      </div>
    </section>
    <section class="w-full bg-white py-16 px-6">
      <div
        class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
      >
        <div>
          <h2 class="text-3xl font-bold text-gray-800">Two-Column Section</h2>
          <p class="mt-4 text-lg text-gray-600">
            This section splits the row into two columns. Add content to each
            side as needed.
          </p>
          <button
            class="mt-6 px-6 py-3 bg-primary text-white rounded hover:bg-blue-500"
          >
            Learn More
          </button>
        </div>
        <div>
          <img
            src="/path-to-image.jpg"
            alt="Placeholder"
            class="rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
    <section class="w-full bg-white py-16 px-6">
      <div class="container mx-auto">
        <Card />
      </div>
    </section>
    <section class="w-full bg-gray-100 py-16 px-6">
      <div class="container mx-auto">
        <Accordion />
      </div>
    </section>
  </div>
</template>

<script>
import Accordion from "~/components/content/Accordion.vue";
</script>
