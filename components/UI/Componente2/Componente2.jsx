import styles from './Componente2.module.css'

const Componente2 = ({children}) => {
	return (
		<div className={styles.button_wrapper}>

			<div className={styles.container__button}>
				{children}
			</div>

		</div>
	)
}

export default Componente2;