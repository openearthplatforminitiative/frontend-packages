import type { SVGProps } from "react"
const SvgPersonBook = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M480-242q-67 0-129 23.5T235-149v9h490v-9q-54-46-116-69.5T480-242m0-60q74 0 139.5 24.5T740-211v-609H220v609q55-42 120.5-66.5T480-302m2-139q-32.5 0-55.25-22.75T404-519t22.75-55.25T482-597t55.25 22.75T560-519t-22.75 55.25T482-441M220-80q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h520q24 0 42 18t18 42v680q0 24-18 42t-42 18zm262-301q58 0 98-40t40-98-40-98-98-40-98 40-40 98 40 98 98 40m-2-138" />
	</svg>
)
export default SvgPersonBook
