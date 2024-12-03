import type { SVGProps } from "react"
const SvgCompassCalibration = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M480-79q-79 0-135.5-56.5T288-271t56.5-135.5T480-463t135.5 56.5T672-271t-56.5 135.5T480-79m0-60q55 0 93.5-38.5T612-271t-38.5-93.5T480-403t-93.5 38.5T348-271t38.5 93.5T480-139M263-491 80-674q81-74 184.18-120Q367.35-840 480-840t215.82 46Q799-748 880-674L697-491q-45-41-99.5-65T480-580t-117.5 24-99.5 65m3-82q51-32 104.12-49.5t110-17.5T591-624t103 51l97-97q-66-51-146.5-80.5T480-780t-164 29.5T169-670zm214 302" />
	</svg>
)
export default SvgCompassCalibration
