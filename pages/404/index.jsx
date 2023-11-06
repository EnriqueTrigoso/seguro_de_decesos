import Button from "components/UI/Button/Button";
import { Text20 } from "components/UI/Tags/Texts";
import { Title55 } from "components/UI/Tags/Titles";
import Head from "next/head";
import Image from "next/image";
import error404 from 'assets/imgs/404.webp'
import styles from './error.module.css'
import Card from "components/Pages/404/Card";
import Auriculares from "components/Icons/Auriculares";
import Telefono from "components/Icons/Telefono";
// import Estadisticas from "components/Icons/Estadisticas";
// import Global from "components/Icons/Global";
import Link from "next/link";

export async function getStaticProps({ locale }) {

	const sections = [
		"404",
	];

	const promises = sections.map(async (section) => {

		try {
			const response = await import(
				`../../data/Pages/404/${locale}/${section}.json`
			);
			return response.default[section];
		} catch (err) {
			// console.log(err);
			return null;
		}
	});

	const [
		_404,
	] = await Promise.all(promises);

	return {
		props: {
			_404,
		},
	};
}

const Error404 = ({ _404 }) => {

	return (
		<>
			<Head>
				<title>{_404.metadata.title}</title>
				<meta property="og:title" content={_404.metadata.title} />
				<meta property="og:description" content={_404.metadata.description} />
				<meta property="og:type" content="website" />
				<meta name="robots" content="noindex, follow" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main style={{ overflow: 'hidden' }}>

				<section className={`${styles.head} container`}>
					<Image src={error404} alt="" />
					<Title55>{_404.content.title}</Title55>
					<Text20>{_404.content.description}</Text20>
					<Link href={'/'}>
						<Button>{_404.content.button_text}</Button>
					</Link>
				</section>

				<section className={`${styles.footer}`}>

					<div className={styles.cards}>
						<Card
							icon={<Auriculares />}
							title={_404.content.cards[0].title}
							subtitle={_404.content.cards[0].subtitle}
							description={_404.content.cards[0].description}
						/>
						<Card
							icon={<Telefono />}
							title={_404.content.cards[1].title}
							subtitle={_404.content.cards[1].subtitle}
							description={_404.content.cards[1].description}
						/>
					</div>

				</section>

			</main>
		</>
	)
}

export default Error404;