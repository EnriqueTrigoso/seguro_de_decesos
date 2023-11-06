import React from 'react'

const Add = (props) => {
	return (
		<svg
			width={20}
			height={20}
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			{...props}
		>
			<path fill="url(#adda)" d="M0 0h20v20H0z"/>
			<defs>
				<pattern
					id="adda"
					patternContentUnits="objectBoundingBox"
					width={1}
					height={1}
				>
					<use xlinkHref="#addb" transform="scale(.03333)" />
				</pattern>
				<image
					id="addb"
					width={30}
					height={30}
					xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACBSURBVHgB7ZahFYRADEQnu9vPXQlQBJIiEFSBgB6QFAEl0NASXgRosgbBfDXuv4xIIihgmJcqiqyWs2rdt80GJwEvQTHFFFNM8WPEFj6cxJB+0DxZVmh3KHY4SdeVcaH5jgIZo8DNa1Unu6dwEgR/m9RyadUFJfERoJhiiin+ivgEqr4m6JptP7oAAAAASUVORK5CYII="
				/>
			</defs>
		</svg>
	)
}

export default Add;