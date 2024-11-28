import { menuAnatomy } from "@ark-ui/react";
import { defineSlotRecipe } from "@pandacss/dev";

export const menuRecipe = defineSlotRecipe({
	className: "menu",
	slots: menuAnatomy.keys(),
	base: {
    indicator: {
      _open: {
        transform: "rotate(180deg)"
      }
    },
    content: {
      bg: "bg",
      border: "1px solid",
      borderColor: "border",
      rounded: "lg",
      minW: "8rem",
      p: 1,
      boxShadow: "1rem 1rem 1rem rgba(0, 0, 0, 0.1)"
    },
    item: {
      px: 2,
      py: 1,
      rounded: "lg",
      _hover: {
        bg: "gray.100"
      },
      _highlighted: {
        bg: "gray.100"
      }
    },
    triggerItem: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      px: 2,
      py: 1,
      rounded: "lg",
      _hover: {
        bg: "gray.100"
      },
      _highlighted: {
        bg: "gray.100"
      }
    },
    separator: {
      mx: -1,
      my: 1,
      color: "border"
    }
	},
})