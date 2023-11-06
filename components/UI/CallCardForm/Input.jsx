import styles from './Input.module.css'

const Input = ({children}) => {
  return (
	<div className={styles.input_container}>
		{
			children
		}
	</div>
  )
}

export default Input;