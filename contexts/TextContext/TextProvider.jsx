import React from 'react'
import { TextContext } from './TextContext'

const TextProvider = ({ children, content }) => {
	return (
		<TextContext.Provider value={{ ...content }}>
			{children}
		</TextContext.Provider>
	)
}

export default TextProvider