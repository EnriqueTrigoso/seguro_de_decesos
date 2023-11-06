import React from 'react'
import { FAQ, navigation, organization, organizationData, publisher } from 'structured-data/home'

const StructuredData = () => {
	return (
		<>
			<script
				key="structured-navigation-data"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(navigation) }}
			/>

			<script
				key="structured-organizaton-data"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
			/>

			<script
				key="structured-publisher-data"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(publisher) }}
			/>

			<script
				key="structured-faq-data"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ) }}
			/>

			{/* <script
				key="structured-organization-data"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
			/> */}
		</>
	)
}

export default StructuredData