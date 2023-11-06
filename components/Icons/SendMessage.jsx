import React from 'react'

const SendMessage = (props) => {
	return (

		<svg
			width={45}
			height={45}
			fill="#00983A"
			stroke="#00983A"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M38.967 6.033a1.406 1.406 0 0 0-1.476-.324L6.553 16.96a1.406 1.406 0 0 0 0 2.63l13.5 5.4 5.4 13.5a1.406 1.406 0 0 0 1.266.886 1.406 1.406 0 0 0 1.293-.928l11.25-30.938a1.406 1.406 0 0 0-.295-1.476ZM26.72 34.03l-3.924-9.843 6.736-6.736-1.982-1.983-6.793 6.792-9.787-3.98L35.62 9.38 26.72 34.03Z"
			/>
			<path
				strokeWidth={2}
				d="m10.293 29.293 4-4M16.293 35.293l4-4M18.707 26.707l-8 8"
			/>
		</svg>
		
	)
}

export default SendMessage;