/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface TextAreaVariant {
  
}

type TextAreaVariantMap = {
  [key in keyof TextAreaVariant]: Array<TextAreaVariant[key]>
}

export type TextAreaVariantProps = {
  [key in keyof TextAreaVariant]?: ConditionalValue<TextAreaVariant[key]> | undefined
}

export interface TextAreaRecipe {
  __type: TextAreaVariantProps
  (props?: TextAreaVariantProps): string
  raw: (props?: TextAreaVariantProps) => TextAreaVariantProps
  variantMap: TextAreaVariantMap
  variantKeys: Array<keyof TextAreaVariant>
  splitVariantProps<Props extends TextAreaVariantProps>(props: Props): [TextAreaVariantProps, Pretty<DistributiveOmit<Props, keyof TextAreaVariantProps>>]
  getVariantProps: (props?: TextAreaVariantProps) => TextAreaVariantProps
}


export declare const textArea: TextAreaRecipe