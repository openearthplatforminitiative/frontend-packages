/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface TextVariant {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"
}

type TextVariantMap = {
  [key in keyof TextVariant]: Array<TextVariant[key]>
}

export type TextVariantProps = {
  [key in keyof TextVariant]?: ConditionalValue<TextVariant[key]> | undefined
}

export interface TextRecipe {
  __type: TextVariantProps
  (props?: TextVariantProps): string
  raw: (props?: TextVariantProps) => TextVariantProps
  variantMap: TextVariantMap
  variantKeys: Array<keyof TextVariant>
  splitVariantProps<Props extends TextVariantProps>(props: Props): [TextVariantProps, Pretty<DistributiveOmit<Props, keyof TextVariantProps>>]
  getVariantProps: (props?: TextVariantProps) => TextVariantProps
}


export declare const text: TextRecipe