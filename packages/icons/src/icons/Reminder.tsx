import type { SVGProps } from "react"
const SvgReminder = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M260-620h60v-60q0-25.5-17.25-42.75T260-740t-42.75 17.25T200-680t17.25 42.75T260-620m180 0q25.5 0 42.75-17.25T500-680t-17.25-42.75T440-740t-42.75 17.25T380-680v60zm5 540q-29 0-56-12t-45-35L127-403l21-23q14-15 34.5-18.5T221-438l99 53v-175h-60q-50 0-85-35t-35-85 35-85 85-35q16 0 31 4t29 12v-66q0-12.75 8.68-21.38 8.67-8.62 21.5-8.62 12.82 0 21.32 8.62 8.5 8.63 8.5 21.38v66q14.24-8 28.98-12 14.75-4 31.02-4 50 0 85 35t35 85-35 85-85 35h-60v275l-144-77 156 198q10 12 23.76 18t29.24 6h205q38 0 64-26t26-64v-170q0-25.5-17.25-42.75T680-460H460v-60h219.65q50.14 0 85.25 35 35.1 35 35.1 85v170q0 63-43.5 106.5T650-80z" />
	</svg>
)
export default SvgReminder
