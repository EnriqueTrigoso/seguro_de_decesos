import Image from 'next/image';
import styles from './Card.module.css'

const Card = ({ img, alt, title }) => {

	return (
		<div className={styles.card}>

			{

				<div className={styles.image}>

					<Image src={img} alt={alt} title={title}></Image>
					
				</div>

			}

		</div>
	)
}

export default Card;