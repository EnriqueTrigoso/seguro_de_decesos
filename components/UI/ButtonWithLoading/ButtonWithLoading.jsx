import Spinner from 'components/Icons/Spinner'
import styles from './ButtonWithLoading.module.css'

const ButtonWithLoading = ({ children, style, background = true, onClick, loading }) => {

	const type = background ? styles.green_button : styles.white_button

	return (

		<div
			onClick={async (e) => {
				await onClick(e)
			}}
			className={`${styles.container} ${type}`}
			style={style}
		>
			{
				loading ? (
					<Spinner />
				) : (
					children
				)
			}
		</div>

	)
}

export default ButtonWithLoading;