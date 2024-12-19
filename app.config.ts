export default defineAppConfig({
    ui: {
      primary: 'indigo',
      gray: 'zinc',
      theme: {
        variables: {
          light: {
            background: 'bg-gray-50',
            text: 'text-gray-800',
            heading: 'text-3xl font-bold text-gray-900',
            base: 'text-lg text-gray-700',
          },
          dark: {
            background: 'bg-gray-950',
            text: 'text-gray-200',
            heading: 'text-3xl font-bold text-white',
            base: 'text-lg text-gray-400',
          },
        },
      },
      components: {
        button: {
          default: {
            class: 'bg-primary-500 text-white py-2 px-4 rounded-md hover:bg-primary-600 transition',
          },
          variants: {
            solid: 'bg-primary-500 text-white',
            outline: 'border border-primary-500 text-primary-500 hover:bg-primary-100',
            ghost: 'text-primary-500 bg-transparent hover:bg-primary-100',
          },
        },
        input: {
          class:
            'w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary-500',
          rounded: 'rounded-md',
        },
      },
      header: {
        wrapper: 'bg-gray-50 dark:bg-gray-950 shadow-sm',
        links: {
          base: 'text-lg py-2 px-4 font-medium hover:text-primary-500 transition',
          active: 'text-primary-500',
          inactive: 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200',
        },
      },
      footer: {
        wrapper: 'bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 py-8',
        top: {
          container: 'container mx-auto flex justify-between',
        },
      },
    },
    seo: {
      title: 'My Nuxt App',
      description: 'A dynamic and modern web application built with Nuxt.js.',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'author', content: 'Your Name' },
        { name: 'theme-color', content: '#4F46E5' }, // Update with your primary color
      ],
    },
  });
  