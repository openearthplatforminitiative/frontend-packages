import { memo, splitProps } from '../helpers.mjs';
import { createRecipe, mergeRecipes } from './create-recipe.mjs';

const textAreaFn = /* @__PURE__ */ createRecipe('text-area', {}, [])

const textAreaVariantMap = {}

const textAreaVariantKeys = Object.keys(textAreaVariantMap)

export const textArea = /* @__PURE__ */ Object.assign(memo(textAreaFn.recipeFn), {
  __recipe__: true,
  __name__: 'textArea',
  __getCompoundVariantCss__: textAreaFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: textAreaVariantKeys,
  variantMap: textAreaVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, textAreaVariantKeys)
  },
  getVariantProps: textAreaFn.getVariantProps,
})