import { createAnatomy } from "@zag-js/anatomy";

export const cardAnatomy = createAnatomy("card").parts(
  "root",
  "content",
  "outerIcon",
  "body",
  "title",
  "srcIcon",
  "description",
)