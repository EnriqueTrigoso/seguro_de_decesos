import React from 'react'
import Comparative from 'components/UI/Comparative/Comparative';
import useText from 'contexts/TextContext/useText';

const LastComparative = () => {

	const { comparative_user_panel_language } = useText()

	const comparatives = [
		{
			title: comparative_user_panel_language.titleDeath,
			date: '19/01/23 16:41',
			insured: '1'
		},
		{
			title: comparative_user_panel_language.titleDeath,
			date: '19/01/23 16:41',
			insured: '1'
		},
		{
			title: comparative_user_panel_language.titleDeath,
			date: '19/01/23 16:41',
			insured: '1'
		},
		{
			title: comparative_user_panel_language.titleDeath,
			date: '19/01/23 16:41',
			insured: '1'
		},
	]

	return (
		<section className={`container`}>

			<Comparative
				title={comparative_user_panel_language.title}
				greenTitle={comparative_user_panel_language.subtitle}
				greenTitleHref={'/my-comparisons'}
				data={comparatives}
			/>

		</section>
	)
}

export default LastComparative;