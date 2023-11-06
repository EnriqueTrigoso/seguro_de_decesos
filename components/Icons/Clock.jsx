import React from 'react'

const Clock = (props) => {
	return (
		<svg
			width={11}
			height={11}
			viewBox="0 0 11 11"
			fill="none"
			stroke="#6A838C"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M5.125 3.094v2l1.5 1.5m3-1.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}

export default Clock;