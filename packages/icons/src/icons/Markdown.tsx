import type { SVGProps } from "react"
const SvgMarkdown = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="m640-360 120-120-42-43-48 48v-125h-60v125l-48-48-42 43zM140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18zm0-60h680v-520H140zm0 0v-520zm79-140h50v-190h53v127h50v-127h60v190h50v-200q0-14-13-27t-27-13H259q-14 0-27 13t-13 27z" />
	</svg>
)
export default SvgMarkdown
