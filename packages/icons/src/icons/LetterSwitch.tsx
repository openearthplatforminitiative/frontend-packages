import type { SVGProps } from "react"
const SvgLetterSwitch = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M610-80v-230h60v131q53-64 81.5-141T780-480t-28.5-160.5T670-782v132h-60v-230h230v60H716q60 72 92 159t32 181-32 181-92 159h124v60zM306-282h-70v48h70zm118 0h-70v48h70zm-1-169v30h79v44h-79v35h-43v-35H279v35h-43v-35h-79v-44h79v-30h43v30h101v-30zM174-80q-5-12-12.5-23.5T144-124q42-6 81.5-18.5T288-190H152v-43h40v-92h113v-39h48v39h118v92h35v43H370q29 29 66 46t79 20q-8 10-14.5 21T489-80q-47-5-87.5-27.5T332-168q-25 40-68.5 58.5T174-80m35-464-48-22q29-41 48.5-86t30.5-93h-79v-52h91q4-20 6-41t3-42l53 18q0 18-4 35t-9 34h31q29 0 49 22.5t21 52.5q1 36-4.5 71T380-578q-3 9-9.5 17T356-548t-18 8-20 1l-48-9-8-48h48q9 0 18-2.5t12-10.5q9-26 11.5-53.5T353-718q0-14-10.5-24.5T318-753h-26q-13 55-33.5 107.5T209-544m241-284q21 34 38.5 70t31.5 74l-52 22q-8-39-25-75.5T402-806z" />
	</svg>
)
export default SvgLetterSwitch
