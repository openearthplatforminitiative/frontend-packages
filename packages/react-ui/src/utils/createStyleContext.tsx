import { type ElementType, Ref, createContext, useContext } from "react"
import { cx } from "@openepi/styled-system/css"
import {
	type StyledComponent,
	isCssProperty,
	styled,
} from "@openepi/styled-system/jsx"

type Props = Record<string, unknown>
type Recipe = {
	(props?: Props): Props
	splitVariantProps: (props: Props) => [Props, Props]
}
type Slot<R extends Recipe> = keyof ReturnType<R>
type Options = { forwardProps?: string[] }

type PropsWithRef<P, T> = P & { ref?: Ref<T> }

const shouldForwardProp = (
	prop: string,
	variantKeys: string[],
	options: Options = {}
) =>
	options.forwardProps?.includes(prop) ||
	(!variantKeys.includes(prop) && !isCssProperty(prop))

export const createStyleContext = <R extends Recipe>(recipe: R) => {
	const StyleContext = createContext<Record<Slot<R>, string> | null>(null)

	const withRootProvider = <P extends {}>(Component: ElementType) => {
		const StyledComponent = (props: P) => {
			const [variantProps, otherProps] = recipe.splitVariantProps(props)
			const slotStyles = recipe(variantProps) as Record<Slot<R>, string>

			return (
				<StyleContext value={slotStyles}>
					<Component {...otherProps} />
				</StyleContext>
			)
		}
		return StyledComponent
	}

	const withProvider = <T, P extends { className?: string | undefined }>(
		Component: ElementType,
		slot: Slot<R>,
		options?: Options
	) => {
		const StyledComponent = styled(
			Component,
			{},
			{
				shouldForwardProp: (prop, variantKeys) =>
					shouldForwardProp(prop, variantKeys, options),
			}
		) as StyledComponent<ElementType>
		const StyledSlotProvider = ({ ref, ...props }: PropsWithRef<P, T>) => {
			const [variantProps, otherProps] = recipe.splitVariantProps(props)
			const slotStyles = recipe(variantProps) as Record<Slot<R>, string>

			return (
				<StyleContext value={slotStyles}>
					<StyledComponent
						{...otherProps}
						ref={ref}
						className={cx(slotStyles?.[slot], props.className)}
					/>
				</StyleContext>
			)
		}
		// @ts-expect-error
		StyledSlotProvider.displayName = Component.displayName || Component.name

		return StyledSlotProvider
	}

	const withContext = <T, P extends { className?: string | undefined }>(
		Component: ElementType,
		slot: Slot<R>
	) => {
		const StyledComponent = styled(Component)
		const StyledSlotComponent = ({ ref, ...props }: PropsWithRef<P, T>) => {
			const slotStyles = useContext(StyleContext)
			return (
				<StyledComponent
					{...props}
					ref={ref}
					className={cx(slotStyles?.[slot], props.className)}
				/>
			)
		}
		// @ts-expect-error
		StyledSlotComponent.displayName = Component.displayName || Component.name

		return StyledSlotComponent
	}

	return {
		withRootProvider,
		withProvider,
		withContext,
	}
}
