import type { SVGProps } from "react"
const SvgFalling = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="m532-62-60-12 31-168-146-110-55-240-105 90 31 148-60 12-37-180 174-155q21-19 49-15t55 15q34 14 70 20.5t72 1.5q33-5 61.5-22.5T667-716l38 47q-27 21-56 40t-62 28q-35 10-72 8t-72-11l33 150 154-29 196 139-36 48-168-117-170 34 121 89zM320-760q-29 0-49.5-20.5T250-830t20.5-49.5T320-900t49.5 20.5T390-830t-20.5 49.5T320-760" />
	</svg>
)
export default SvgFalling
