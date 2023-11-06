import Button from 'components/UI/Button/Button';
import { Text20 } from 'components/UI/Tags/Texts';
import { Title45 } from 'components/UI/Tags/Titles';
import { useMediaQuery } from 'react-responsive';
import Card from './Card/Card';
import styles from './Details2.module.css'
import TestimonialForm from 'components/UI/TestimonialForm/TestimonialForm';
import Link from 'next/link';
import Componente1 from 'components/UI/Componente1/Componente1';
import useText from 'contexts/TextContext/useText';

const Details2 = () => {

	const isDesktop = useMediaQuery({ minWidth: 1024 })

	const { considerations } = useText()

	return (
		<section className={`${styles.details} container`}>

			<div className={styles.content}>

				<Title45>{considerations.title}</Title45>

				<Text20>
					{considerations.description}
				</Text20>

				<div className={styles.buttons}>

					<Componente1>
						<Link href={"/comparator"} title="Comparador">
							<div className={styles.button_container}>
								<Button>{considerations.buttons[0].text}</Button>
							</div>
						</Link>
					</Componente1>

				</div>
			</div>

			{
				isDesktop && <TestimonialForm />
			}

			<div className={styles.cards}>

				{
					considerations.cards?.map((card, index) => {
						return <Card
							key={index}
							title={card.title}
							description={card.description} />

					})
				}

			</div>

		</section>
	)
}

export default Details2;