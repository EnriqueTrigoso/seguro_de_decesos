import styles from './InputCardWrapper.module.css'

const InputCardWrapper = ({title, children}) => {
	return (
		<div className={styles.input_wrapper}>
			<h3 className={styles.title}>{title}</h3>
			{children}
		</div>
	)
}

export default InputCardWrapper;