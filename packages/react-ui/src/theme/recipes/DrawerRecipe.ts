import { dialogAnatomy } from "../../anatomies/dialog";
import { defineSlotRecipe } from "@pandacss/dev";

export const drawerRecipe = defineSlotRecipe({
	className: "drawer",
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
      justifyContent: "end",
      zIndex: "modal",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      width: "full",
      height: "full",
      outline: 0,
      borderRadius: "lg",
      textStyle: "sm",
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
      top: {
        positioner: {
          justifyContent: "stretch",
          alignItems: "flex-start",
          pb: "var(--padding)",
        },
        content: {
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          maxH: "var(--size)",
          _open: {
            animationName: "slide-from-top, fade-in",
          },
          _closed: {
            animationName: "slide-to-top, fade-out",
          },
        },
      },
      left: {
        positioner: {
          justifyContent: "flex-start",
          alignItems: "stretch",
          pr: "var(--padding)",
        },
        content: {
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          maxW: "var(--size)",
          _open: {
            animationName: "slide-from-left, fade-in",
          },
          _closed: {
            animationName: "slide-to-left, fade-out",
          },
        },
      },
      bottom: {
        positioner: {
          justifyContent: "stretch",
          alignItems: "flex-end",
          pt: "var(--padding)",
        },
        content: {
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          maxH: "var(--size)",
          _open: {
            animationName: "slide-from-bottom, fade-in",
          },
          _closed: {
            animationName: "slide-to-bottom, fade-out",
          },
        },
      },
      right: {
        positioner: {
          justifyContent: "flex-end",
          alignItems: "stretch", 
          pl: "var(--padding)",
        },
        content: {
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          maxW: "var(--size)",
          _open: {
            animationName: "slide-from-right, fade-in",
          },
          _closed: {
            animationName: "slide-to-right, fade-out",
          },
        },
      },
    },
    size: {
      xs: {
        positioner: {
          '--padding': 'var(--spacing-10)',
        },
        content: {
          '--size': 'var(--sizes-sm)',
        }
      },
      sm: {
        positioner: {
          '--padding': 'var(--spacing-10)',
        },
        content: {
          '--size': 'var(--sizes-md)',
        }
      },
      md: {
        positioner: {
          '--padding': 'var(--spacing-10)',
        },
        content: {
          '--size': 'var(--sizes-lg)',
        }
      },
      lg: {
        positioner: {
          '--padding': 'var(--spacing-10)',
        },
        content: {
          '--size': 'var(--sizes-2xl)',
        }
      },
      xl: {
        positioner: {
          '--padding': 'var(--spacing-10)',
        },
        content: {
          '--size': 'var(--sizes-4xl)',
        }
      },
      cover: {
        positioner: {
          '--padding': 'var(--spacing-10)',
        }
      },
      full: {
        content: {
          borderRadius: 0,
        }
      },
    },
  },
  defaultVariants: {
    size: "md",
    placement: "right",
  },
});