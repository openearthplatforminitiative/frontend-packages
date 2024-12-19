/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface NativeSelectVariant {
  /**
 * @default "outlined"
 */
variant: "outlined" | "filled" | "unstyled"
/**
 * @default "md"
 */
size: "xs" | "sm" | "md" | "lg" | "xl" | "none"
}

type NativeSelectVariantMap = {
  [key in keyof NativeSelectVariant]: Array<NativeSelectVariant[key]>
}

export type NativeSelectVariantProps = {
  [key in keyof NativeSelectVariant]?: ConditionalValue<NativeSelectVariant[key]> | undefined
}

export interface NativeSelectRecipe {
  __type: NativeSelectVariantProps
  (props?: NativeSelectVariantProps): string
  raw: (props?: NativeSelectVariantProps) => NativeSelectVariantProps
  variantMap: NativeSelectVariantMap
  variantKeys: Array<keyof NativeSelectVariant>
  splitVariantProps<Props extends NativeSelectVariantProps>(props: Props): [NativeSelectVariantProps, Pretty<DistributiveOmit<Props, keyof NativeSelectVariantProps>>]
  getVariantProps: (props?: NativeSelectVariantProps) => NativeSelectVariantProps
}


export declare const nativeSelect: NativeSelectRecipe