/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface InputGroupVariant {
  
}

type InputGroupVariantMap = {
  [key in keyof InputGroupVariant]: Array<InputGroupVariant[key]>
}

export type InputGroupVariantProps = {
  [key in keyof InputGroupVariant]?: ConditionalValue<InputGroupVariant[key]> | undefined
}

export interface InputGroupRecipe {
  __type: InputGroupVariantProps
  (props?: InputGroupVariantProps): string
  raw: (props?: InputGroupVariantProps) => InputGroupVariantProps
  variantMap: InputGroupVariantMap
  variantKeys: Array<keyof InputGroupVariant>
  splitVariantProps<Props extends InputGroupVariantProps>(props: Props): [InputGroupVariantProps, Pretty<DistributiveOmit<Props, keyof InputGroupVariantProps>>]
  getVariantProps: (props?: InputGroupVariantProps) => InputGroupVariantProps
}


export declare const inputGroup: InputGroupRecipe