import type { SVGProps } from "react"
const SvgCloudUpload = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M250-160q-86 0-148-62T40-370q0-78 49.5-137.5T217-579q20-97 94-158.5T482-799q113 0 189.5 81.5T748-522v24q72-2 122 46.5T920-329q0 69-50 119t-119 50H510q-24 0-42-18t-18-42v-258l-83 83-43-43 156-156 156 156-43 43-83-83v258h241q45 0 77-32t32-77-32-77-77-32h-63v-84q0-89-60.5-153T478-739t-150 64-61 153h-19q-62 0-105 43.5T100-371q0 62 43.93 106.5T250-220h140v60zm230-290" />
	</svg>
)
export default SvgCloudUpload
