import { Text18 } from 'components/UI/Tags/Texts';
import { Title20 } from 'components/UI/Tags/Titles';
import styles from './Card.module.css'

const Card = ({title, description}) => {
  return (
	<div className={styles.card_container}>
		<Title20>{title}</Title20>
		<Text18>{description}</Text18>
	</div>
  )
}

export default Card;