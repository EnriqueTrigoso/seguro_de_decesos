import React from 'react'

const Home = (props) => {
	return (
		<svg
			width={22}
			height={21}
			viewBox='0 0 22 21'
			stroke="#363352"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="m1.25 10.864 8.954-8.955a1.126 1.126 0 0 1 1.591 0l8.955 8.955M3.5 8.614V18.74c0 .621.504 1.125 1.125 1.125H8.75V14.99c0-.62.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v4.875h4.125c.621 0 1.125-.504 1.125-1.125V8.614M7.25 19.864h8.25"
				strokeWidth={1.5}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}

export default Home;