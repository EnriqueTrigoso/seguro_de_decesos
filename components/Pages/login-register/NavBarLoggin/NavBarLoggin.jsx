import Button from 'components/UI/Button/Button'
import Link from 'next/link'
import styles from './NavBarLoggin.module.css'
import { getLogo } from 'utils/functions'
import { useLanguage } from 'contexts/LanguageContext/useLanguage'
import useText from 'contexts/TextContext/useText'

const NavBarLoggin = ({ type }) => {

	const { language } = useLanguage()
	const { navbarloggintext } = useText()
	const current_text = navbarloggintext[type]

	return (
		<div className={styles.navbar}>

			<Link href={'/'}>
				<div className={styles.logo_container}>
				<Link href={"/"}>
					{getLogo(language)}
				</Link>
				</div>
			</Link>

			<div className={styles.buttons_container}>

				<span>{current_text.title1}</span>

				<Link href={type === 'login' ? '/register' : '/login'}>
					<Button
						width={146}
						height={43}
						style={{ fontSize: '16px' }}
					>
						{current_text.title2}
					</Button>
				</Link>
			</div>

		</div>
	)
}

export default NavBarLoggin;