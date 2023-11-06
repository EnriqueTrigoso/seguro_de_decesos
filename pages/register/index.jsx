import Hero from 'components/Pages/login-register/Hero/Hero'
import TextProvider from 'contexts/TextContext/TextProvider';
import useVerifySession from 'hooks/useVerifySession'
import Head from 'next/head'
import { useRouter } from 'next/router'

export async function getStaticProps({ locale }) {

	const sections = [
		"metadata_register",
		"hero",
		"footer",
		"logincardtext",
		"navbarloggintext",
		// "sendemailverifymodaltext"
	];

	const general_sections = [
		// ["stickybuttons", "btn_help_language"],
		// ["cookies", "banner_language"],
		// ["navbar", "navbar_out_session_text"],
		// ["usermenu", "user_menu_language"],
		// ["stickybuttons", "call_card_form_language"],
		["modalstyle2", "modal_style2_text"],
		// ["stickybuttons", "help_card_language"],
	]

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

	const promises2 = general_sections.map(async ([section, file]) => {

		try {
			const response = await import(
				`../../data/General/${section}/${locale}/${file}.json`
			);
			return response.default;
		} catch (err) {
			// console.log(err);
			return null;
		}
	});

	const [
		metadata_register,
		hero,
		footer,
		logincardtext,
		navbarloggintext,
		modal_style2_text
	] = await Promise.all([...promises, ...promises2]);

	return {
		props: {
			metadata_register,
			hero,
			footer,
			logincardtext,
			navbarloggintext,
			modal_style2_text
		},
	};
}

const Register = (props) => {

	const router = useRouter()
	const { isVerifySession, userDataFound } = useVerifySession()

	if (!isVerifySession) {
		return null
	}

	if (userDataFound) {
		router.push('/')
		return null
	}

	return (
		<>

			<Head>
				<title>{props.metadata_register.title}</title>
				<meta name="description" content={props.metadata_register.description} />
				<link rel="icon" href="/favicon.ico" />
				{/* <script src="https://www.google.com/recaptcha/api.js" async defer></script> */}
			</Head>

			<main style={{ overflow: 'hidden' }}>
				<TextProvider content={props}>
					<Hero page={'register'} />
				</TextProvider>
				{/* <Script src={`https://www.google.com/recaptcha/api.js?render=${process.env.reCAPTCHA_site_key}`}></Script> */}
				{/* <Script src={`https://www.google.com/recaptcha/api.js?render=reCAPTCHA_site_key`}></Script> */}
			</main>

		</>
	)
}

export default Register;