import styles from './Card.module.css'
const Card = ({icon, title, description}) => {
  return (
	<div>

		<div className={styles.icon_container}>
			{icon}
		</div>

		<span className={styles.title}>{title}</span>
		<span className={styles.description}>{description}</span>

	</div>
  )
}

export default Card