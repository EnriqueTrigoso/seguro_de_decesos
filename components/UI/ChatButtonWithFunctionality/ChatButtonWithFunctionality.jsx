import Chat from 'components/Icons/Chat'
import Image from 'next/image'
import styles from './ChatButtonWithFunctionality.module.css'
import { useState } from 'react'
import SendMessage from 'components/Icons/SendMessage'
import ButtonCircle from 'components/UI/ButtonCircle/ButtonCircle'
import Close from 'components/Icons/Close'
import { btnChatLanguage } from 'data/StickyButtons'
import { useLanguage } from 'contexts/LanguageContext/useLanguage'
import { SendingWhatsapp } from 'utils/functions'

const ChatButtonWithFunctionality = ({ agent }) => {

	const [openChat, setOpenChat] = useState(false)
	const { language, domain } = useLanguage()

	return (
		<div className={styles.container}>
			{/* {
				openChat && (
					<div className={styles.chat_container}>
						
						<div className={styles.close_button_container}>
							<ButtonCircle size={43} onClick={()=> {
								setOpenChat(false)
							}}>
								<Close />
							</ButtonCircle>
						</div>

						<div className={styles.message}>
							<span className={styles.avatar_container}>
								<Image src={agent.img} alt={''}/>
							</span>

							<span className={styles.bot_name}>{agent.name}</span>
							
							<div className={styles.text_container}>
								<p className={styles.bot_text}>{btnChatLanguage[language].chatText}</p>
							</div>
						</div>

						<div className={styles.separator}></div>

						<div className={styles.input_container}>
							<input type='text' placeholder={btnChatLanguage[language].chatPlaceholder}></input>
							<SendMessage style={{ cursor: 'pointer' }} />
						</div>


					</div>
				)
			} */}

			{/* <ButtonCircle size={65} onClick={() => {
				setOpenChat(prev => !prev)
			}}> */}
			<ButtonCircle size={65} onClick={() => {
				SendingWhatsapp(`"Hola, me gustaría tener más información acerca de los seguros que he visto en ${domain} ¿Podrían proporcionarme detalles sobre las coberturas, precios y opciones disponibles? ¡Gracias!"`)
			}}>
				<Chat />
			</ButtonCircle>

		</div>
	)
}

export default ChatButtonWithFunctionality;