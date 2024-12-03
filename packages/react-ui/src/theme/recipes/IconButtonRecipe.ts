import { defineRecipe } from "@pandacss/dev";

export const iconButtonRecipe = defineRecipe({
  className: "iconbutton",
  base: {
    colorPalette: 'primary',
    display: "inline-flex",
    appearance: "none",
    alignItems: "center",
    justifyContent: "center",
    userSelect: "none",
    position: "relative",
    whiteSpace: "nowrap",
    borderRadius: "lg",
    verticalAlign: "middle",
    borderWidth: "1px",
    borderColor: "transparent",
    cursor: "pointer",
    flexShrink: "0",
    outline: "0",
    transitionProperty: "common",
    transitionDuration: "moderate",
    focusVisibleRing: "outside",
    _focus: {
      outline: '0',
      outlineWidth: '2px',
      outlineStyle: 'solid',
      outlineColor: 'colorPalette.solid/50',
    },
  },
  variants: {
    variant: {
      solid: {
        backgroundColor: "colorPalette.solid",
        color: "colorPalette.contrast",
        borderColor: "colorPalette.solid",
        _focus: {
          backgroundColor: "colorPalette.solid/80",
        },
        _hover: {
          backgroundColor: "colorPalette.solid/90",
          color: "colorPalette.contrast/90"
        },
        _active: {
          backgroundColor: "colorPalette.solid/80",
          color: "colorPalette.contrast/80"
        },
        _expanded: {
          backgroundColor: "colorPalette.solid/80",
          color: "colorPalette.contrast/80"
        },
      },
      subtle: {
        bg: "colorPalette.muted",
        color: "colorPalette.fg",
        _hover: {
          bg: "colorPalette.emphasized",
        },
      },
      surface: {
        bg: "colorPalette.subtle",
        color: "colorPalette.fg",
        borderColor: "colorPalette.muted",
        _hover: {
          bg: "colorPalette.muted",
        },
        _expanded: {
          bg: "colorPalette.muted",
        },
      },
      outline: {
        borderColor: "colorPalette.solid",
        color: "colorPalette.fg",
        _hover: {
          bg: "colorPalette.subtle",
        },
      },
      ghost: {
        color: "fg",
        _hover: {
          bg: "gray.subtle",
        },
        _active: {
          bg: "colorPalette.muted",
        },
      },
      plain: {
        color: "colorPalette.fg",
      },
    },
    size: {
      xs: {
        h: "6",
        w: "6",
        p: "0.5",
        textStyle: "md",
      },
      sm: {
        h: "10",
        w: "10",
        p: "2",
        textStyle: "lg",
      },
      md: {
        h: "11",
        w: "11",
        p: "2",
        textStyle: "2xl",
      },
      lg: {
        h: "12",
        w: "12",
        p: "2",
        textStyle: "3xl",
      },
    },
    radius: {
      lg: {
        borderRadius: "lg",
      },
      full: {
        borderRadius: "full",
      }
    },
  },
  defaultVariants: {
    variant: "solid",
    radius: "lg",
    size: "md"
  }
});