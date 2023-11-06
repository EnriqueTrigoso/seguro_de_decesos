import InputForm from 'components/UI/LoginRegisterCard/InputForm/InputForm'
import styles from './recovery_password.module.css'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Notification from 'components/UI/Notification/Notification'
import user_recovery_password from 'assets/imgs/user_recovery_password.webp'
import { useRef, useState } from 'react'
import { verifyInputs } from 'utils/functions'
import { POST } from 'services/fetching'


const error_initial_state = {
	new_password: {
		state: false
	}
}

export async function getStaticProps({ locale }) {

	const sections = [
		"recovery_text",
	];

	const general_sections = [
		["notification", "footer_text"],
	]

	const promises = sections.map(async (section) => {

		try {

			const response = await import(
				`../../data/Pages/recovery/${locale}/${section}.json`
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
		recovery_text,
		footer_text,
	] = await Promise.all([...promises, ...promises2]);

	return {
		props: {
			recovery_text,
			footer_text,
		},
	};
}

const RecoveryPassword = ({ recovery_text, footer_text }) => {

	const router = useRouter()
	const query = router.query
	const newPasswordInput = useRef()
	const [error, setError] = useState(error_initial_state)

	const sendPassword = () => {


		const passwordRegex = /^[\w\W]{8,15}$/;
		const newPassword = newPasswordInput.current.value

		const fields = [
			{ name: "new_password", value: newPassword, regex: passwordRegex },
		]

		const errors = verifyInputs(fields)

		if (errors.length) {

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

			return
		}

		try {

			if (Object.keys(query).length !== 0 && newPassword) {

				POST('/user/recovery_password', {
					token: query.token,
					new_password: newPassword
				})
					.then(dataResponse => {

						if (dataResponse.status === 'ok') {
							router.push('/login')
						} else {
							// console.log(dataResponse.status)
						}

					})
			}

		} catch (error) {
			// console.log({ error })
		}
	}

	return (

		<>
			<Head>
				<title>Recovery Password</title>
				<meta name="description" content="Recovery Password" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main style={{ overflow: 'hidden' }}>

				<Notification
					img={user_recovery_password}
					title={recovery_text.title}
					subtitle={''}
					button_text={recovery_text.button_text}
					button_onClick={sendPassword}
					footer_text={footer_text}
				>

					<div className={styles.input_container}>

						<InputForm
							title={''}
							placeholder={recovery_text.placeholder}
							errorStatus={error.new_password.state}
							errorMsg={recovery_text.error_msg}
							inputType={'password'}
							ref={newPasswordInput}
							changeError={() => {
								setError(prev => {
									return {
										...prev,
										'new_password': {
											state: false,
										}
									}
								})
							}}
						/>

					</div>

				</Notification>

			</main>

		</>
	)
}

export default RecoveryPassword;