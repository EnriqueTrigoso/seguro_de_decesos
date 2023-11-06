import { Text18 } from 'components/UI/Tags/Texts';
import { RegisterContext } from 'contexts/RegisterContext';
import { useContext } from 'react';
import InputContainer from '../InputContainer/InputContainer';
import styles from './DateData.module.css'

const DateData = ({ title, dataKey }) => {

	const { dataUser, setDataUser } = useContext(RegisterContext)
	
	return (
		<div className={styles.date_container}>
			<Text18>{title}</Text18>
			<InputContainer>
				<input
					value={dataUser[dataKey] || ''}
					type={'date'}
					onChange={(e) => {
						setDataUser({ ...dataUser, [dataKey]: e.target.value })
					}} />
			</InputContainer>
		</div>
	)
}

export default DateData;