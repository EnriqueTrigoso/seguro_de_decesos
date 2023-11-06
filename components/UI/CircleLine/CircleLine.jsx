import styles from './CircleLine.module.css'

const CircleLine = ({ number, line }) => {

	const displayLine = line ? styles.line : ''

	return (
		<span className={`${styles.circle_line} ${displayLine}`}>
			{number}
		</span>
	)
}

export default CircleLine;