import React from 'react'

const BannerMobileIco = (props) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={56}
			height={56}
			viewBox='0 0 56 56'
			fill="#19A24D"
			{...props}
		>
			<g clipPath="url(#a)">
				<path
					d="M35.105 0c-.063-.002-14.147-.002-14.21 0C14.511.056 9.333 5.269 9.333 11.664v32.667c0 6.433 5.234 11.667 11.667 11.667h14c6.433 0 11.667-5.234 11.667-11.667V11.667C46.667 5.269 41.489.058 35.105 0ZM42 44.331c0 3.86-3.14 7-7 7H21c-3.86 0-7-3.14-7-7V11.667c0-3.39 2.422-6.223 5.626-6.865l1.619 3.241a2.333 2.333 0 0 0 2.088 1.29h9.334c.884 0 1.691-.499 2.088-1.29l1.62-3.241C39.577 5.442 42 8.276 42 11.667V44.33Zm-11.667 2.333h-4.666a2.334 2.334 0 0 1 0-4.666h4.666a2.334 2.334 0 0 1 0 4.666Z"
				/>
			</g>
			<defs>
				<clipPath id="a">
					<path fill="#fff" d="M0 0h56v56H0z" />
				</clipPath>
			</defs>
		</svg>
	)
}

export default BannerMobileIco