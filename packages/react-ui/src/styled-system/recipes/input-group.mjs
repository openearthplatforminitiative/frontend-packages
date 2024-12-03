import { memo, splitProps } from '../helpers.mjs';
import { createRecipe, mergeRecipes } from './create-recipe.mjs';

const inputGroupFn = /* @__PURE__ */ createRecipe('inputgroup', {
  "variant": "outlined"
}, [])

const inputGroupVariantMap = {
  "variant": [
    "outlined",
    "filled"
  ]
}

const inputGroupVariantKeys = Object.keys(inputGroupVariantMap)

export const inputGroup = /* @__PURE__ */ Object.assign(memo(inputGroupFn.recipeFn), {
  __recipe__: true,
  __name__: 'inputGroup',
  __getCompoundVariantCss__: inputGroupFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: inputGroupVariantKeys,
  variantMap: inputGroupVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, inputGroupVariantKeys)
  },
  getVariantProps: inputGroupFn.getVariantProps,
})