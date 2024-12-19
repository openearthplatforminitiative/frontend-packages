import { tagsInputAnatomy } from "@ark-ui/react";
import { defineSlotRecipe } from "@pandacss/dev";

export const tagsInputRecipe = defineSlotRecipe({
	className: "tags-input",
	slots: tagsInputAnatomy.keys(),
  base: {
    root: {
      display: "flex",
      gap: "2",
    },
    control: {
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      flex: "1",
      gap: "1",
    },
    input: {
      outline: 0
    },
    clearTrigger: {
      justifySelf: "flex-end",
      ml: "auto"
    },
    itemPreview: {
      display: "inline-flex",
      alignItems: "center",
      border: "solid 1px",
      borderColor: "border",
      borderRadius: "lg",
      h: "6",
      py: "0.5",
      px: "1",
      gap: "1",
      textStyle: "sm",
      _highlighted: {
        outline: "0",
        outlineWidth: '2px',
        outlineStyle: 'solid',
        outlineColor: 'primary.solid/50',
      },
    },
    itemDeleteTrigger: {
      borderLeft: "solid 1px",
      borderColor: "border",
      pl: "1",
    },
    itemInput: {
      outline: 0,
      border: "solid 1px",
      borderColor: "border",
      borderRadius: "lg",
      p: "1",
      textStyle: "sm",
    },
  }
})