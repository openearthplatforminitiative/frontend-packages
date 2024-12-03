import type { SVGProps } from "react"
const SvgCss = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M414-360q-15 0-24.5-9.5T380-394v-46h48v32h104v-53H414q-14 0-24-10t-10-24v-71q0-15 9.5-24.5T414-600h132q15 0 24.5 9.5T580-566v46h-48v-32H428v53h118q14 0 24 10t10 24v71q0 15-9.5 24.5T546-360zm260 0q-15 0-24.5-9.5T640-394v-46h48v32h104v-53H674q-14 0-24-10t-10-24v-71q0-15 9.5-24.5T674-600h132q15 0 24.5 9.5T840-566v46h-48v-32H688v53h118q14 0 24 10t10 24v71q0 15-9.5 24.5T806-360zm-520 0q-15 0-24.5-9.5T120-394v-172q0-15 9.5-24.5T154-600h132q15 0 24.5 9.5T320-566v46h-48v-32H168v144h104v-32h48v46q0 15-9.5 24.5T286-360z" />
	</svg>
)
export default SvgCss
