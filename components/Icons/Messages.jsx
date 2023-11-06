import React from 'react'

const Messages = (props) => {
	return (
		<svg
			width={22}
			height={20}
			viewBox='0 0 22 20'
			stroke="#363352"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M6.5 6.114h9m-9 3H11m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.38.35.025.67.21.865.5L11 18.864l2.755-4.133a1.139 1.139 0 0 1 .865-.5 48.167 48.167 0 0 0 3.423-.38c1.584-.233 2.707-1.626 2.707-3.228V4.605c0-1.602-1.123-2.995-2.707-3.228A48.393 48.393 0 0 0 11 .864c-2.392 0-4.744.175-7.043.513C2.373 1.61 1.25 3.004 1.25 4.605v6.019Z"
				strokeWidth={1.5}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}

export default Messages;