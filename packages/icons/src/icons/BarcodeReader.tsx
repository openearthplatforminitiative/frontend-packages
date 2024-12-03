import type { SVGProps } from "react"
const SvgBarcodeReader = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M240-120q-60 0-95.5-46.5T124-270l72-272q-33-21-54.5-57T120-680q0-66 47-113t113-47h352q34.12 0 51.56 28.5T686-753L586-553q-8.37 15-22.44 24T532-520h-93.33L426-470h14q12.75 0 21.38 8.62Q470-452.75 470-440v80q0 12.75-8.62 21.37Q452.75-330 440-330h-52l-32 122q-11 39-43 63.5T240-120m0-60q20 0 36-12t21-32l81-296H253l-71 265q-8 29 10 52t48 23m40-400h252l100-200H280q-42 0-71 29t-29 71 29 71 71 29m485-193-17-36 127-58 16 37zm110 280-127-57 17-37 126 58zM770-660v-40h140v40zM316-520" />
	</svg>
)
export default SvgBarcodeReader
