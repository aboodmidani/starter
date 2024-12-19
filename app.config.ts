export default defineAppConfig({
  ui: {
    colors: {
      primary: 'blue',
      secondary: 'gray',
    },
    navbar: {
      background: 'bg-blue-600',
      text: 'text-white',
      hover: 'hover:text-gray-300'
    },
    footer: {
      background: 'bg-gray-800',
      text: 'text-gray-200',
      linkHover: 'hover:text-gray-400',
      content: {
        text: "© 2024 My Company",
        privacy: "/privacy",
        terms: "/terms"
      }
    },
    seo: {
      title: 'My Site - Discover Amazing Things',
      description: 'Explore the best services and features on our platform.',
      keywords: 'web, services, amazing, platform'
    }
  }
})
