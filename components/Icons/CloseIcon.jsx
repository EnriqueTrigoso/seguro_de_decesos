import React from 'react'

const CloseIcon = ({ props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={25}
			viewBox='0 0 24 25'
			fill="#232263"
			{...props}
		>
			<path
				d="m12 11.184 4.95-4.95 1.415 1.414-4.95 4.95 4.95 4.95-1.415 1.414-4.95-4.95-4.95 4.95-1.413-1.414 4.95-4.95-4.95-4.95L7.05 6.234l4.95 4.95Z"
			/>
		</svg>
	)
}

export default CloseIcon