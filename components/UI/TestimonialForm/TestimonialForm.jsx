import styles from './TestimonialForm.module.css'

const TestimonialForm = ({ children, style }) => {

	return (
		<div className={styles.testimonial_form} style={style}>
			{children}
		</div>
	)
}

export default TestimonialForm;