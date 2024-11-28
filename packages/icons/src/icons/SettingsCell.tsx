import * as React from "react"
import type { SVGProps } from "react"
const SvgSettingsCell = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M309.5 0q-12.5 0-21-8.63Q280-17.25 280-30q0-12 8.63-21 8.62-9 21.37-9 12 0 21 9t9 21.5-9 21T309.5 0m170.32 0Q467 0 458.5-8.68q-8.5-8.67-8.5-21.5 0-12.82 8.68-21.32 8.67-8.5 21.5-8.5 12.82 0 21.32 8.68 8.5 8.67 8.5 21.5Q510-17 501.32-8.5 492.65 0 479.82 0m170 0Q637 0 628.5-8.63 620-17.25 620-30q0-12 8.68-21 8.67-9 21.5-9 12.82 0 21.32 9t8.5 21.5-8.68 21Q662.65 0 649.82 0M300-160q-23 0-41.5-18.5T240-220v-680q0-24 18.5-42t41.5-18h360q23 0 41.5 18t18.5 42v680q0 23-18.5 41.5T660-160zm0-60h360v-60H300zm0-120h360v-440H300zm0-500h360v-60H300zm0 0v-60zm0 620v-60z" />
	</svg>
)
export default SvgSettingsCell
