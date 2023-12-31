import React from 'react'

const TwitterIco = (props) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={25}
			height={25}
			viewBox='0 0 25 25'
			fill="#fff"
			{...props}
		>
			<path
				d="M22.712 6.5a8.384 8.384 0 0 1-2.401.659 4.195 4.195 0 0 0 1.838-2.314c-.82.487-1.719.83-2.655 1.014a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.621-4.369 4.168 4.168 0 0 0-.566 2.102c0 1.451.739 2.732 1.86 3.482a4.169 4.169 0 0 1-1.894-.524v.052a4.185 4.185 0 0 0 3.355 4.102 4.205 4.205 0 0 1-1.89.072 4.185 4.185 0 0 0 3.908 2.904 8.394 8.394 0 0 1-6.192 1.732 11.831 11.831 0 0 0 6.41 1.879c7.694 0 11.9-6.373 11.9-11.9 0-.18-.004-.361-.012-.54A8.497 8.497 0 0 0 22.712 6.5Z"
			/>
		</svg>
	)
}

export default TwitterIco;