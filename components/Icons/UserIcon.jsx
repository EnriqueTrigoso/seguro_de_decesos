import React from 'react'

const UserIcon = (props) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={16}
			height={21}
			viewBox='0 0 16 21'
			fill="#232263"
			{...props}
		>
			<path
				d="M0 21a8 8 0 1 1 16 0H0Zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6Z"
			/>
		</svg>
	)
}

export default UserIcon