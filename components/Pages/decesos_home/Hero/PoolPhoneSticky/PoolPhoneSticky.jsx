import Image from 'next/image'
import styles from './PoolPhoneSticky.module.css'
import { PhoneActive } from 'components/Icons'
import { useMediaQuery } from 'react-responsive'
import CallCardForm from 'components/UI/CallCardForm/CallCardForm'
import { useState } from 'react'
import { usePoolPhone } from 'contexts/PoolPhoneContext.jsx/usePoolPhone'
import { PoolPhoneStickyText } from 'data/PoolPhoneSticky'
import { useLanguage } from 'contexts/LanguageContext/useLanguage'
import AtencionTelefonica from 'components/UI/AtencionTelefonica/AtencionTelefonica'

const PoolPhoneSticky = ({ content }) => {

	const isDesktop = useMediaQuery({ minWidth: 1024 })

	const [isOpenModalCall, setIsOpenModalCall] = useState(false)
	const { PoolPhone, PoolPhoneStickyFixed } = usePoolPhone()
	const { language } = useLanguage()

	const current_text = PoolPhoneStickyText[language]

	return (
		!isDesktop ? (
			<>
				{/* <div className={`${styles.div} ${PoolPhoneStickyFixed ? styles.fixed : ''}`}>
					<AtencionTelefonica />
					<div className={styles.button}>
						<button onClick={() => {
							setIsOpenModalCall(true)
						}} className={styles.teLlamamos}>{current_text.button_text}</button>
					</div>
				</div>

				{
					isOpenModalCall && <CallCardForm setOpenModal={setIsOpenModalCall} setModalType={() => { }} />
				} */}
			</>


		) : <></>

	)
}

export default PoolPhoneSticky