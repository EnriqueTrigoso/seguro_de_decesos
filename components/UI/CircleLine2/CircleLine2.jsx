import styles from './CircleLine.module.css'

const CircleLine = ({ number, active= false }) => {

	return (
		<div className={`${styles.circle} ${active && styles.circle_active}`} >
			{number}
		</div>
	)

}

export default CircleLine;