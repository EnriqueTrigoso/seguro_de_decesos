import React from 'react'

const Star2 = (props) => {
	return (
		<svg
			width={54}
			height={50}
			viewBox= '0 0 54 50'
			fill="#FCB72D"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="m26.867 0-8.302 16.486L0 19.132l13.431 12.832-3.17 18.122 16.606-8.556 16.603 8.556-3.17-18.121 13.433-12.833-18.564-2.646L26.867 0Z"
			/>
		</svg>
	)
}

export default Star2;