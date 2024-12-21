<template>
  <section id="first" class="w-full bg-gray-100 py-16 px-6">
    <div class="container mx-auto text-center">
      <h2 class="text-3xl font-bold text-gray-800">
        <slot name="fullRowTitle">Title</slot>
      </h2>
      <p class="mt-4 text-lg text-gray-600">
        <slot name="fullRowDescription">Desc</slot>
      </p>
    </div>
  </section>
</template>
