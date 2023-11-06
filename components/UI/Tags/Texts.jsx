import styles from './Texts.module.css'

export const BlueBold = ({children, style}) => {
	return (
		<span className={styles.blue_bold} style={style}>
			{children}
		</span>
	)
}

export const Text20 = ({children}) => {
	return (
		<p className={styles.text20}>
			{children}
		</p>
	)
}

export const Text18 = ({children, style}) => {
	return (
		<p className={styles.text18} style={style}>
			{children}
		</p>
	)
}

export const Text16 = ({children}) => {
	return (
		<p className={styles.text16}>
			{children}
		</p>
	)
}

export const Text15 = ({children}) => {
	return (
		<p className={styles.text15}>
			{children}
		</p>
	)
}

export const Text14 = ({children}) => {
	return (
		<p className={styles.text14}>
			{children}
		</p>
	)
}
