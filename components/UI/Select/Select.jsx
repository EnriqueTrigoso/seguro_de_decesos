import styles from './Select.module.css'

const Select = ({select_id, options, onChange}) => {
	return (
		<select id={select_id} className={styles.select} onChange={onChange} >

			{
				options.map((optionObj, index)=> {
					return (
						<option 
							key={index}
							value={ optionObj['value'] } 
						>
								{optionObj['text']}
						</option>
					)
				})
			}

		</select>
	)
}

export default Select;