import DNI from 'components/Icons/DNI';
import FormInputContainerWithIcon from 'components/UI/FormInputContainerWithIcon/FormInputContainerWithIcon';
import InputCardWrapper from 'components/UI/InputCardWrapper/InputCardWrapper';
import { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import { validateDate } from '../helpers/helpDate';
import { regexTest } from 'utils/regex';
import useText from 'contexts/TextContext/useText';

const InputDate = ({ index, current_date, dateChange }) => {

	const [isValid, setIsValid] = useState(null);
	const [currentValue, setCurrentValue] = useState(current_date)
	const { inputdatetext } = useText()

	const title = index === 0 ? inputdatetext.title1 : `${(index + 1) + inputdatetext.title2}`

	const validate = (value) => {
		if (!value || !Boolean(value.match(regexTest))) return;
		let isValidBirthdate = validateDate(value);
		setIsValid(isValidBirthdate)
	}

	const handleChange = (e) => {

		const { value } = e.target;

		dateChange(
			value,
			index
		);

		setCurrentValue(prev => value)

		validate(value)
	}


	useEffect(() => {
		validate(current_date)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const errorMessageStyle = {
		color: "#f55353",
		fontSize: "14px",
		fontWeight: "500",
		margin: "0",
	}

	return (

		<InputCardWrapper title={`${inputdatetext.input_title + ' ' + title}`}>

			<FormInputContainerWithIcon>

				<InputMask
					onChange={(e) => handleChange(e)}
					mask="99/99/9999"
					maskChar=''
					placeholder={inputdatetext.placeholder}
					value={currentValue}
				/>

				<DNI />

			</FormInputContainerWithIcon>
			{isValid || isValid === null ? <></> : <p style={errorMessageStyle}>{inputdatetext.error_msg}</p>}
		</InputCardWrapper>

	)
}

export default InputDate;
