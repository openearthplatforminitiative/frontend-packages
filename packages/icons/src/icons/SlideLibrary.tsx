import type { SVGProps } from "react"
const SvgSlideLibrary = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M150-160q-28.87 0-49.44-20.56Q80-201.13 80-230v-450h60v460h580v60zm160-160q-28.87 0-49.44-20.56Q240-361.13 240-390v-340q0-28.88 20.56-49.44Q281.13-800 310-800h348l-60 60H300v360h520v-298l60-60v348q0 28.87-20.56 49.44Q838.88-320 810-320zm230-169q-21 0-39-9t-31-26q14 0 24.5-10.5T505-559q0-21.67 15.44-36.83Q535.88-611 557.94-611T595-595.76t15 37.02q0 28.74-20.56 49.24T540-489m119-114-57-57 175-173q4.64-5 10.82-5t11.07 4.89l34.22 34.22Q838-794 838-787.82T833-777z" />
	</svg>
)
export default SvgSlideLibrary
