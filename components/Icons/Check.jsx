import React from 'react'

const Check = (props) => {
	return (
		<svg
			width={22}
			height={22}
			viewBox="0 0 22 22"
			fill="var(--green-primary)"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M11 0C4.935 0 0 4.934 0 11c0 6.065 4.935 11 11 11s11-4.935 11-11c0-6.066-4.935-11-11-11Zm6.316 9.142-6.91 6.91a1.545 1.545 0 0 1-1.1.456c-.416 0-.806-.162-1.1-.455L4.684 12.53a1.546 1.546 0 0 1-.456-1.1c0-.416.162-.807.456-1.1a1.545 1.545 0 0 1 1.1-.456c.415 0 .806.162 1.1.456l2.422 2.422 5.81-5.811a1.545 1.545 0 0 1 1.1-.456 1.557 1.557 0 0 1 1.1 2.656Z"
			/>
		</svg>
	)
}

export default Check;