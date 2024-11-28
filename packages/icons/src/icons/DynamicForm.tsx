import * as React from "react"
import type { SVGProps } from "react"
const SvgDynamicForm = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M140-510q-24.75 0-42.37-17.63Q80-545.25 80-570v-170q0-24.75 17.63-42.38Q115.25-800 140-800h400v290zm0-60h340v-170H140zm0 410q-24.75 0-42.37-17.63Q80-195.25 80-220v-170q0-24.75 17.63-42.38Q115.25-450 140-450h480v290zm0-60h420v-170H140zm540 60v-350h-80v-290h280l-80 220h80zM195-275h60v-60h-60zm0-350h60v-60h-60zm-55 55v-170zm0 350v-170z" />
	</svg>
)
export default SvgDynamicForm