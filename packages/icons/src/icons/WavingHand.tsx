import * as React from "react"
import type { SVGProps } from "react"
const SvgWavingHand = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="m434-498 276-275q9-9 21-9t21 9 9 21-9 21L476-455zm104 104 247-247q9.07-9 21.53-9 12.47 0 21.47 8.84t9 21-9 21.16L580-351zM195-199q-91-91-91.5-218T194-635l122-122 42 42q12 12 19.5 28t8.5 30l163-164q9.07-9 21.53-9 12.47 0 21.47 9.05 9 9.06 9 21.5 0 12.45-9 21.45L389-575l-65 65 26 26q42 42 40.5 100.5T347-283l-7 7-42-43 7-7q25-25 25.5-58.5T307-442l-47-47q-9-9.07-9-21.53 0-12.47 9-21.47l56-55q17-17 17-42.5T316-672l-80 80q-73 73-72.5 175T237-242q74 74 177 75.5T590-238l241-241q9.07-9 21.53-9 12.47 0 21.47 8.84t9 21-9 21.16L633-196q-91 91-219 89.5T195-199M689-40l1-60q71 0 120.5-49.5T860-270l60-1q0 95.85-67.57 163.43Q784.85-40 689-40M40-689q0-95.85 67.57-163.43Q175.15-920 271-920l-1 60q-71 0-120.5 49.5T100-690z" />
	</svg>
)
export default SvgWavingHand
