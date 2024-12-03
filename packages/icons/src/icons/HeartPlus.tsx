import type { SVGProps } from "react"
const SvgHeartPlus = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="m440-121-99-91q-87-80-144.5-137T104-452t-49.5-86.5T40-625q0-90 60.5-152.5T250-840q57 0 105.5 26.5T440-736q42-54 89-79t101-25q80.58 0 135.29 55T832-652h-59q-9-55-46.5-91.5T630-780q-51 0-95 31t-71 88h-49q-26-56-70-87.5T250-780q-66 0-108 44.5T100-625q0 39 15.5 76t53.89 84.07q38.39 47.06 104.5 110Q340-292 440-200q32-29 60.5-54t56.5-49l6.63 6.47q6.63 6.48 14.37 14.03t14.37 14.03L599-262q-27 24-56 49t-62 55zm290-159v-130H600v-60h130v-130h60v130h130v60H790v130z" />
	</svg>
)
export default SvgHeartPlus
