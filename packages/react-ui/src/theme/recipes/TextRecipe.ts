import { defineRecipe } from "@pandacss/dev";

export const TextRecipe = defineRecipe({
  className: "text",
  variants: {
    variant: {
      h1: {
        textStyle: "7xl",
      },
      h2: {
        textStyle: "6xl",
      },
      h3: {
        textStyle: "5xl",
      },
      h4: {
        textStyle: "4xl",
      },
      h5: {
        textStyle: "3xl",
      },
      h6: {
        textStyle: "2xl",
      },
      p: {
        textStyle: "md",
      },
      span: {
        textStyle: "md",
      },
    }
  }
})