import React from 'react'

const FacebookSocialIcon = (props) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={10}
			height={10}
			viewBox='0 0 70 70'
			fill="none"
			{...props}
		>
			<g clipPath="url(#a)">
				<path
					fill="#1877F2"
					d="M69.784 34.462c0-19.01-15.41-34.42-34.42-34.42S.944 15.452.944 34.462c0 17.18 12.587 31.42 29.042 34.002V44.412h-8.74v-9.95h8.74V26.88c0-8.627 5.139-13.392 13.001-13.392 3.765 0 7.705.673 7.705.673v8.47h-4.34c-4.276 0-5.61 2.654-5.61 5.378v6.454h9.547l-1.526 9.95h-8.02v24.052c16.454-2.582 29.041-16.822 29.041-34.002Z"
				/>
				<path
					fill="#fff"
					d="m48.763 44.412 1.526-9.95h-9.547v-6.454c0-2.722 1.334-5.378 5.61-5.378h4.34v-8.47s-3.939-.673-7.705-.673c-7.862 0-13 4.765-13 13.392v7.583h-8.74v9.95h8.74v24.052c3.563.558 7.192.558 10.755 0V44.412h8.02Z"
				/>
			</g>
			<defs>
				<clipPath id="a">
					<path fill="#fff" d="M.944.042h68.84v68.84H.944z" />
				</clipPath>
			</defs>
		</svg>
	)
}

export default FacebookSocialIcon