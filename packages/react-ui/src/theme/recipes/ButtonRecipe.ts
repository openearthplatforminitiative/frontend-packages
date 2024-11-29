import { defineRecipe } from "@pandacss/dev";

export const buttonRecipe = defineRecipe({
  className: "button",
  base: {
    colorPalette: 'primary',
    display: "inline-flex",
    appearance: "none",
    alignItems: "center",
    justifyContent: "center",
    userSelect: "none",
    position: "relative",
    borderRadius: "full",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    borderWidth: "1px",
    borderColor: "transparent",
    cursor: "pointer",
    flexShrink: "0",
    outline: "0",
    _disabled: {
      backgroundColor: "gray.solid!",
      borderColor: "gray.solid!",
      color: "gray.contrast!",
      cursor: "not-allowed!",
      opacity: "50%!",
    },
    _loading: {
      cursor: "wait",
      opacity: "50%",
    },
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
        _expanded: {
          bg: "colorPalette.muted",
          _hover: {
            bg: "colorPalette.subtle"
          }
        },
      },
      ghost: {
        color: "fg",
        _hover: {
          bg: "gray.subtle",
        },
        _open: {
          bg: "colorPalette.muted",
          _hover: {
            bg: "colorPalette.subtle"
          }
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
      sm: {
        h: "10",
        minW: "12",
        py: "2",
        px: "6",
        textStyle: "md",
        gap: "2",
      },
      md: {
        h: "11",
        minW: "10",
        py: "2",
        px: "6",
        textStyle: "xl",
        gap: "1",
      },
      lg: {
        h: "12",
        minW: "10",
        py: "2",
        px: "6",
        textStyle: "2xl",
        gap: "2",
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
    radius: "full",
    size: "md"
  }
});