import type { SVGProps } from "react"
const SvgMotorcycle = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M447-540H343h213zM200-200q-83 0-141.5-58.5T0-400t58.5-141.5T200-600h474L574-700H423v-60h151q12 0 23.5 5t19.5 13l142 142q90 0 145.5 61T960-400q0 83-58.5 141.5T760-200t-141.5-58.5T560-400q0-18 2.5-35.5T572-470L462-360h-66q-14 70-69 115t-127 45m560-60q58 0 99-41t41-99-41-99-99-41-99 41-41 99 41 99 99 41m-560 0q45 0 84-28t53-82H220v-60h117q-14-54-53-82t-84-28q-58 0-99 41t-41 99 41 99 99 41m198-170h49l109-110H343q20 20 35 48.5t20 61.5" />
	</svg>
)
export default SvgMotorcycle
