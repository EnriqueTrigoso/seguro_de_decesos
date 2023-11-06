import { Title14, Title16, Title20 } from 'components/UI/Tags/Titles'
import React from 'react'
import styles from './LegalWarning.module.css'
import { Text14 } from 'components/UI/Tags/Texts'
import { List14 } from 'components/UI/Tags/Lists'
import useText from 'contexts/TextContext/useText'

const LegalWarning = ({legalWarningContent}) => {

	return (
		<div className={styles.content}>
			<Title20>{legalWarningContent.title}</Title20>
			<Title16>1. {legalWarningContent.section1.title}</Title16>
			<Text14>{legalWarningContent.section1.description}</Text14>
			<Text14>{legalWarningContent.section1.purpose_of_the_treatment}</Text14>
			<List14>{legalWarningContent.section1.operations}</List14>
			<Text14>{legalWarningContent.section1.data_treatment[0]}</Text14>
			<Text14>{legalWarningContent.section1.data_treatment[1]}</Text14>
			<List14>{legalWarningContent.section1.data_treatment_list}</List14>
			<Text14>{legalWarningContent.section1.data_retention}</Text14>
			<Text14>{legalWarningContent.section1.legitimation_of_the_treatment}</Text14>
			<Text14>{legalWarningContent.section1.data_retention_criteria}</Text14>
			<Text14>{legalWarningContent.section1.transfer_of_data}</Text14>
			<List14>{legalWarningContent.section1.transfer_of_data_list}</List14>
			<Text14>{legalWarningContent.section1.information_to_third_parties}</Text14>
			<Text14>{legalWarningContent.section1.contact_text}</Text14>
			<Title14>{legalWarningContent.section1.subtitle_user_rights}</Title14>
			<Text14>{legalWarningContent.section1.user_rights_text}</Text14>
			<List14>{legalWarningContent.section1.user_rights_list}</List14>
			<Title14>{legalWarningContent.section1.subtitle_claim}</Title14>
			<Text14>{legalWarningContent.section1.subtitle_claim_text}</Text14>
			<Text14>{legalWarningContent.section1.claim_contact_text}</Text14>
			<List14>{legalWarningContent.section1.claim_contact_list}</List14>

			<Title16>2. {legalWarningContent.section2.title}</Title16>
			<Text14>{legalWarningContent.section2.description}</Text14>

			<Title16>3. {legalWarningContent.section3.title}</Title16>
			<Text14>{legalWarningContent.section3.description}</Text14>

		</div>
	)
}

export default LegalWarning