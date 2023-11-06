import { Card } from 'components/UI/CardDecesos/Card';
import styles from './SendEmailVerifyModal.module.css'
import background2 from 'assets/imgs/background2.webp'
import Image from 'next/image';
import ButtonCircle from 'components/UI/ButtonCircle/ButtonCircle';
import Close from 'components/Icons/Close';
import { getLogo } from 'utils/functions';
import { useLanguage } from 'contexts/LanguageContext/useLanguage';
import useText from 'contexts/TextContext/useText';

const SendEmailVerifyModal = ({ closeModal, email }) => {

	const { language } = useLanguage()
	const { sendemailverifymodaltext } = useText()

	return (
		<div className={'modal'}>

			<div className={styles.email_container}>

				<div className={styles.card_container}>
					<Card>
						<div className={styles.logo_container}>
							{getLogo(language)}
						</div>
						<div className={styles.image_container}>
							<Image src={background2} alt='' />
						</div>
						<h2>{sendemailverifymodaltext.title}</h2>
						<p>{sendemailverifymodaltext.description[0]} <span className={styles.email}>{email}</span>. <br /><br />
							{sendemailverifymodaltext.description[1]}
							<br /><br />
							{sendemailverifymodaltext.description[2]}
						</p>

						<div className={styles.close_button_container} onClick={closeModal}>
							<ButtonCircle size={25} >
								<Close width={12} height={12} />
							</ButtonCircle>
						</div>

					</Card>

				</div>

			</div>

		</div>
	)
}

export default SendEmailVerifyModal;