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
    }
  }
})