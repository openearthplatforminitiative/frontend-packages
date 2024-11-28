import * as React from "react"
import type { SVGProps } from "react"
const SvgJoystick = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="m225-436 255 147 254-148-224-129v146h-60v-146zm225-199v-28q-43-11-71.5-45.99T350-790q0-53.86 38.1-91.93t92-38.07 91.9 38.07T610-790q0 46.02-28.5 81.01T510-663v28l300 173q14.25 8.17 22.13 21.91Q840-426.34 840-410v100q0 16.34-7.87 30.09Q824.25-266.17 810-258L510-85q-14.33 8-30.16 8Q464-77 450-85L150-258q-14.25-8.17-22.12-21.91Q120-293.66 120-310v-100q0-16.34 7.88-30.09Q135.75-453.83 150-462zm0 397L180-393v83l300 173 300-173v-84L510-238q-14.33 8-30.16 8-15.84 0-29.84-8m29.88-482q29.12 0 49.62-20.38t20.5-49.5-20.38-49.62-49.5-20.5-49.62 20.38-20.5 49.5 20.38 49.62 49.5 20.5m.12 583" />
	</svg>
)
export default SvgJoystick