import type { SVGProps } from "react"
const SvgPersonCheck = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M702-494 575-622l42-42 85 85 170-170 42 43zm-342 13q-66 0-108-42t-42-108 42-108 108-42 108 42 42 108-42 108-108 42M40-160v-94q0-35 17.5-63.5T108-360q75-33 133.34-46.5t118.5-13.5T478-406.5 611-360q33 15 51 43t18 63v94zm60-60h520v-34q0-16-9-30.5T587-306q-71-33-120-43.5T360-360t-107.5 10.5T132-306q-15 7-23.5 21.5T100-254zm260-321q39 0 64.5-25.5T450-631t-25.5-64.5T360-721t-64.5 25.5T270-631t25.5 64.5T360-541m0-90" />
	</svg>
)
export default SvgPersonCheck
