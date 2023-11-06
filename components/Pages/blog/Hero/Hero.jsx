import { useMediaQuery } from 'react-responsive';
import BigCard from '../BigCard/BigCard';
import Categories from '../Categories/Categories';
import PopularTags from '../PopularTags/PopularTags';
import Trends from '../Trends/Trends';
import BlogCards from './BlogCards/BlogCards';
import styles from './Hero.module.css'

const Hero = () => {


	const isDesktop = useMediaQuery({ minWidth: 1024 })


	return (
		<section className={`${styles.hero} container`}>

				<div className={styles.container}>

					<div className={styles.left}>

						<BigCard
							category={'Pólizas'}
							title={'Novedades de 2023 en las pólizas de coche'}
							description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.'}
							date={'August 30, 2022'}
							last_read={'4 Mins read'}
							href={'/'}
						/>

						<BlogCards />
					</div>

					{
						isDesktop && (
							<div className={styles.right}>
								<Categories />
								<Trends />
								<PopularTags />
							</div>
						)
					}

				</div>
	
		</section>
	)
}

export default Hero;