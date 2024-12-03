import type { SVGProps } from "react"
const SvgAir = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M465-160q-54 0-85.5-28T348-273h68q0 26 11.5 39.5T465-220q27 0 38.5-12t11.5-41-11.5-42.5T465-329H80v-60h385q54 0 82 28t28 88q0 57-28 85t-82 28M80-568v-60h548q37 0 54-17.5t17-58.5-17-58.5-54-17.5q-38 0-55 20.5T556-708h-60q0-58 35-95t97-37q61 0 96 35.5T759-704t-35 100.5-96 35.5zm672 330v-60q35 0 51.5-19.5T820-374q0-38-18.5-55T748-446H80v-60h668q62 0 97 35t35 97q0 64-33 100t-95 36" />
	</svg>
)
export default SvgAir
