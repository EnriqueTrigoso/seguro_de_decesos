import styles from './FormInputContainerWithIcon.module.css'

const FormInputContainerWithIcon = ({children}) => {
	return (
		<div className={styles.input_container}>
			{children}
		</div>
	)
}

export default FormInputContainerWithIcon;