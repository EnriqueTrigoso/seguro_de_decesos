import { useContext } from 'react'
import { StepperContext } from "contexts/StepperContext";
import OptionCard from 'components/UI/OptionCard/OptionCard'
import styles from './OptionsCards.module.css'

const OptionsCards = ({ userDataKey, options }) => {

	const { userData, setUserData, nextOrBackStep } = useContext(StepperContext)

	const userDataChange = (userDataValue) => {
		setUserData({ ...userData, [userDataKey]: userDataValue })
	}

	return (
		<div className={styles.options_cards}>
			{
				options.map(({ text, userDataValue }, index) => (
					<OptionCard
						key={index}
						title={text}
						name={userDataValue}
						userDataChange={userDataChange}
						nextOrBackStep={nextOrBackStep}
						optionSelected={userData[userDataKey] || ""}/>
				))
			}
		</div>
	)
}

export default OptionsCards;