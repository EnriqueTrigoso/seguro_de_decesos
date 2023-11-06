import React from 'react'

const Messenger = (props) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={10}
			height={10}
			viewBox='0 0 70 70'
			{...props}
		>
			<g clipPath="url(#a)">
				<path
					fill="#2196F3"
					d="M35.216.489C16.616.122 1.224 14.872.799 33.47a32.36 32.36 0 0 0 11.472 24.55v9.867a1.434 1.434 0 0 0 2.194 1.216l7.993-4.993a35.511 35.511 0 0 0 12.758 2.343c18.6.367 33.992-14.383 34.416-32.983C69.208 14.872 53.816.121 35.216.49Z"
				/>
				<path
					fill="#FAFAFA"
					d="M57.873 24.007a1.434 1.434 0 0 0-1.835-.402l-14.914 8.131-9.278-7.956a1.434 1.434 0 0 0-1.947.075L12.69 41.063a1.434 1.434 0 0 0 1.701 2.271l14.914-8.13 9.287 7.958a1.434 1.434 0 0 0 1.947-.074l17.208-17.209a1.434 1.434 0 0 0 .127-1.872Z"
				/>
			</g>
			<defs>
				<clipPath id="a">
					<path fill="#fff" d="M.795.482h68.84v68.84H.795z" />
				</clipPath>
			</defs>
		</svg>
	)
}

export default Messenger