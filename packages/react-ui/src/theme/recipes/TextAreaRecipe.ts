import { defineRecipe } from "@pandacss/dev";

export const textAreaRecipe = defineRecipe({
  className: "text-area",
  base: {
    border: '1px solid',
    borderColor: 'border',
    borderRadius: 'lg',
    minH: '11',
    minW: 'md',
    p: '2',
    textStyle: 'md',
    outline: '0',
    _disabled: {
      color: 'fg.muted',
      borderColor: 'border.muted',
      cursor: 'not-allowed',
    },
    _focus: {
      outline: '0',
      outlineWidth: '2px',
      outlineStyle: 'solid',
      outlineColor: 'gray.focusRing',
    },
    _invalid: {
      borderColor: 'border.error',
      _focus: {
        outlineColor: 'error.focusRing',
      }
    }
  }
})