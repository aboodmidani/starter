export const useScrollspy = () => {
  const activeHeadings = ref<string[]>([])

  const updateHeadings = (elements: (Element | null)[]) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.id) {
          activeHeadings.value = [entry.target.id]
        }
      })
    }, { threshold: 0.5 })

    elements.forEach(el => el && observer.observe(el))
  }

  return {
    activeHeadings,
    updateHeadings
  }
} 