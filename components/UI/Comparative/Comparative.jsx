import { Title30 } from 'components/UI/Tags/Titles';
import GreenTitleWithArrow from 'components/UI/GreenTitleWithArrow/GreenTitleWithArrow';
import Card from './Card';
import styles from './Comparative.module.css'

const Comparative = ({ title, greenTitle = '', greenTitleHref, data }) => {

	return (
		<section className={`${styles.comparative}`}>

				<div className={styles.title}>
					<Title30>{title}</Title30>

					{
						greenTitle && (
							<GreenTitleWithArrow href={greenTitleHref}>
								{greenTitle}
							</GreenTitleWithArrow>
						)
					}

				</div>

				<div className={styles.comparative_cards}>

					{
						data.map((data, index) => {
							return (
								<Card
									key={index}
									title={data.title}
									date={data.date}
									insured={data.insured}
								/>
							)
						})
					}
				</div>

		</section>
	)

}

export default Comparative;