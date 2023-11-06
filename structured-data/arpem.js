

export const arpem = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "Organization",
			"@id": "https://www.arpem.com/#organization",
			"name": "Arpem",
			"url": "https://www.arpem.com/",
			"sameAs": [],
			"logo": {
				"@type": "ImageObject",
				"inLanguage": "en-US",
				"@id": "https://www.arpem.com/#/schema/logo/image/",
				"url": "https://www.arpem.com/wp-content/uploads/2023/07/logo-arpem-new.png",
				"contentUrl": "https://www.arpem.com/wp-content/uploads/2023/07/logo-arpem-new.png",
				"width": 705,
				"height": 186,
				"caption": "Arpem"
			},
			"image": {
				"@id": "https://www.arpem.com/#/schema/logo/image/"
			}
		},
		{
			"@type": "WebSite",
			"@id": "https://www.arpem.com/#website",
			"url": "https://www.arpem.com/",
			"name": "Arpem",
			"description": "",
			"publisher": {
				"@id": "https://www.arpem.com/#organization"
			},
			"potentialAction": [
				{
					"@type": "SearchAction",
					"target": {
						"@type": "EntryPoint",
						"urlTemplate": "https://www.arpem.com/?s={search_term_string}"
					},
					"query-input": "required name=search_term_string"
				}
			],
			"inLanguage": "en-US"
		},
		{
			"@type": "ImageObject",
			"inLanguage": "en-US",
			"@id": "https://www.arpem.com/#primaryimage",
			"url": "https://www.arpem.com/wp-content/uploads/2023/08/OGImage_Arpem.png",
			"contentUrl": "https://www.arpem.com/wp-content/uploads/2023/08/OGImage_Arpem.png",
			"width": 1200,
			"height": 630
		},
		{
			"@type": "WebPage",
			"@id": "https://www.arpem.com/",
			"url": "https://www.arpem.com/",
			"name": "El mejor comparador de seguros online | Arpem.com",
			"isPartOf": {
				"@id": "https://www.arpem.com/#website"
			},
			"about": {
				"@id": "https://www.arpem.com/#organization"
			},
			"primaryImageOfPage": {
				"@id": "https://www.arpem.com/#primaryimage"
			},
			"datePublished": "2022-07-28T10:23:42+00:00",
			"dateModified": "2023-08-08T10:05:22+00:00",
			"description": "Calcula tu seguro online en sólo 3 minutos ✓ Compara coberturas de diferentes aseguradoras ✓ Ahorra hasta un 50% en la póliza ✓",
			"breadcrumb": {
				"@id": "https://www.arpem.com/#breadcrumb"
			},
			"inLanguage": "en-US",
			"potentialAction": [
				{
					"@type": "ReadAction",
					"target": [
						"https://www.arpem.com/"
					]
				}
			]
		},
		{
			"@type": "BreadcrumbList",
			"@id": "https://www.arpem.com/#breadcrumb",
			"itemListElement": [
				{
					"@type": "ListItem",
					"position": 1,
					"name": "Arpem"
				}
			]
		}
	]
}