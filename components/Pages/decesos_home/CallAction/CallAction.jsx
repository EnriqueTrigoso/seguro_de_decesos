import Button from 'components/UI/Button/Button';
import Image from 'next/image';
import styles from './CallAction.module.css'
import decesos_callaction from 'assets/imgs/decesos_callaction.webp'
import PhoneSection from 'components/UI/PhoneSection/PhoneSection';
import { Title45 } from 'components/UI/Tags/Titles';
import { Text18, Text20 } from 'components/UI/Tags/Texts';
import HeroLoader2 from 'components/Loaders/HeroLoader2';
import CallCardForm from 'components/UI/CallCardForm/CallCardForm';
import { useState } from 'react';
import { usePoolPhone } from 'contexts/PoolPhoneContext.jsx/usePoolPhone';
import Componente1 from 'components/UI/Componente1/Componente1';
import { useContent } from 'hooks/useContent';

const CallAction = ({ content }) => {

	const { PoolPhone } = usePoolPhone()

	const [isOpenModalCall, setIsOpenModalCall] = useState(false)


	return (
		<section className={`${styles.call_action} container`} id="callaction">

			<div className={styles.content}>

				<Title45>{content.title}</Title45>
				<Text20>{content.description}</Text20>

				<div className={styles.date}>
					<Text18>{content.schedule[0]}</Text18>
					<Text18>{content.schedule[1]}</Text18>
				</div>

				<Componente1>
					<Button
						onClick={() => setIsOpenModalCall(true)}
					>{content.buttons[0].text}</Button>
				</Componente1>
			</div>

			<div className={styles.images_container}>
				<Image src={decesos_callaction} alt={'Atencion telefonica - Soporte - Polizadedecesos.com'} />
			</div>


			{
				isOpenModalCall && <CallCardForm setOpenModal={setIsOpenModalCall} setModalType={() => { }} />
			}

		</section>
	)
}

export default CallAction;