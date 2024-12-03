import { defineLayerStyles } from "@pandacss/dev";

export const layerStyles = defineLayerStyles({
  input: {
    value: {
      textStyle: 'md',
      bg: "transparent",
      border: '1px solid',
      borderColor: 'transparent',
      color: 'gray',
      _disabled: {
        cursor: 'not-allowed',
      },
      _focus: {
        outline: '0',
        outlineWidth: '2px',
        outlineStyle: 'solid',
        outlineColor: 'transparent'
      }
    }
  }
});