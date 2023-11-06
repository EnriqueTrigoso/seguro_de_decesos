import styles from './StepTitle.module.css'

const StepTitle = ({title, subtitle}) => {
	return (
		<div className={styles.step_title}>
			<h3 className={styles.title}>{title}</h3>
			<p className={styles.subtitle}>{subtitle}</p>
		</div>
	)
}

export default StepTitle;