import { defineSemanticTokens } from "@pandacss/dev";

export const semanticColors = defineSemanticTokens.colors({
  bg: {
    DEFAULT: {
      value: "{colors.white}",
    },
    subtle: {
      value: "{colors.gray.50}",
    },
    muted: {
      value: "{colors.gray.100}",
    },
    emphasized: {
      value: "{colors.gray.200}",
    },
    inverted: {
      value: "{colors.black}",
    },
    panel: {
      value: "{colors.white}",
    },
    error: {
      value: "{colors.red.50}",
    },
    warning: {
      value: "{colors.orange.50}",
    },
    success: {
      value: "{colors.green.50}",
    },
    info: {
      value: "{colors.blue.50}",
    },
  },
  fg: {
    DEFAULT: {
      value: "{colors.black}",
    },
    muted: {
      value: "{colors.gray.600}",
    },
    subtle: {
      value: "{colors.gray.400}",
    },
    inverted: {
      value: "{colors.gray.50}",
    },
    error: {
      value: "{colors.red.500}",
    },
    warning: {
      value: "{colors.orange.600}",
    },
    success: {
      value: "{colors.green.600}",
    },
    info: {
      value: "{colors.blue.600}",
    },
  },
  border: {
    DEFAULT: {
      value: "{colors.gray.200}",
    },
    muted: {
      value: "{colors.gray.100}",
    },
    subtle: {
      value: "{colors.gray.50}",
    },
    emphasized: {
      value: "{colors.gray.300}",
    },
    inverted: {
      value: "{colors.gray.800}",
    },
    error: {
      value: "{colors.red.500}",
    },
    warning: {
      value: "{colors.orange.500}",
    },
    success: {
      value: "{colors.green.500}",
    },
    info: {
      value: "{colors.blue.500}",
    },
  },

  gray: {
    contrast: {
      value: "white",
    },
    fg: {
      value: "{colors.gray.700}",
    },
    subtle: {
      value: "{colors.gray.100}",
    },
    muted: {
      value: "{colors.gray.200}",
    },
    emphasized: {
      value: "{colors.gray.300}",
    },
    solid: {
      value: "{colors.gray.700}",
    },
    focusRing: {
      value: "{colors.gray.800}",
    },
  },

  primary: {
    contrast: {
      value: "white",
    },
    fg: {
      value: "{colors.green.700}",
    },
    subtle: {
      value: "{colors.green.100}",
    },
    muted: {
      value: "{colors.green.200}",
    },
    emphasized: {
      value: "{colors.green.300}",
    },
    solid: {
      value: "{colors.green.700}",
    },
    focusRing: {
      value: "{colors.green.600}",
    },
  },

  secondary: {
    contrast: {
      value: "white",
    },
    fg: {
      value: "{colors.teal.700}",
    },
    subtle: {
      value: "{colors.teal.100}",
    },
    muted: {
      value: "{colors.teal.200}",
    },
    emphasized: {
      value: "{colors.teal.300}",
    },
    solid: {
      value: "{colors.teal.700}",
    },
    focusRing: {
      value: "{colors.teal.600}",
    },
  },

  tertiary: {
    contrast: {
      value: "white",
    },
    fg: {
      value: "{colors.cyan.700}",
    },
    subtle: {
      value: "{colors.cyan.100}",
    },
    muted: {
      value: "{colors.cyan.200}",
    },
    emphasized: {
      value: "{colors.cyan.300}",
    },
    solid: {
      value: "{colors.cyan.700}",
    },
    focusRing: {
      value: "{colors.cyan.600}",
    },
  },
})
