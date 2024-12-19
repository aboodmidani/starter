export default defineAppConfig({
    ui: {
      theme: {
        primary: 'blue',
        secondary: 'emerald',
        gray: 'zinc',
        variables: {
          light: {
            background: 'var(--color-gray-50)',
            text: 'var(--color-gray-800)',
          },
          dark: {
            background: 'var(--color-gray-950)',
            text: 'var(--color-gray-200)',
          },
        },
      },
      typography: {
        fontFamily: {
          base: 'Inter, sans-serif',
          heading: 'Poppins, sans-serif',
        },
        sizes: {
          small: 'text-sm',
          base: 'text-base',
          large: 'text-lg',
          heading: 'text-2xl font-bold',
        },
      },
      components: {
        button: {
          rounded: 'rounded-lg',
          default: {
            size: 'md',
            color: 'primary',
            class: 'px-4 py-2 text-white',
          },
          variants: {
            outline: 'border border-gray-300 text-gray-700 bg-transparent',
            solid: 'bg-primary text-white',
            ghost: 'bg-transparent hover:bg-gray-100',
          },
        },
        input: {
          rounded: 'rounded-md',
          class: 'border border-gray-300 px-4 py-2 text-gray-800',
        },
      },
      header: {
        wrapper: 'bg-gray-50 dark:bg-gray-900 shadow-md',
        links: {
          base: 'text-gray-700 dark:text-gray-200 px-4 py-2 hover:text-primary',
          active: 'font-bold text-primary',
        },
      },
      footer: {
        wrapper: 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 py-8',
        links: 'hover:text-primary',
      },
    },
    seo: {
      defaultTitle: 'My Nuxt App',
      titleTemplate: '%s - My Nuxt App',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' },
        { name: 'theme-color', content: '#ffffff' },
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico' },
      ],
      og: {
        type: 'website',
        siteName: 'My Nuxt App',
        locale: 'en_US',
      },
      twitter: {
        card: 'summary_large_image',
        site: '@myapp',
      },
    },
  });
  