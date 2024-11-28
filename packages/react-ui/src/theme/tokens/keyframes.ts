import { defineKeyframes } from "@pandacss/dev";

export const keyframes = defineKeyframes({
  spin: {
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  },
  fadeIn: {
    "0%": { opacity: 0 },
    "100%": { opacity: 1 },
  },
  fadeOut: {
    "0%": { opacity: 1 },
    "100%": { opacity: 0 },
  },
  scaleIn: {
    "0%": { transform: "scale(0)" },
    "100%": { transform: "scale(1)" },
  },
  scaleOut: {
    "0%": { transform: "scale(1)" },
    "100%": { transform: "scale(0)" },
  }
})