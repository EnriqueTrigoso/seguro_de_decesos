import BlogCard from 'components/UI/BlogCard/BlogCard'
import blog1 from 'assets/imgs/blog1.webp'
import blog2 from 'assets/imgs/blog2.webp'
import blog3 from 'assets/imgs/blog3.webp'
import styles from './BlogCards.module.css'
import Navigation from './Navigation/Navigation'

const BlogCards = () => {

	return (
		
		<div className={styles.blog_cards_wrapper}>

			<div className={styles.blog_cards_container}>

				<BlogCard
					img={blog1}
					title={'Mascotas en el hogar, ¿Debo asegurarlas?'}
					description={'Conoce las obligaciones y recomendaciones respecto a las pólizas de mascotas. Si tienes mascotas en casa, no te pierdas este artículo.'}
					category={'Mascotas'}
					date={'29 May 2023'}
					last_read={'3 mins read'}
				/>

				<BlogCard
					img={blog2}
					title={'Póliza agrario, una obligación desconocida'}
					description={'Son ciento los profesionales del sector primario que desconocen las obligaciones de poseer póliza agraria. Infórmate de todas las novedades. '}
					category={'Marketing'}
					date={'29 May 2023'}
					last_read={'3 mins read'}
				/>

				<BlogCard
					img={blog3}
					title={'Novedades de 2023 en las pólizas de coche'}
					description={'2023 viene acompañada de novedades en el sector asegurador de los vehículos. Entra y conoce los servicios que marcarán las diferencias este año.'}
					category={'Pólizas'}
					date={'29 May 2023'}
					last_read={'3 mins read'}
				/>

				<BlogCard
					img={blog1}
					title={'Mascotas en el hogar, ¿Debo asegurarlas?'}
					description={'Conoce las obligaciones y recomendaciones respecto a las pólizas de mascotas. Si tienes mascotas en casa, no te pierdas este artículo.'}
					category={'Mascotas'}
					date={'29 May 2023'}
					last_read={'3 mins read'}
				/>

				<BlogCard
					img={blog2}
					title={'Póliza agraria, una obligación desconocida'}
					description={'Son ciento los profesionales del sector primario que desconocen las obligaciones de poseer póliza agraria. Infórmate de todas las novedades. '}
					category={'Marketing'}
					date={'29 May 2023'}
					last_read={'3 mins read'}
				/>

				<BlogCard
					img={blog3}
					title={'Novedades de 2023 en las pólizas de coche'}
					description={'2023 viene acompañada de novedades en el sector asegurador de los vehículos. Entra y conoce los servicios que marcarán las diferencias este año.'}
					category={'Pólizas'}
					date={'29 May 2023'}
					last_read={'3 mins read'}
				/>

				<BlogCard
					img={blog1}
					title={'Mascotas en el hogar, ¿Debo asegurarlas?'}
					description={'Conoce las obligaciones y recomendaciones respecto a las pólizas de mascotas. Si tienes mascotas en casa, no te pierdas este artículo.'}
					category={'Mascotas'}
					date={'29 May 2023'}
					last_read={'3 mins read'}
				/>

				<BlogCard
					img={blog2}
					title={'Póliza agraria, una obligación desconocida'}
					description={'Son ciento los profesionales del sector primario que desconocen las obligaciones de poseer póliza agraria. Infórmate de todas las novedades. '}
					category={'Marketing'}
					date={'29 May 2023'}
					last_read={'3 mins read'}
				/>

				<BlogCard
					img={blog3}
					title={'Novedades de 2023 en las pólizas de coche'}
					description={'2023 viene acompañada de novedades en el sector asegurador de los vehículos. Entra y conoce los servicios que marcarán las diferencias este año.'}
					category={'Pólizas'}
					date={'29 May 2023'}
					last_read={'3 mins read'}
				/>

				<BlogCard
					img={blog1}
					title={'Mascotas en el hogar, ¿Debo asegurarlas?'}
					description={'Conoce las obligaciones y recomendaciones respecto a las pólizas de mascotas. Si tienes mascotas en casa, no te pierdas este artículo.'}
					category={'Mascotas'}
					date={'29 May 2023'}
					last_read={'3 mins read'}
				/>

				<BlogCard
					img={blog2}
					title={'Póliza agraria, una obligación desconocida'}
					description={'Son ciento los profesionales del sector primario que desconocen las obligaciones de poseer póliza agraria. Infórmate de todas las novedades. '}
					category={'Marketing'}
					date={'29 May 2023'}
					last_read={'3 mins read'}
				/>

				<BlogCard
					img={blog3}
					title={'Novedades de 2023 en las pólizas de coche'}
					description={'2023 viene acompañada de novedades en el sector asegurador de los vehículos. Entra y conoce los servicios que marcarán las diferencias este año.'}
					category={'Pólizas'}
					date={'29 May 2023'}
					last_read={'3 mins read'}
				/>

			</div>

			<div className={styles.navigation_container}>
				<Navigation />
			</div>
		</div>

	)
}

export default BlogCards