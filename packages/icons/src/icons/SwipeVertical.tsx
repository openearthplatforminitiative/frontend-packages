import * as React from "react"
import type { SVGProps } from "react"
const SvgSwipeVertical = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M80-80v-40h93q-62-78-97.5-169T40-480t35.5-191T173-840H80v-40h180v180h-40v-133q-65 75-102.5 164.5T80-480t37.5 188.5T220-127v-133h40v180zm566-46q-20 8-42 7t-42-11L295-254l7-26q5-19 19-31t34-14l99-8-117-320q-5-12 .5-22.5T355-691t23 .5 16 17.5l144 394-128 12 178 83q9 4 19 4t19-3l159-58q39-14 56.5-51.5T845-369l-62-169q-5-12 .5-23t17.5-16 23 .5 16 17.5l61 169q23 63-4.5 122.5T806-185zm-83-279-58-160q-5-12 .5-22.5T523-603t22.5.5T561-585l58 160zm118-43-44-122q-5-12 .5-23t17.5-16 22.5.5T693-591l45 123zm6 104" />
	</svg>
)
export default SvgSwipeVertical
