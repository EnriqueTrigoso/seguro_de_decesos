import React from 'react'

const LeftAngle = (props) => {
	return (
		<svg
			width={13}
			height={21}
			viewBox="0 0 13 21"
			fill="#000"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M10.417 20.917 0 10.5 10.417.083l1.849 1.85L3.698 10.5l8.568 8.568-1.85 1.849Z"
			/>
		</svg>
	)
}

export default LeftAngle;