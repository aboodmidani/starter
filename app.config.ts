export default defineAppConfig({
  ui: {
    primary: "indigo",
    gray: "zinc",
    variables: {
      light: {
        background: "var(--color-gray-50)",
      },
      dark: {
        background: "var(--color-gray-950)",
      },
    },
    button: {
      rounded: "rounded-full",
      default: {
        size: "md",
        color: "black",
      },
    },
    input: {
      rounded: "rounded-full",
    },
    header: {
      wrapper: "lg:!border-transparent bg-gray-50 dark:bg-gray-950",
      links: {
        wrapper:
          "ring-1 ring-gray-200 dark:ring-gray-800 px-3 gap-x-0 rounded-full",
        base: "py-2 px-4 font-medium transition-colors relative after:absolute after:-bottom-px after:inset-x-2 after:h-px after:rounded-full after:opacity-0 after:bg-gray-900 dark:after:bg-white after:transition-opacity",
        active: "text-gray-900 dark:text-white after:opacity-100",
        inactive:
          "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200",
      },
    },
    footer: {
      top: {
        wrapper: "border-t border-gray-200 dark:border-gray-800",
        container: "py-8 lg:py-16",
      },
      bottom: {
        wrapper: "border-t border-gray-200 dark:border-gray-800",
      },
    },
  },
  carousel: {
    slots: {
      root: "relative focus:outline-none",
      viewport: "overflow-hidden",
      container: "flex items-start",
      item: "min-w-0 shrink-0 basis-full",
      controls: "",
      arrows: "",
      prev: "absolute rounded-full",
      next: "absolute rounded-full",
      dots: "absolute inset-x-0 -bottom-7 flex flex-wrap items-center justify-center gap-3",
      dot: [
        "cursor-pointer size-3 bg-[var(--ui-border-accented)] rounded-full",
        "transition",
      ],
    },
    variants: {
      orientation: {
        vertical: {
          container: "flex-col -mt-4",
          item: "pt-4",
          prev: "-top-12 left-1/2 -translate-x-1/2 rotate-90 rtl:-rotate-90",
          next: "-bottom-12 left-1/2 -translate-x-1/2 rotate-90 rtl:-rotate-90",
        },
        horizontal: {
          container: "flex-row -ms-4",
          item: "ps-4",
          prev: "-start-12 top-1/2 -translate-y-1/2",
          next: "-end-12 top-1/2 -translate-y-1/2",
        },
      },
      active: {
        true: {
          dot: "bg-[var(--ui-border-inverted)]",
        },
      },
    },
    defaultVariants: {
      orientation: "horizontal",
    },
  },
  navbar: {
    heroText: 'Your Hero Text',
    firstText: 'First Text',
    secondText: 'Second Text'
  }
});
