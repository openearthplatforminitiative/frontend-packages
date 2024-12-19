import { dialogAnatomy } from "../../anatomies/dialog";
import { defineSlotRecipe } from "@pandacss/dev";

export const dialogRecipe = defineSlotRecipe({
	className: "dialog",
	slots: dialogAnatomy.keys(),
	base: {
    backdrop: {
      bg: "black/50",
      pos: "fixed",
      left: 0,
      top: 0,
      w: "screen",
      h: "screen",
      zIndex: "modal",
      _open: {
        animation: "fadeIn",
      },
      _close: {
        animation: "fadeOut",
      }
    },
    positioner: {
      pos: "fixed",
      left: 0,
      top: 0,
      width: "screen",
      height: "screen",
      display: "flex",
      justifyContent: "center",
      zIndex: "modal",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      width: "100%",
      outline: 0,
      borderRadius: "lg",
      textStyle: "sm",
      m: 4,
      zIndex: "modal",
      bg: "gray.subtle",
      boxShadow: "lg",
      _open: {
        animationDuration: "200ms",
      },
      _closed: {
        animationDuration: "100ms",
      },
    },
    closeTrigger: {
      position: "absolute",
      top: "3",
      right: "3",
    },
    header: {
      flex: 0,
      px: "6",
      pt: "6",
      pb: "4",
    },
    body: {
      flex: "1",
      px: "6",
      pt: "2",
      pb: "6",
    },
    footer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      gap: "3",
      px: "6",
      pt: "2",
      pb: "4",
    },
    title: {
      textStyle: "2xl",
    }
  },

  variants: {
    placement: {
      center: {
        positioner: {
          alignItems: "center",
        },
        content: {
          "--dialog-base-margin": "auto",
          mx: "auto",
        },
      },
      top: {
        positioner: {
          alignItems: "flex-start",
        },
        content: {
          "--dialog-base-margin": "spacing.16",
          mx: "auto",
        },
      },
      bottom: {
        positioner: {
          alignItems: "flex-end",
        },
        content: {
          "--dialog-base-margin": "spacing.16",
          mx: "auto",
        },
      },
    },
    size: {
      xs: {
        content: {
          maxW: "sm",
        },
      },
      sm: {
        content: {
          maxW: "md",
        },
      },
      md: {
        content: {
          maxW: "lg",
        },
      },
      lg: {
        content: {
          maxW: "2xl",
        },
      },
      xl: {
        content: {
          maxW: "4xl",
        },
      },
      cover: {
        positioner: {
          padding: "10",
        },
        content: {
          width: "full",
          height: "full",
          m: 0,
        },
      },
      full: {
        content: {
          maxW: "screen",
          minH: "screen",
          m: 0,
          "--dialog-margin": "0",
          borderRadius: "0",
        },
      },
    },

    motionPreset: {
      scale: {
        content: {
          _open: { animationName: "scale-in, fade-in" },
          _closed: { animationName: "scale-out, fade-out" },
        },
      },
      "slide-in-bottom": {
        content: {
          _open: { animationName: "slide-from-bottom, fade-in" },
          _closed: { animationName: "slide-to-bottom, fade-out" },
        },
      },
      "slide-in-top": {
        content: {
          _open: { animationName: "slide-from-top, fade-in" },
          _closed: { animationName: "slide-to-top, fade-out" },
        },
      },
      "slide-in-left": {
        content: {
          _open: { animationName: "slide-from-left, fade-in" },
          _closed: { animationName: "slide-to-left, fade-out" },
        },
      },
      "slide-in-right": {
        content: {
          _open: { animationName: "slide-from-right, fade-in" },
          _closed: { animationName: "slide-to-right, fade-out" },
        },
      },
      none: {},
    },
  },

  defaultVariants: {
    size: "md",
    placement: "top",
    motionPreset: "scale",
  },
});