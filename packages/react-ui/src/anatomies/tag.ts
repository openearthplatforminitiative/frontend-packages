import { dialogAnatomy as arkDialogAnatomy } from "@ark-ui/react"
import { createAnatomy } from "@zag-js/anatomy"

export const tagAnatomy = createAnatomy("tag").parts(
  "root",
  "preview",
  "input",
  "text",
  "deleteTrigger"
)