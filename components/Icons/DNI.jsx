import React from 'react'

const DNI = (props) => {

	return (
		<svg
			width={21}
			height={18}
			fill="none"
			stroke="#8EA4AC"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M8.957 4h-5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-5m-4 0V3a2 2 0 1 1 4 0v1m-4 0a2 2 0 1 0 4 0m-5 8c1.306 0 2.417.835 2.83 2m-2.83-2a3.001 3.001 0 0 0-2.83 2m2.83-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6-3h3m-3 4h2"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>

	)
}

export default DNI;