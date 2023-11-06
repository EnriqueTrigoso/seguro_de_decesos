import CheckLine from "components/Icons/CheckLine";
import { useState } from "react";
import styles from './Checkbox.module.css'

const Checkbox = ({ setAretermsAccepted }) => {

	const [checked, setChecked] = useState(false)
	const checkedStyle = checked ? styles.active : ''

	return (
		<span className={`${styles.checkbox} ${checkedStyle}`} onClick={()=> {
			setChecked(prev => !prev)
			if (setAretermsAccepted) setAretermsAccepted(!checked)
		}}>
			<CheckLine />
		</span>
	)
}

export default Checkbox;