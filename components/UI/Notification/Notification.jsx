import { getLogo } from 'utils/functions'
import styles from './Notification.module.css'
import { useLanguage } from 'contexts/LanguageContext/useLanguage'
import Image from 'next/image'
import { Facebook, InstagramIco, Linkedin } from 'components/Icons'
import ButtonWithLoading from '../ButtonWithLoading/ButtonWithLoading'
import YoutubeIco from 'components/Icons/YoutubeIco'
import Link from 'next/link'

const Notification = ({ children, img, title, subtitle, button_text, button_onClick, button_is_loading, footer_text }) => {

	const { language, domain } = useLanguage()

	return (
		<section className={styles.confirm_registration}>

			<div className={styles.logo_container}>
				<Link href={"/"}>
					{getLogo(language)}
				</Link>
			</div>

			<div className={styles.card}>

				<div className={styles.image_container}>
					<Image src={img} alt={''} />
				</div>

				<div className={styles.content}>

					<h2 className={styles.title}>{title}</h2>
					<p className={styles.subtitle}>{subtitle}</p>

					{
						children
					}

					<div className={styles.button_container}>

						<ButtonWithLoading
							style={{ width: '191px', fontSize: '16px' }}
							loading={button_is_loading}
							onClick={button_onClick}
						>
							{button_text}
						</ButtonWithLoading>

					</div>

					<div className={styles.social_circles}>

						<a className={styles.social_circle}
							href="https://www.facebook.com/reel/280116237787583"
							target='_blank'
							rel="noreferrer"
							aria-label="Facebook de Eva Seguros"
						>
							<Facebook fill={'#fff'} />
						</a>

						<a className={styles.social_circle}
							href="https://www.instagram.com/seguroseva/" target='_blank'
							rel="noreferrer"
							aria-label="Instragram de Eva Seguros"
						>
							<InstagramIco fill={'#fff'} />
						</a>

						<a className={styles.social_circle}
							href="https://www.linkedin.com/company/eva-movil/"
							target='_blank'
							rel="noreferrer"
							aria-label="Linkedin de Eva Seguros"
						>
							<Linkedin fill={'#fff'} />
						</a>

						<a className={styles.social_circle}
							href="https://www.youtube.com/watch?v=-jpzbSaTKDs"
							target='_blank'
							rel="noreferrer"
							aria-label="Youtube de Eva Seguros"
						>
							<YoutubeIco fill={'#fff'} />
						</a>

					</div>

					<div className={styles.copyright}>
						<p>© {domain} | C/. Gobelas, 2528023 | Madrid, Madrid, España.</p>
						<p>{footer_text.footer}</p>
					</div>

				</div>

			</div>
		</section>
	)
}

export default Notification;