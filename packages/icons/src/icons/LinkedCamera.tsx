import type { SVGProps } from "react"
const SvgLinkedCamera = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M833-680q0-81-56.03-139T640-877v-43q100 0 170 70t70 170zm-87 0q0-45-30.5-76T640-787v-46q63.75 0 108.38 45Q793-743 789-680zM140-120q-24 0-42-18t-18-42v-513q0-23 18-41.5t42-18.5h147l73-87h240v60H388l-73 87H140v513h680v-460h60v460q0 24-18.5 42T820-120zm339.5-147q72.5 0 121.5-49t49-121.5-49-121T479.5-607t-121 48.5-48.5 121T358.5-316t121 49m0-60q-47.5 0-78.5-31.5t-31-79 31-78.5 78.5-31 79 31 31.5 78.5-31.5 79-79 31.5" />
	</svg>
)
export default SvgLinkedCamera
