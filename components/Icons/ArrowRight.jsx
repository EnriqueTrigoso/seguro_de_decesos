import React from 'react'

const ArrowRight = (props) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={16}
			height={16}
			fill= "#fff"
			{...props}
		>
			<path
				d="M10.781 7.333 7.205 3.757l.943-.943L13.333 8l-5.185 5.185-.943-.943 3.576-3.575H2.667V7.333h8.114Z"
			/>
		</svg>
	)
}

export default ArrowRight