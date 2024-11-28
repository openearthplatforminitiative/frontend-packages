import * as React from "react"
import type { SVGProps } from "react"
const SvgFamilyLink = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M400-47q-48 0-87-28.5T256-152q-10-27-28.39-42.5Q209.23-210 186-210q-17 0-33.5 7.5T121-181l-41-43q22-22 49.26-34 27.25-12 56.74-12 42 0 76.5 27t52.5 74q11 29 34.05 45.5T400-107q19 0 35.5-7t27.5-19L172-545q-6.4-8.21-9.2-17.16t-2.8-17.9q0-11.94 4.5-22.9Q169-613.93 178-623l280-280q8.05-8.13 19.02-12.57Q488-920 500-920t22.98 4.43Q533.95-911.13 542-903l280 280q9 9.05 13.5 19.99T840-580q0 10-3 18.5t-8 16.5L516-103q-19 26-49.5 41T400-47m100-136 280-397-280-280-280 280zm0-339" />
	</svg>
)
export default SvgFamilyLink
