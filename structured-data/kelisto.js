

export const organization = {
	"@context": "https://schema.org",
	"@type": "Organization",
	"name": "Kelisto",
	"logo": "https://www.kelisto.es/assets/kelisto-logo-microdata-3e9caf0a899e2ed0f3b327696cf39c8e.png",
	"url": "https://www.kelisto.es/",
	"address": {
		"@type": "PostalAddress",
		"addressCountry": "Spain",
		"addressLocality": "Madrid",
		"postalCode": "28036",
		"streetAddress": "Calle Juan Hurtado de mendoza 7,1º"
	},
	"contactPoint": {
		"@type": "ContactPoint",
		"telephone": "+34-917 32 52 53",
		"contactType": "customer service"
	},
	"aggregateRating": {
		"@type": "AggregateRating",
		"ratingValue": "8.88",
		"ratingCount": "685",
		"bestRating": "10"
	},
	"sameAs": [
		"https://twitter.com/kelisto",
		"https://www.facebook.com/kelisto.es",
		"https://www.youtube.com/KelistoEs"
	]
}

export const website = {
	"@context": "http://schema.org",
	"@type": "WebSite",
	"name": "Kelisto",
	"url": "https://www.kelisto.es/",
	"potentialAction": {
		"@type": "SearchAction",
		"target": "https://www.kelisto.es/buscar?q={search_term_string}",
		"query-input": "required name=search_term_string"
	}
}

export const software_aplication = {
	"@context": "https://schema.org/",
	"@type": "SoftwareApplication",
	"name": "Kelisto",
	"operatingSystem": "Web-based",
	"applicationCategory": "Comparator",
	"aggregateRating": {
		"@type": "AggregateRating",
		"ratingValue": "8.88",
		"ratingCount": "685",
		"bestRating": "10"
	},
	"offers": {
		"@type": "Offer",
		"price": "0.00",
		"priceCurrency": "EUR"
	}
}

export const faq = {
	"@context": "https://schema.org",
	"@type": "FAQPage",
	"mainEntity": [
		{
			"@type": "Question",
			"name": "¿Cómo gana dinero Kelisto?",
			"acceptedAnswer": {
				"@type": "Answer",
				"text": "<p>Muy sencillo: cada vez que contratas un seguro, una tarifa de Internet o cualquier otro servicio a través de Kelisto le cobramos una comisión al proveedor que te lo ofrece. Y, por supuesto, tú nunca pagarás de más: los precios que te mostramos son los mismos que te ofrecería cualquier compañía para la misma oferta. </p>\n"
			}
		},
		{
			"@type": "Question",
			"name": "¿En qué orden mostráis las ofertas que me recomendáis?",
			"acceptedAnswer": {
				"@type": "Answer",
				"text": "<p>Las ofertas que te recomendamos aparecen ordenadas por precio, pero siempre basándonos en los datos de consumo que nos hayas facilitado o en las preferencias por las que tú mismo hayas filtrado. Si en algún caso no fuera así, te lo indicaríamos en la página de resultados. </p>\n"
			}
		},
		{
			"@type": "Question",
			"name": "¿Qué hacéis con mis datos?",
			"acceptedAnswer": {
				"@type": "Answer",
				"text": "<p>Para que tengas todas las garantías de seguridad, tus datos pasan a formar parte de ficheros inscritos en la Agencia Española de Protección de Datos. De esta forma podrás ejercer tus derechos de acceso, rectificación, cancelación y oposición (ARCO) consultando el procedimiento en la política de privacidad que encontrarás al pie de esta página.</p>\n"
			}
		},
		{
			"@type": "Question",
			"name": "¿Por qué algunos precios pueden variar? ",
			"acceptedAnswer": {
				"@type": "Answer",
				"text": "<p>Siempre te mostramos los precios que ofrecen las compañías en tiempo real. No obstante, como ocurre en el caso de los seguros, si alguno de los datos que has introducido no es totalmente exacto, la compañía podría darte un precio final distinto cuando completes tu contratación.</p>\n"
			}
		}
	]
}