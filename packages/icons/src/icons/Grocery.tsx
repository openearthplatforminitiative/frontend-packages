import type { SVGProps } from "react"
const SvgGrocery = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M646-80q-100 0-167-67t-67-167 67-167 167-67 167 67 67 167-67 167-167 67m0-60q72 0 123-51t51-123-51-123-123-51-123 51-51 123 51 123 123 51m-506-20q-24 0-42-18t-18-42v-330q0-13 1.5-21t6.5-19l92-200h-22q-15 0-24.5-9.5T124-824v-22q0-15 9.5-24.5T158-880h261q15 0 24.5 9.5T453-846v22q0 15-9.5 24.5T419-790h-22l96 222q-12 6-25 15t-24 18L329-790h-82L140-559v339h224q3 15 10 31t15 29zm506-438q-36 0-60-24t-24-60 24-60 60-24zq0-36 24-60t60-24 60 24 24 60z" />
	</svg>
)
export default SvgGrocery
