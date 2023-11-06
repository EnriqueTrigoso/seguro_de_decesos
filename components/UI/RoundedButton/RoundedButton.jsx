import styles from './RoundedButton.module.css'

const RoundedButton = ({title, onClick}) => {
  return (
	<button className={styles.rounded_button} onClick={onClick}>
		{title}
	</button>
  )
}

export default RoundedButton;