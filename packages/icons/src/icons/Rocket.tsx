import type { SVGProps } from "react"
const SvgRocket = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="m220-168 106-43q-13-38-22.5-77T287-367l-67 45zm166-52h188q22-59 34-117.5T620-440q0-115-33-202T480-807q-74 78-107 165t-33 202q0 44 12 102.5T386-220m94-230q-29 0-49.5-20.5T410-520t20.5-49.5T480-590t49.5 20.5T550-520t-20.5 49.5T480-450m260 282v-154l-67-45q-7 40-16.5 79T634-211zM480-889q102 90 151 199.5T680-440v5l93 63q13 8 20 21t7 28v243l-200-80H360L160-80v-243q0-15 7-28t20-21l93-63v-5q0-140 49-249.5T480-889" />
	</svg>
)
export default SvgRocket
