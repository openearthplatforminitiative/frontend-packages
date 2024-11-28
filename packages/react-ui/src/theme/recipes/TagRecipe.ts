import { defineSlotRecipe } from "@pandacss/dev";
import { tagAnatomy } from "../../anatomies/tag";

export const tagRecipe = defineSlotRecipe({
  className: "tag",
  slots: tagAnatomy.keys(),
  base: {
    preview: {
      display: "inline-flex",
      border: "solid 1px",
      borderColor: "border",
      borderRadius: "lg",
      p: "1",
      gap: "1",
      textStyle: "sm",
      _highlighted: {
        outline: "0",
        outlineWidth: '2px',
        outlineStyle: 'solid',
        outlineColor: 'primary.solid/50',
      },
    },
    deleteTrigger: {
      borderLeft: "solid 1px",
      borderColor: "border",
      pl: "1",
    },
    input: {
      outline: 0,
      border: "solid 1px",
      borderColor: "border",
      borderRadius: "lg",
      p: "1",
      textStyle: "sm",
    },
  },
})