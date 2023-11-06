import { useRef, useState } from 'react';
import { POST, verificar_email } from 'services/fetching';
import ButtonWithLoading from '../ButtonWithLoading/ButtonWithLoading';
import styles from './LoginRegisterCard.module.css'
import Link from 'next/link';
import { useLanguage } from 'contexts/LanguageContext/useLanguage';
import InputForm from './InputForm/InputForm';
import { useModal } from 'hooks/useModal';
import Modal from '../Modal/Modal';
import ForgetPasswordModal from './ForgetPasswordModal/ForgetPasswordModal';
import useText from 'contexts/TextContext/useText';

const initial_state = {
	email: {
		state: false,
	},
	password: {
		state: false,
	},
}

const LoginCard = ({ sessionStartFunc, setStepByHref = '', setStepByFunc = null, closeFunc = null }) => {

	const { domain } = useLanguage()

	const { logincardtext } = useText()
	const current_text = logincardtext['login']

	const [isOpenForgetPasswordModal, openForgetPasswordModal, closeForgetPasswordModal] = useModal(false);

	const emailRef = useRef()
	const passwordRef = useRef()

	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(initial_state)
	const [emailErrorMsg, setEmailErrorMsg] = useState(current_text.input_email.error_msg);

	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

	const changeError = (type, bool) => {

		setError(prev => {
			return {
				...prev,
				[type]: {
					state: bool,
				}
			}
		})
	}

	const loginEmail = async (e) => {


		const email = emailRef.current.value.trim();
		const password = passwordRef.current.value.trim()

		setError(initial_state)
		setEmailErrorMsg(current_text.input_email.error_msg);

		const fields = [
			{ name: "email", ref: emailRef, regex: emailRegex },
			{ name: "password", ref: passwordRef, regex: null }
		];

		let allValid = true;

		for (let field of fields) {
			const value = field.ref.current.value;
			let isValid = false

			try {
				if (value) {
					isValid = field.regex.test(value);
				}
			} catch {
				if (value) {
					isValid = true
				}
			}

			if (!isValid) {
				allValid = false;
				changeError(field.name, true);
			}
		}

		if (!allValid) {
			setLoading(false)
			return;
		}


		try {

			setLoading(true)

			let response = await verificar_email(email)

			if (response.status === 'exist') {

				setError(prev => {
					return {
						...prev,
						email: {
							state: false,
						}
					}
				})

			} else if (response.status === 'ok') {

				setError(prev => {
					return {
						...prev,
						email: {
							state: true,
						}
					}
				})

			}

			// PASSWORD STEP

			const loginResponse = await POST('/user/login', {
				email,
				password
			})

			if (loginResponse.token) {

				window.localStorage.setItem(
					'userDataEva',
					JSON.stringify(
						{ ...loginResponse, email }
					)
				)

				passwordRef.current.blur();

				sessionStartFunc()

			} else {

				setError(prev => {
					return {
						...prev,
						password: {
							state: true,
						}
					}
				})

			}

			setLoading(false)

		} catch (err) {
			setLoading(false)
		}

	}

	const handleSubmit = (e) => {
		e.preventDefault()
		loginEmail()
	}

	const handleOnKeyDown = (e) => {
		if (e.key !== "Enter") return;
		loginEmail();
	}

	const handleOpenForgetPasswordModal = () => {

		let email = emailRef.current.value;

		if (!email) {
			setEmailErrorMsg('Por favor de ingresar un correo electrónico');
			changeError("email", true);
			return;
		}

		if (!email.match(emailRegex)) {
			setEmailErrorMsg('Correo electrónico no válido');
			changeError("email", true);
			return;
		}

		setError({
			...error,
			"email": {
				state: false,
			}
		});

		openForgetPasswordModal();
	}

	return (

		<div className={styles.register} onClick={(e) => e.stopPropagation()}>

			<div>

				<div className={styles.header}>
					<span className={styles.title}>

						{
							current_text.title
						}

					</span>

					<p className={styles.description}>

						{current_text.description.replace('{domain}', domain)}

					</p>
				</div>

				<form onSubmit={handleSubmit} onKeyDown={handleOnKeyDown}>
					<InputForm
						ref={emailRef}
						title={current_text.input_email.title}
						placeholder={current_text.input_email.placeholder[0]}
						errorStatus={error.email.state}
						errorMsg={emailErrorMsg}
						changeError={() => {
							changeError("email", false)
						}}
					/>
					<InputForm
						ref={passwordRef}
						inputType="password"
						title={current_text.input_password.title}
						placeholder={current_text.input_password.placeholder}
						errorStatus={error.password.state}
						errorMsg={current_text.input_password.error_msg}
						changeError={() => {
							changeError("password", false)
						}}
					/>
					<div className={styles.checkbox_wrapper}>

						{/* <div className={styles.checkbox_container}>
							<Checkbox />
							<p>{current_text.checkbox}</p>
						</div> */}

						{
							current_text?.forgetPassword && (
								<Link
									href={'/recover-password'}>
									<p className={styles.forgetPassword}>{current_text.forgetPassword}</p>
								</Link>
							)
						}

					</div>

					<div className={styles.button_container}>

						<ButtonWithLoading
							loading={loading}
							onClick={handleSubmit}
						>
							{current_text.button}
						</ButtonWithLoading>

					</div>
				</form>

				<div className={styles.content}>

					{/* Capcha */}
					<div className={styles.captcha_container}>
						<div className="g-recaptcha" data-sitekey={process.env.reCAPTCHA_site_key}>
						</div>
					</div>

					{/* <div className={styles.line_container}>
						<span className={styles.line}></span>
						<p>{current_text.description2}</p>
						<span className={styles.line}></span>
					</div> */}

				</div>

				{/* <div className={styles.social_buttons_container}>

					<InputContainer>
						<div className={styles.text_wrapper}>
							<Google />
							<span>{current_text.social_buttons[0]}</span>
						</div>
					</InputContainer>

					<InputContainer>

						<div className={styles.text_wrapper}>
							<Facebook />
							<span>{current_text.social_buttons[1]}</span>
						</div>

					</InputContainer>
				</div> */}

				<div className={styles.action_container}>

					<p className={styles.action1}>{current_text.accion[0]}</p>

					<Link
						href={setStepByHref && setStepByHref}
						onClick={setStepByFunc}
					>
						<p className={styles.action2}>{current_text.accion[1]}</p>
					</Link>

				</div>


			</div>
			{isOpenForgetPasswordModal && (
				<Modal isOpen={isOpenForgetPasswordModal} closeModal={() => {
					closeForgetPasswordModal()
				}}>
					<ForgetPasswordModal email={emailRef.current.value} />
				</Modal>
			)}
		</div>
	)
}

export default LoginCard;