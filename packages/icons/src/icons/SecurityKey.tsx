import type { SVGProps } from "react"
const SvgSecurityKey = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M384-40q-24 0-42-18t-18-42v-145h-24q-24 0-42-18t-18-42v-555q0-24 18-42t42-18h360q24 0 42 18t18 42v555q0 24-18 42t-42 18h-24v145q0 24-18 42t-42 18zm96-429q47.5 0 80.75-33.25T594-583t-33.25-80.75T480-697t-80.75 33.25T366-583t33.25 80.75T480-469m-96 369h192v-145H384zm-84-205h360v-555H300zm179.96-224q-22.96 0-38.46-15.54-15.5-15.53-15.5-38.5 0-22.96 15.54-38.46 15.53-15.5 38.5-15.5 22.96 0 38.46 15.54 15.5 15.53 15.5 38.5 0 22.96-15.54 38.46-15.53 15.5-38.5 15.5M300-305h360z" />
	</svg>
)
export default SvgSecurityKey
