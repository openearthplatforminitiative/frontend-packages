import { memo, splitProps } from '../helpers.mjs';
import { createRecipe, mergeRecipes } from './create-recipe.mjs';

const inputFn = /* @__PURE__ */ createRecipe('input', {
  "variant": "outlined"
}, [])

const inputVariantMap = {
  "variant": [
    "outlined",
    "filled",
    "unstyled"
  ]
}

const inputVariantKeys = Object.keys(inputVariantMap)

export const input = /* @__PURE__ */ Object.assign(memo(inputFn.recipeFn), {
  __recipe__: true,
  __name__: 'input',
  __getCompoundVariantCss__: inputFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: inputVariantKeys,
  variantMap: inputVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, inputVariantKeys)
  },
  getVariantProps: inputFn.getVariantProps,
})