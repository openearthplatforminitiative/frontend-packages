import type { SVGProps } from "react"
const SvgBodyFat = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M840-339h-40v172q0 17.35-7.5 30.18Q785-124 772-116t-28.5 9.5T713-113L88-425q-17.25-8.25-25.12-22.88Q55-462.5 55-478.25t7.88-30.65Q70.75-523.8 88-532l625-312q15.08-8 30.54-6.5T772-841t20.5 20.82Q800-807.35 800-790v170h40v60H700v-60h40v-168L521-680q32 44 50.5 94.94T590-480q0 56-19 107t-52 96l220 109v-171h-39v-61h140zm-376 34q29-38 47.5-82.72Q530-432.45 530-480q0-48-18-91t-47-81L115-479z" />
	</svg>
)
export default SvgBodyFat
