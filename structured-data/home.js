
export const navigation = {
	"@context": "http://schema.org",
	"@type": "ItemList",
	"itemListElement": [
		{
			"@type": "SiteNavigationElement",
			"position": 1,
			"name": "Segurodedecesos.com = Compara tu seguro en pocos pasos y ahorra un 40%. Además te podrás llevar 2 líneas móviles de Eva Movil con llamadas ilimitadas y 40 GB",
			"description": "Compara tu seguro en pocos pasos y ahorra un 40%. Además te podrás llevar 2 líneas móviles de Eva Movil con llamadas ilimitadas y 40 GB.",
			"url": "https://www.segurodedecesos.com/"
		},
		{
			"@type": "SiteNavigationElement",
			"position": 2,
			"name": "Comparador de Seguro de Vida",
			"description": "Ahorra tiempo y dinero comparando en Segurodevida.com. Compara los mejores Seguros de Vida en Segurodevida.com",
			"url": "https://www.segurodevida.com/"
		},
		{
			"@type": "SiteNavigationElement",
			"position": 3,
			"name": "Comparador de Seguro de Hogar",
			"description": "Ahorra tiempo y dinero comparando en Segurodehogar.com. Compara los mejores Seguros de Hogar en Segurodehogar.com",
			"url": "https://www.segurodehogar.com/"
		},
		{
			"@type": "SiteNavigationElement",
			"position": 4,
			"name": "Eva Móvil",
			"description": "Muerde la manzana y no pagues nunca más por tus líneas móviles.",
			"url": "https://www.evamovil.com/"
		},
	]
}

export const organization = {
	"@context": "https://schema.org",
	"@type": "WebSite",
	"name": "Seguro de Decesos",
	"description": "Compara tu seguro en pocos pasos y ahorra un 40%. Además te podrás llevar 2 líneas móviles de Eva Movil con llamadas ilimitadas y 40 GB",
	"url": "https://www.segurodedecesos.com/",
	"sameAs": [
		"https://www.facebook.com/SegurosEva",
		"https://twitter.com/Seguros_Eva",
		"https://www.youtube.com/@EvaSeguros",
		"https://www.linkedin.com/company/eva-movil",
		"https://www.instagram.com/seguroseva",
		"https://www.tiktok.com/@evaseguros"
	],
	// "image": {
	// 	"@type": "ImageObject",
	// 	"url": ""
	// },
	"copyrightHolder": {
		"@type": "Organization",
		"name": "Eva Seguros",
		"url": "https://www.segurodedecesos.com/",
		// "foundingDate": "2009-11-04",
		// "logo": {
		// 	"@type": "ImageObject",
		// 	"url": "",
		// 	"width": 157,
		// 	"height": 27
		// },
		"location": {
			"@type": "Place",
			"name": "Seguro de Decesos",
			// "hasMap": "https://www.google.com/maps/@40.4470642,-3.6762483,14z/data=!4m12!1m6!3m5!1s0x0:0x8f696a9b52d00e84!!8m2!3d40.448991!4d-3.668781!3m4!1s0x0:0x8f60e84!8m2!3d40.448991!4d-3.668781",
			"url": "https://www.segurodedecesos.com/",
			// "geo": {
			// 	"@type": "GeoCoordinates",
			// 	"latitude": 40.45052590295065,
			// 	"longitude": -3.6690384921938998
			// },
			"address": {
				"@type": "PostalAddress",
				"addressLocality": "Madrid, España",
				"postalCode": "28002",
				"streetAddress": "Calle Gobelas, 2528023",
				"addressCountry": {
					"@type": "Country",
					"name": "ES"
				}
			}
		}
	},
	"creator": {
		"@type": "Organization",
		"name": "Eva Seguros"
	}
}

export const publisher = {
	"@context": "https://schema.org",
	"@type": "WebPage",
	"name": "Seguro de Decesos",
	"description": "Compara tu seguro en pocos pasos y ahorra un 40%. Además te podrás llevar 2 líneas móviles de Eva Movil con llamadas ilimitadas y 40 GB",
	"publisher": {
		"@type": "Organization",
		"@id": "https://www.segurodedecesos.com/",
		"name": "Seguro de Decesos",
		"url": "https://www.segurodedecesos.com/",
		"sameAs": [
			"https://www.facebook.com/SegurosEva",
			"https://twitter.com/Seguros_Eva",
			"https://www.youtube.com/@EvaSeguros",
			"https://www.linkedin.com/company/eva-movil",
			"https://www.instagram.com/seguroseva",
			"https://www.tiktok.com/@evaseguros"
		],
		// "logo": {
		// 	"@type": "ImageObject",
		// 	"url": "https://www.segurodedecesos.com/wp-content/themes/assets/img/logo-azul.png",
		// 	"width": 157,
		// 	"height": 27
		// }
	}
}

export const FAQ = {
	"@context": "https://schema.org",
	"@type": "FAQPage",
	"mainEntity": [{
		"@type": "Question",
		"name": "¿Qué es un seguro de decesos?",
		"acceptedAnswer": {
			"@type": "Answer",
			"text": "Un seguro de decesos está diseñado para ayudar a las familias en los momentos más delicados y garantiza la prestación del servicio funerario y trámites relacionados con el fallecimiento de una persona. Se contrata con la finalidad de aliviar la carga financiera y logística que conlleva un funeral y los trámites legales y administrativos asociados al deceso."
		}
	}, {
		"@type": "Question",
		"name": "¿Cuáles son los beneficios de comparar con nosotros?",
		"acceptedAnswer": {
			"@type": "Answer",
			"text": "Compara en menos de 1 minuto desde una interfaz fácil de usar. Eva Seguros te ayuda a elegir entre las mejores compañías de seguros de decesos en España."
		}
	}, {
		"@type": "Question",
		"name": "¿Cómo encontrar un seguro de decesos que mejor se adapta a ti?",
		"acceptedAnswer": {
			"@type": "Answer",
			"text": "A través de nuestro comparador de seguros de decesos puedes filtrar las ofertas de las mejores compañías para encontrar los seguros de decesos que mejor se adaptan a ti."
		}
	}, {
		"@type": "Question",
		"name": "¿Cuánto cuesta un seguro de decesos?",
		"acceptedAnswer": {
			"@type": "Answer",
			"text": "Existe un amplio rango de primas que dependen de la cantidad de coberturas adicionales que contrates y de la modalidad en la cual pagues la prima. En nuestro comparador de seguros de decesos puedes encontrar los precios más baratos."
		}
	}, {
		"@type": "Question",
		"name": "¿Quién puede contratar un seguro de decesos?",
		"acceptedAnswer": {
			"@type": "Answer",
			"text": "Cualquier persona mayor de edad puede contratar un seguro de decesos."
		}
	}
	]
}

// export const organizationData = {
// 	"@context": "https://schema.org",
// 	"@type": "Organization",
// 	"url": "https://www.evaseguros.com/",	
// 	"name": "Rastreator",
// 	"legalName": "RASTREATOR COMPARADOR CORREDURÍA DE SEGUROS S.L.U",
// 	"foundingDate": "2009-11-04",
// 	"image": {
// 		"@type": "ImageObject",
// 		"url": "https://www.rastreator.com/wp-content/themes/rastreator/assets/img/home/cms-lola-home@2x.png"
// 	},
// 	"sameAs": [
// 		"https://www.facebook.com/SegurosEva",
// 		"https://twitter.com/Seguros_Eva",
// 		"https://www.youtube.com/@EvaSeguros",
// 		"https://www.linkedin.com/company/eva-movil",
// 		"https://www.instagram.com/seguroseva",
// 		"https://www.tiktok.com/@evaseguros"
// 	],
// 	"address": {
// 		"@type": "PostalAddress",
// 		"addressLocality": "Madrid, España",
// 		"postalCode": "28002",
// 		"streetAddress": "Calle Sánchez Pacheco, 85"
// 	},
// 	"contactPoint": {
// 		"@type": "ContactPoint",
// 		"url": "https://www.rastreator.com/contacto",
// 		"contactType": "CustomerService",
// 		"email": "info@rastreator.com",
// 		"telephone": "919 15 07 26",
// 		"areaServed": "Spain",
// 		"availableLanguage": "Spanish, English"
// 	},
// 	"member": [
// 		{
// 			"@type": "Person",
// 			"name": "Antonio Vila Gallardo",
// 			"jobTitle": "Presidente y CEO de EvaSeguros",
// 			"sameAs": "https://es.linkedin.com/in/victorglg"
// 		},
// 		{
// 			"@type": "Person",
// 			"name": "Mariluz Barriga",
// 			"jobTitle": "CMO de Rastreator",
// 			"sameAs": "https://es.linkedin.com/in/mariluzbarriga"
// 		}
// 	],
// 	"logo": {
// 		"@type": "ImageObject",
// 		"url": "https://www.rastreator.com/wp-content/themes/rastreator/assets/img/logo-azul.png",
// 		"width": 157,
// 		"height": 27
// 	}
// }