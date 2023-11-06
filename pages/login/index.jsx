import Hero from 'components/Pages/login-register/Hero/Hero'
import TextProvider from 'contexts/TextContext/TextProvider';
import useVerifySession from 'hooks/useVerifySession'
import Head from 'next/head'
import { useRouter } from 'next/router'

export async function getStaticProps({ locale }) {

	const sections = [
		"metadata_login",
		"hero",
		"footer",
		"logincardtext",
		"navbarloggintext",
		// "sendemailverifymodaltext"
	];

	const promises = sections.map(async (section) => {

		try {

			const response = await import(
				`../../data/Pages/login/${locale}/${section}.json`
			);

			return response.default;

		} catch (err) {
			// console.log(err);
			return null;
		}

	});

	const [
		metadata_login,
		hero,
		footer,
		logincardtext,
		navbarloggintext,
		// sendemailverifymodaltext,
	] = await Promise.all(promises);

	return {
		props: {
			metadata_login,
			hero,
			footer,
			logincardtext,
			navbarloggintext,
			// sendemailverifymodaltext,
		},
	};
}

const LoginPage = (props) => {

	// console.log(props)

	const router = useRouter()
	const { isVerifySession, userDataFound } = useVerifySession()

	if (!isVerifySession) {
		return null
	}

	if (userDataFound) {
		router.push('/user-panel')
		return null
	}

	return (

		<>
		
			<Head>
				<title>{props.metadata_login.title}</title>
				<meta name="description" content={props.metadata_login.description} />
				<link rel="icon" href="/favicon.ico" />
				<meta name="robots" content="noindex, nofollow"></meta>
			</Head>

			<main style={{ overflow: 'hidden' }}>
				<TextProvider content={props}>
					<Hero page={'login'} />
				</TextProvider>
			</main>

		</>
	)
}

export default LoginPage;