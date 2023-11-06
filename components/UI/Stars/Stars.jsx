import Star from 'components/Icons/Star'
import Star2 from 'components/Icons/Star2'
import styles from './Stars.module.css'

const Stars = ({ count, width, height, rounded = false }) => {

	return (
		<div className={styles.stars_container}>
			{
				[...Array(count).keys()].map((index) => {
					return rounded ? (
						<Star key={index} width={width} height={height} />
					) : (
						<Star2 key={index} width={width} height={height} />
					)

				})
			}
		</div>
	)
}

export default Stars