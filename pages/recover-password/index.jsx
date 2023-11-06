import Notification from 'components/UI/Notification/Notification'
import Head from 'next/head'
import forget_password from 'assets/imgs/forget_password.webp'
import InputForm from 'components/UI/LoginRegisterCard/InputForm/InputForm'
import styles from '../recovery/recovery_password.module.css'
import { useRef, useState } from 'react'
import { useLanguage } from 'contexts/LanguageContext/useLanguage'
import { verifyInputs } from 'utils/functions'
import SendEmailVerifyModal from 'components/Pages/login-register/SendEmailVerifyModal/SendEmailVerifyModal'
import { POST } from 'services/fetching'

const error_initial_state = {
	'email': {
		state: false,
	}
}

export async function getStaticProps({ locale }) {

	const sections = [
		"forgetpassword",
	];

	const general_sections = [
		// ["stickybuttons", "btn_help_language"],
		// ["cookies", "banner_language"],
		// ["navbar", "navbar_out_session_text"],
		// ["usermenu", "user_menu_language"],
		// ["stickybuttons", "call_card_form_language"],
		// ["modalstyle2", "modal_style2_text"],
		// ["stickybuttons", "help_card_language"],
		["notification", "footer_text"],
	]

	const promises = sections.map(async (section) => {

		try {

			const response = await import(
				`../../data/Pages/recover-password/${locale}/${section}.json`
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
		forgetpassword,
		footer_text,
	] = await Promise.all([...promises, ...promises2]);

	return {
		props: {
			forgetpassword,
			footer_text,
		},
	};
}

const ForgetPassword = (props) => {

	const { forgetpassword } = props

	const emailInput = useRef()
	const [error, setError] = useState(error_initial_state)
	const [errorMsg, setErrorMsg] = useState('')
	const [openModal, setOpenModal] = useState(false)
	const [loading, setLoading] = useState(false)
	const { domainIndex } = useLanguage()

	const send_email = async () => {

		setError(error_initial_state)

		const email = emailInput.current.value

		if (email.length === 0) {

			setError(prev => {
				return {
					...prev,
					email: {
						state: true,
					}
				}
			})

			setErrorMsg(forgetpassword.error_msg_invalid)

		}

		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

		const fields = [
			{ name: "email", value: email, regex: emailRegex },
		];

		let errors = verifyInputs(fields);

		if (errors.length !== 0) {
			errors.map((error) => {
				setError(prev => {
					return {
						...prev,
						[error.field_name]: {
							state: error.bool,
						}
					}
				})
			})

			setErrorMsg(forgetpassword.error_msg_invalid)

			return;
		}

		setLoading(true)

		setTimeout(() => {

			setOpenModal(true)
			setLoading(false)

			POST('/user/send_recovery_password', {
				email: email,
				domain: domainIndex
			})

		}, 700);

	}

	return (

		<>
			<Head>
				<title>{forgetpassword.head_title}</title>
				<meta name="description" content="Forget Password" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main style={{ overflow: 'hidden' }}>

				<Notification
					img={forget_password}
					title={forgetpassword.title}
					subtitle={forgetpassword.description}
					button_text={forgetpassword.button_text}
					button_onClick={send_email}
					button_is_loading={loading}
					footer_text={props.footer_text}
				>

					<div className={styles.input_container}>

						<InputForm
							placeholder={forgetpassword.input_placeholder}
							errorStatus={error.email.state}
							errorMsg={errorMsg}
							ref={emailInput}
							changeError={() => {
								setError(prev => {
									return {
										...prev,
										'email': {
											state: false,
										}
									}
								})
							}}
						/>

					</div>

					{
						openModal && (
							<SendEmailVerifyModal
								closeModal={() => {
									setOpenModal(false)
								}}
								email={emailInput.current?.value}
							/>
						)
					}

				</Notification>
			</main>

		</>
	)
}

export default ForgetPassword;