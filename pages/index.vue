<template>
  <div>
    <!-- Hero Section -->
    <Hero>
      <slot />
      <template #description>
        <slot name="heroDescription" />
      </template>
    </Hero>

    <!-- Full Row Section -->
    <section class="w-full bg-gray-100 py-16 px-6">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold text-gray-800">
          <slot name="fullRowTitle" />
        </h2>
        <p class="mt-4 text-lg text-gray-600">
          <slot name="fullRowDescription" />
        </p>
      </div>
    </section>

    <!-- Two-Column Section -->
    <section class="w-full bg-white py-16 px-6">
      <div
        class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
      >
        <div>
          <h2 class="text-3xl font-bold text-gray-800">
            <slot name="twoColumnTitle" />
          </h2>
          <p class="mt-4 text-lg text-gray-600">
            <slot name="twoColumnDescription" />
          </p>
          <button
            class="mt-6 px-6 py-3 bg-primary text-white rounded hover:bg-blue-500"
          >
            <slot name="twoColumnButton" />
          </button>
        </div>
        <div>
          <slot name="twoColumnImage">
            <img
              src="/path-to-image.jpg"
              alt="Placeholder"
              class="rounded-lg shadow-md"
            />
          </slot>
        </div>
      </div>
    </section>

    <!-- Card Section -->
    <section class="w-full bg-white py-16 px-6">
      <div class="container mx-auto">
        <slot name="card" />
      </div>
    </section>

    <!-- Accordion Section -->
    <section class="w-full bg-gray-100 py-16 px-6">
      <div class="container mx-auto">
        <slot name="accordion" />
      </div>
    </section>
  </div>
</template>
