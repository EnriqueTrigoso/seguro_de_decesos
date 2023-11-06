import React from 'react'

const UserCircle = (props) => {
	return (
		<svg
			width={20}
			height={20}
			viewBox='0 0 20 20'
			stroke="#363352"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M15.982 16.59A7.488 7.488 0 0 0 10 13.613a7.488 7.488 0 0 0-5.982 2.975m11.964 0a8.998 8.998 0 0 0 2.43-9.924 9 9 0 1 0-14.394 9.924m11.964 0A8.969 8.969 0 0 1 10 18.864a8.966 8.966 0 0 1-5.982-2.275M13 7.614a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
				strokeWidth={1.5}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}

export default UserCircle;