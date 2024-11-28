import { defineGlobalStyles } from "@pandacss/dev";

export const globalCss = defineGlobalStyles({
  ":root": {
    "--global-font-body": "fonts.default"
  },
  "html, body": {
    "font-size": '100%',
  }
})
