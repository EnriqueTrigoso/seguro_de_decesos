
import { useContext } from 'react'
import { TextContext } from './TextContext'

const useText = () => {

	const context = useContext(TextContext)

	if (!context) {
		throw new Error('useTextError');
	}

	return context
}

export default useText;