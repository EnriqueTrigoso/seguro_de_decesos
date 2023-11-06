import React from 'react'

const Estadisticas = (props) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={42}
			height={42}
			viewBox='0 0 42 42'
			fill="none"
			{...props}
		>
			<g clipPath="url(#a)">
				<g fillRule="evenodd" clipPath="url(#b)" clipRule="evenodd">
					<path
						fill="#00983A"
						d="M1.66 26.3h6.684v15.544H1.66V26.3Zm21.334-4h6.681v19.544h-6.681V22.3Zm10.661-9.87h6.681v29.414h-6.68V12.431Zm-14.65 29.414h-6.68V17.811h6.68v24.033Z"
					/>
					<path
						fill="#024430"
						d="M7.827 41.327H2.176v-14.51h5.651v14.51Zm.862-16.233H1.315a.862.862 0 0 0-.862.861v16.234c0 .475.386.861.862.861h7.374a.858.858 0 0 0 .857-.861V25.955a.858.858 0 0 0-.857-.861Zm20.47 16.233H23.51v-18.51h5.647v18.51Zm.86-20.233h-7.374a.862.862 0 0 0-.861.862v20.233c0 .475.386.861.861.861h7.375a.862.862 0 0 0 .86-.861V21.956a.862.862 0 0 0-.86-.862Zm9.8 20.233h-5.647v-28.38h5.647v28.38Zm.862-30.102h-7.37a.862.862 0 0 0-.862.86V42.19c0 .475.386.861.862.861h7.37a.862.862 0 0 0 .861-.861V12.086a.862.862 0 0 0-.861-.861ZM18.489 41.327H12.84V18.328h5.648v23Zm.861-24.722h-7.37a.862.862 0 0 0-.862.861V42.19c0 .475.386.861.862.861h7.37a.86.86 0 0 0 .861-.861V17.466a.86.86 0 0 0-.861-.861ZM5 14.534a2.523 2.523 0 0 1 2.523 2.52 2.522 2.522 0 0 1-5.042 0c0-1.39 1.13-2.52 2.519-2.52Zm10.669-9.618c1.386 0 2.52 1.13 2.52 2.52 0 1.39-1.135 2.52-2.52 2.52a2.523 2.523 0 0 1-2.523-2.52c0-1.39 1.13-2.52 2.523-2.52ZM26.33 10.29a2.523 2.523 0 0 1 2.523 2.52 2.522 2.522 0 0 1-5.042 0c0-1.39 1.13-2.52 2.52-2.52ZM37 .673c1.39 0 2.519 1.13 2.519 2.52a2.522 2.522 0 0 1-5.042 0c0-1.39 1.13-2.52 2.523-2.52ZM5 21.297a4.249 4.249 0 0 1-4.242-4.243A4.249 4.249 0 0 1 5 12.81c.938 0 1.804.306 2.51.823l4.498-4.057a4.214 4.214 0 0 1-.585-2.14 4.25 4.25 0 0 1 4.246-4.244 4.249 4.249 0 0 1 4.242 4.243c0 .38-.053.75-.146 1.1l3.246 1.637a4.243 4.243 0 0 1 5.83-.783l4.494-4.055a4.253 4.253 0 0 1-.581-2.142A4.25 4.25 0 0 1 37-1.05a4.25 4.25 0 0 1 4.242 4.243A4.249 4.249 0 0 1 37 7.436a4.23 4.23 0 0 1-2.511-.822L29.99 10.67c.37.629.585 1.36.585 2.14a4.25 4.25 0 0 1-4.246 4.244 4.249 4.249 0 0 1-4.241-4.243c0-.38.052-.75.146-1.1l-3.247-1.637a4.241 4.241 0 0 1-5.83.783l-4.494 4.056c.366.629.581 1.36.581 2.14A4.25 4.25 0 0 1 5 21.298Z"
					/>
				</g>
			</g>
			<defs>
				<clipPath id="a">
					<path fill="#fff" d="M0 0h42v42H0z" />
				</clipPath>
				<clipPath id="b">
					<path fill="#fff" d="M0-1.05h42v44.1H0z" />
				</clipPath>
			</defs>
		</svg>
	)
}

export default Estadisticas;