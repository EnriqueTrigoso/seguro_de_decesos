import React from 'react'

const Star = (props) => {
	return (
		<svg
			width={12}
			height={12}
			viewBox="0 0 12 12"
			fill="#FFD166"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M11.448 4.585a.609.609 0 0 0-.525-.419l-3.313-.3L6.3.798a.61.61 0 0 0-1.122 0l-1.31 3.066-3.313.301a.61.61 0 0 0-.347 1.068L2.713 7.43l-.739 3.253a.61.61 0 0 0 .907.659L5.74 9.634l2.857 1.708a.61.61 0 0 0 .908-.659L8.765 7.43l2.505-2.196a.61.61 0 0 0 .178-.649Z"
			/>
		</svg>
	)
}

export default Star