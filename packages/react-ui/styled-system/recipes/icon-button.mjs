import { memo, splitProps } from '../helpers.mjs';
import { createRecipe, mergeRecipes } from './create-recipe.mjs';

const iconButtonFn = /* @__PURE__ */ createRecipe('iconbutton', {
  "variant": "solid",
  "radius": "lg",
  "size": "md"
}, [])

const iconButtonVariantMap = {
  "variant": [
    "solid",
    "subtle",
    "surface",
    "outline",
    "ghost",
    "plain"
  ],
  "size": [
    "2xs",
    "xs",
    "sm",
    "md",
    "lg"
  ],
  "radius": [
    "lg",
    "full"
  ]
}

const iconButtonVariantKeys = Object.keys(iconButtonVariantMap)

export const iconButton = /* @__PURE__ */ Object.assign(memo(iconButtonFn.recipeFn), {
  __recipe__: true,
  __name__: 'iconButton',
  __getCompoundVariantCss__: iconButtonFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: iconButtonVariantKeys,
  variantMap: iconButtonVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, iconButtonVariantKeys)
  },
  getVariantProps: iconButtonFn.getVariantProps,
})