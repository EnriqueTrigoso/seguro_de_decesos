import React from 'react'

const Menu = ({ props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={25}
			fill="#232263"
			viewBox='0 0 24 25'
			{...props}
		>
			<path
				d="M3 4.597h18v2H3v-2Zm0 7h18v2H3v-2Zm0 7h18v2H3v-2Z"
			/>
		</svg>
	)
}

export default Menu