import React from 'react'

const Chat = (props) => {
	return (
		<svg
			width={53}
			height={53}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M32.655 9.058c-1.58-.599-3.259-.984-5.004-1.12C16.783 7.09 7.713 15.7 7.797 26.406c.078 10.031 8.7 18.23 18.731 18.23"
				stroke="#FFBE12"
				strokeWidth={4}
				strokeMiterlimit={10}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M26.528 44.636h13.89c1.273 0 1.831-1.609.83-2.396l-1.39-1.094a1.59 1.59 0 0 1-.23-2.37 18.323 18.323 0 0 0 4.864-14.008c-.567-7.178-5.345-13.247-11.84-15.707"
				stroke="#fff"
				strokeWidth={4}
				strokeMiterlimit={10}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<circle cx={18.795} cy={27.561} r={2.605} fill="#81C1EA" />
			<circle cx={26.899} cy={27.561} r={2.605} fill="#81C1EA" />
			<circle cx={35.002} cy={27.561} fill="#81C1EA" r={2.605} />
		</svg>
	)
}

export default Chat;





