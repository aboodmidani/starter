<template>
  <section id="second" class="w-full bg-white py-16 px-6">
    <div
      class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
    >
      <div>
        <h2 class="text-3xl font-bold text-gray-800">
          <slot name="twoColumnTitle">Title</slot>
        </h2>
        <p class="mt-4 text-lg text-gray-600">
          <slot name="twoColumnDescription">Desc</slot>
        </p>
        <button
          class="mt-6 px-6 py-3 bg-primary text-white rounded hover:bg-blue-500"
        >
          <slot name="twoColumnButton">Get Started</slot>
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
</template>
