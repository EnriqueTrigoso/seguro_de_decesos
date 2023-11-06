import styles from './InputSmallData.module.css'
import React, { useContext } from 'react'
import { RegisterContext } from 'contexts/RegisterContext'

const InputSmallData = ({title, dataKey, type= 'text', disabled= false}) => {

	const { dataUser, setDataUser } = useContext(RegisterContext)

	return (
		<>
			<p className={styles.email_text}>{title}</p>
			<div className={styles.email_input}>
				<input
					disabled={disabled}
					value={dataUser[dataKey]}
					type={type}
					onChange={(e) => {
					setDataUser({...dataUser, [dataKey]: e.target.value})
				}}/>
			</div>
		</>
	)
}

export default InputSmallData;