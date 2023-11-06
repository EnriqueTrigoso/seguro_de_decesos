import Man from 'components/Icons/Man'
import Women from 'components/Icons/Women'
import { Text18 } from 'components/UI/Tags/Texts'
import { RegisterContext } from 'contexts/RegisterContext'
import { useContext } from 'react'
import styles from './GenderData.module.css'
import useText from 'contexts/TextContext/useText'

const GenderData = () => {

	const {genderlanguage} = useText()

	const { dataUser, setDataUser } = useContext(RegisterContext)

	const genders = [
		{
			text: genderlanguage.manText,
			icon: <Man />,
			value: 1
		}, {
			text: genderlanguage.womanText,
			icon: <Women />,
			value: 2
		},
	]

	return (
		<div className={styles.gender}>

			<Text18>{genderlanguage.title}</Text18>

			<div className={styles.buttons}>

				{
					genders.map((genderObj, index) => {


						const isEnable = dataUser.id_gender === index + 1 ? true : false

						return (
							<div key={index} className={`${styles.gender_container} ${isEnable && styles.active}`}
								onClick={() => {

									setDataUser({
										...dataUser,
										id_gender: genderObj.value
									})

								}}
							>
								<span className={styles.circle}>{genderObj.icon}</span>
								<span>{genderObj.text}</span>
							</div>
						)
					})
				}

			</div>
		</div>
	)
}

export default GenderData;