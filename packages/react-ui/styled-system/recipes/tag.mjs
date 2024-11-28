import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const tagDefaultVariants = {}
const tagCompoundVariants = []

const tagSlotNames = [
  [
    "root",
    "tag__root"
  ],
  [
    "preview",
    "tag__preview"
  ],
  [
    "input",
    "tag__input"
  ],
  [
    "text",
    "tag__text"
  ],
  [
    "deleteTrigger",
    "tag__deleteTrigger"
  ]
]
const tagSlotFns = /* @__PURE__ */ tagSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, tagDefaultVariants, getSlotCompoundVariant(tagCompoundVariants, slotName))])

const tagFn = memo((props = {}) => {
  return Object.fromEntries(tagSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const tagVariantKeys = []
const getVariantProps = (variants) => ({ ...tagDefaultVariants, ...compact(variants) })

export const tag = /* @__PURE__ */ Object.assign(tagFn, {
  __recipe__: false,
  __name__: 'tag',
  raw: (props) => props,
  variantKeys: tagVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, tagVariantKeys)
  },
  getVariantProps
})