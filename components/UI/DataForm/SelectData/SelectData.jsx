import Select from 'components/UI/Select/Select';
import { Text18 } from 'components/UI/Tags/Texts';
import { RegisterContext } from 'contexts/RegisterContext';
import { useContext, useEffect } from 'react';
import InputContainer from '../InputContainer/InputContainer';
import styles from './SelectData.module.css'

const SelectData = ({ select_id, title, dataKey, options }) => {

	const { dataUser, setDataUser } = useContext(RegisterContext)


	useEffect(() => {
		const select_found = document.getElementById(select_id);
		select_found.selectedIndex = dataUser[dataKey] - 1;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dataUser])


	return (
		<div className={styles.select_container}>
			<Text18>{title}</Text18>
			<InputContainer>
				<Select
					select_id={select_id}
					options={options}
					onChange={(e) => {
						setDataUser({ ...dataUser, [dataKey]: parseInt(e.target.value) })
					}}
				/>
			</InputContainer>
		</div>
	)
}

export default SelectData;