import type { SVGProps } from "react"
const SvgSkull = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M240-80v-170q-36-16-65.5-43T124-355.5 91.5-433 80-520q0-158 112-259t288-101 288 101 112 259q0 45-11.5 87T836-355.5 785.5-293 720-250v170zm60-60h70v-100h60v100h100v-100h60v100h70v-147q37-11 66.5-33t50.5-52.5 32-68.02 11-79.33q0-133.99-94-217.07T480.04-820q-151.95 0-246 83.09Q140-653.82 140-519.81q0 41.81 11 79.31t32 68 50.5 52.5 66.5 33zm120-220h120l-60-120zm-79.91-100q28.91 0 49.41-20.59t20.5-49.5-20.59-49.41-49.5-20.5-49.41 20.59-20.5 49.5 20.59 49.41 49.5 20.5m280 0q28.91 0 49.41-20.59t20.5-49.5-20.59-49.41-49.5-20.5-49.41 20.59-20.5 49.5 20.59 49.41 49.5 20.5M480-140" />
	</svg>
)
export default SvgSkull
