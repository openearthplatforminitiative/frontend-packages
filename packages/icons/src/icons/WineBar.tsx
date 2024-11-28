import * as React from "react"
import type { SVGProps } from "react"
const SvgWineBar = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M320-120v-60h130v-185q-99-14-154.5-79.7Q240-510.41 240-600v-240h480v240q0 90-55.5 155.5T510-365v185h130v60zm159.86-300q69.14 0 120.64-47.5T658-570H302q5 55 56.86 102.5 51.85 47.5 121 47.5M300-630h360v-150H300zm180 210" />
	</svg>
)
export default SvgWineBar
