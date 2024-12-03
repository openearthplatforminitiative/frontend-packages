import type { SVGProps } from "react"
const SvgDeveloperMode = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M344-296 160-480l184-184 42 44-140 140 140 140zm-144 30h60v76h440v-76h60v166q0 24-18 42t-42 18H260q-24 0-42-18t-18-42zm60-440h-60v-154q0-24 18-42t42-18h440q24 0 42 18t18 42v154h-60v-64H260zm0 576v30h440v-30zm0-700h440v-30H260zm356 534-42-44 140-140-140-140 42-44 184 184zM260-830v-30zm0 700v30z" />
	</svg>
)
export default SvgDeveloperMode
