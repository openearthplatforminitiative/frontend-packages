import type { SVGProps } from "react"
const SvgVacuum = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M154-80q-47.5 0-80.75-33.25T40-194t33.25-80.75T154-308t80.75 33.25T268-194t-33.25 80.75T154-80m0-60q24 0 39-15t15-39-15-39-39-15-39 15-15 39 15 39 39 15m134 60q11-13 19.5-29.5T320-140h114v-300q0-37.54-26.73-64.27T343-531H142v163q-14 0-30.5 4T82-353v-238h125v-153q0-72 52-124t124-52q56 0 100 29t65 80l278 671h94v60H654v-60h110L489-786q-15-35-41.5-54.5T383-860q-48 0-82 34t-34 82v153h76.16Q406-591 450-547t44 107v360zm0-256" />
	</svg>
)
export default SvgVacuum
