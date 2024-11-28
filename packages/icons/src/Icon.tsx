import { IconName } from "./index"
import DefaultIcon from "./icons/Help"
import type { SVGProps } from "react"
import { lazy, Suspense } from "react"

export type IconProps = {
	name: IconName
	filled?: boolean
} & SVGProps<SVGSVGElement>

const Empty = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 -960 960 960"
		{...props}
	></svg>
)

export const Icon = ({ name, filled, ...rest }: IconProps) => {
	const FallbackIcon = <Empty {...rest} />
	const ErrorIcon = <DefaultIcon {...rest} />

	const iconName = `${name}${filled ? "Fill" : ""}`
	const IconComponent = lazy(() =>
		import("./icons/" + iconName + ".js").catch(() => ({
			default: () => ErrorIcon,
		}))
	)
	return (
		<Suspense fallback={FallbackIcon}>
			<IconComponent {...rest} />
		</Suspense>
	)
}
