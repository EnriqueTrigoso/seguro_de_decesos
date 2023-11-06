import { useRef, useState } from 'react';
import { POST } from 'services/fetching';
import ButtonWithLoading from '../ButtonWithLoading/ButtonWithLoading';
import styles from './LoginRegisterCard.module.css'
import Checkbox from '../Checkbox/Checkbox';
import Link from 'next/link';
import { useLanguage } from 'contexts/LanguageContext/useLanguage';
import InputForm from './InputForm/InputForm';
import Button from '../Button/Button';
import { useMediaQuery } from 'react-responsive';
import { processBoldText } from 'utils/functions';
import Terms from './Terms/Terms';
import { useRouter } from 'next/router';
import EmailModal from 'components/Pages/comparator/EmailModal/EmailModal';
import useText from 'contexts/TextContext/useText';

const error_initial_state = {
	name: {
		state: false,
	},
	p_surname: {
		state: false,
	},
	m_surname: {
		state: false,
	},
	email: {
		state: false,
	},
	password: {
		state: false,
	}
}

const RegisterCard = ({ sessionStartFunc = () => { }, setStepByHref = '', setStepByFunc = null }) => {

	const { domainIndex } = useLanguage()

	const { logincardtext } = useText()
	const current_text = logincardtext['register']

	const [isCaptchaReady, setIsCaptchaReady] = useState(null);
	const [areTermsAndPolicyAccepted, setAreTermsAndPolicyAccepted] = useState(false);
	const [emailErrorMsg, setEmailErrorMsg] = useState(current_text.input_email.error_msg);
	const route = useRouter();
	const pathName = route.pathname;

	const nombreRef = useRef()
	const apPaternoRef = useRef()
	const apMaternoRef = useRef()
	const emailRef = useRef()
	const passwordRef = useRef()

	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(error_initial_state)

	const [modalVerifyOpen, setModalVerifyOpen] = useState(false)
	const isDesktop = useMediaQuery({ minWidth: 1024 })
	const [modalTerms, setModalTerms] = useState(false)

	const format_text = processBoldText(current_text.checkbox)

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

	const registerEmail = async (e) => {

		const nombreRegex = /^[A-ZÁÉÍÓÚ][a-záéíóú]+(\s[A-ZÁÉÍÓÚ][a-záéíóú]+)?$/;
		const apellidoRegex = /^[A-ZÁÉÍÓÚ][a-záéíóú]+$/;
		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		const passwordRegex = /^[\w\W]{8,15}$/;

		const email = emailRef.current.value.trim().toLowerCase();
		const password = passwordRef.current.value.trim()
		const name = nombreRef.current.value.trim();
		const p_surname = apPaternoRef.current.value
		const m_surname = apMaternoRef.current.value

		setError(error_initial_state)
		setEmailErrorMsg(current_text.input_email.error_msg)

		const fields = [
			// { name: "name", ref: nombreRef, regex: nombreRegex },
			// { name: "p_surname", ref: apPaternoRef, regex: apellidoRegex },
			{ name: "email", ref: emailRef, regex: emailRegex },
			{ name: "password", ref: passwordRef, regex: passwordRegex }
		];

		// if (apMaternoRef.current.value) {
		// 	fields.push(
		// 		{ name: "m_surname", ref: apMaternoRef, regex: apellidoRegex }
		// 	);
		// }

		let allValid = true;

		for (let field of fields) {

			const value = field.ref.current.value;
			const isValid = value && field.regex.test(value);

			if (!isValid) {
				allValid = false;
				changeError(field.name, true);
			}
		}

		if (!allValid) {
			setLoading(false)
			return;
		}

		setLoading(true)

		try {
			const captchaResponse = grecaptcha.getResponse()
			if (captchaResponse === "") {
				setIsCaptchaReady(false);
				setLoading(false);
				return;
			} else {
				setIsCaptchaReady(true);
			}
		} catch (err) {
			// console.log(err)
		}

		if (!areTermsAndPolicyAccepted) {
			setLoading(false);
			return;
		}

		try {

			const verifyExistResponse = await POST('/user/verify_existing_email', {
				email
			})

			if (verifyExistResponse.status === "exist") {
				changeError('email', true)
				setEmailErrorMsg("Este correo ya existe");
				throw new Error('El correo ya existe, intenta con otro');
			}

			const registerResponse = await POST('/user/register', {
				email,
				password,
				name,
				p_surname,
				m_surname,
				dni: "",
				domain: domainIndex
			})

			if (registerResponse.status === "error") {
				changeError('email', true)
				setEmailErrorMsg("Error al registrar");
				throw new Error('Error');
			}

			window.localStorage.setItem(
				'userDataEva',
				JSON.stringify(
					{ ...registerResponse, email }
				)
			)

			sessionStartFunc(registerResponse)

			// setModalVerifyOpen(true)

		} catch (err) {
			setLoading(false)
		}

		setLoading(false)

	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (!areTermsAndPolicyAccepted) return;
		registerEmail()
	}

	const handleOnKeyDown = (e) => {
		if (e.key !== "Enter") return;
		if (!areTermsAndPolicyAccepted) return;
		registerEmail();
	}

	return (

		<div className={styles.register} onClick={(e) => e.stopPropagation()}>

			{
				modalTerms && (
					<Terms closeModal={() => setModalTerms(false)} />
				)
			}

			<div>

				{pathName != "/comparator" ?
					<>
						<div className={styles.header}>
							<span className={styles.title}>

								{
									current_text.title
								}

							</span>

							<p className={styles.description}>
								{current_text.description}
							</p>
						</div>

						<form onSubmit={handleSubmit} onKeyDown={handleOnKeyDown}>
							<InputForm
								ref={nombreRef}
								title={current_text.input_name.title}
								placeholder={current_text.input_name.placeholder}
								errorStatus={error.name.state}
								errorMsg={current_text.input_name.error_msg}
								changeError={() => {
									changeError("name", false)
								}}
							/>
							<InputForm
								ref={apPaternoRef}
								title={current_text.input_p_surname.title}
								placeholder={current_text.input_p_surname.placeholder}
								errorStatus={error.p_surname.state}
								errorMsg={current_text.input_p_surname.error_msg}
								changeError={() => {
									changeError("p_surname", false)
								}}
							/>
							<InputForm
								ref={apMaternoRef}
								title={current_text.input_m_surname.title}
								placeholder={current_text.input_m_surname.placeholder}
								errorStatus={error.m_surname.state}
								errorMsg={current_text.input_p_surname.error_msg}
								changeError={() => {
									changeError("m_surname", false)
								}}
							/>
							<InputForm
								ref={emailRef}
								title={current_text.input_email.title}
								placeholder={current_text.input_email.placeholder}
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

								<div className={styles.checkbox_container}>
									<Checkbox setAretermsAccepted={setAreTermsAndPolicyAccepted} />

									<p>
										{
											format_text.map((text, index) => {

												if (text.type === "text") {
													return text.content + " "
												} else {
													return (
														<span
															key={index}
															className={styles.link}
															onClick={() => setModalTerms(true)}
														>
															{text.content}
														</span>
													)

												}

											})
										}

									</p>

								</div>

								{
									current_text?.forgetPassword && (
										<Link href={''}>
											<p>{current_text.forgetPassword}</p>
										</Link>
									)
								}

							</div>

							<div className={styles.content}>

								<div className={`${styles.captcha_container}`}>
									<div
										className={`g-recaptcha ${isCaptchaReady || isCaptchaReady === null ? null : styles.captcha_container_error}`}
										data-size={isDesktop ? "normal" : "compact"}
										data-sitekey={process.env.reCAPTCHA_site_key}
									>
									</div>
								</div>

							</div>

							<div className={styles.button_container}>

								{areTermsAndPolicyAccepted ? (
									<ButtonWithLoading
										loading={loading}
										onClick={handleSubmit}
									>
										{current_text.button}
									</ButtonWithLoading>
								) : (
									<Button disabled={true}>{current_text.button}</Button>
								)}

							</div>
						</form>
					</> : <EmailModal />}



				{
					pathName != "/comparator" && (
						<div className={styles.action_container}>

							<p className={styles.action1}>{current_text.accion[0]}</p>

							<Link
								href={setStepByHref && setStepByHref}
								onClick={setStepByFunc}
							>
								<p className={styles.action2}>{current_text.accion[1]}</p>
							</Link>

						</div>
					)
				}

			</div>

		</div>
	)
}

export default RegisterCard;