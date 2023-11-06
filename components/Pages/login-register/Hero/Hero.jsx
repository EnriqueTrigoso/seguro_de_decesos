
import styles from './Hero.module.css'
import NavBarLoggin from 'components/Pages/login-register/NavBarLoggin/NavBarLoggin'
import Content from './Content/Content';

const Hero = ({ page }) => {

	return (
		<section className={`${styles.hero} container`}>

			<NavBarLoggin
				type={page}
			/>

			<Content type={page} />

		</section>
	)
}

export default Hero;