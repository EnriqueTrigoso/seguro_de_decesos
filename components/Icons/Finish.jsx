import React from 'react'

const Finish = (props) => {
	return (
		<svg
			width={159}
			height={144}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<rect
				opacity={0.5}
				x={14.865}
				width={51.543}
				height={51.543}
				rx={10}
				fill="#00983A"
			/>
			<rect
				opacity={0.5}
				x={128.816}
				y={32.87}
				width={29.359}
				height={29.359}
				rx={10}
				fill="#00983A"
			/>
			<rect
				opacity={0.5}
				x={0.816}
				y={74.87}
				width={31.533}
				height={31.533}
				rx={8}
				fill="#00983A"
			/>
			<rect
				opacity={0.5}
				x={115.104}
				y={106.821}
				width={36.593}
				height={36.593}
				rx={8}
				fill="#00983A"
			/>
			<circle cx={84.293} cy={78.376} r={60} fill="#00983A" />
			<g filter="url(#a)">
				<path
					d="m61.576 81.62 12.98 12.98 32.452-32.45"
					stroke="#fff"
					strokeWidth={8}
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>
			<defs>
				<filter
					id="a"
					x={27.576}
					y={32.149}
					width={113.432}
					height={100.451}
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity={0} result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dy={4} />
					<feGaussianBlur stdDeviation={15} />
					<feColorMatrix values="0 0 0 0 0.290196 0 0 0 0 0.227451 0 0 0 0 1 0 0 0 0.3 0" />
					<feBlend
						in2="BackgroundImageFix"
						result="effect1_dropShadow_1208_2519"
					/>
					<feBlend
						in="SourceGraphic"
						in2="effect1_dropShadow_1208_2519"
						result="shape"
					/>
				</filter>
			</defs>
		</svg>
	)
}

export default Finish;