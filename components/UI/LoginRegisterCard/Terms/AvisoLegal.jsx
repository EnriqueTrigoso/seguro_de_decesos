import { Title25 } from 'components/UI/Tags/Titles'
import styles from './AvisoLegal.module.css'

const AvisoLegal = () => {
	return (
		<>
			<Title25 style={{ textDecoration: 'underline' }}>Aviso Legal</Title25>

			<p className={styles.content}>
				De acuerdo con lo establecido en el Reglamento UE 2016/679, del Parlamento y del Consejo de 27 de abril de 2016 (RGPD) y en la ley orgánica 3/2018, de 5 de diciembre, de protección de datos personales y garantía de los derechos digitales (LOPDGDD), le informamos que la empresa <span className={styles.brand}>ONE SPAIN INSURANCE RISK MANAGEMENT SL</span>  tratamos la información que nos facilita Datos identificativos: nombre y apellidos, Documento Nacional de Identidad (DNI), Número de Identificación de extranjeros (NIE) o pasaporte, dirección postal, código postal, dirección de correo electrónico y número de teléfono, además de Datos personales: Fecha de Nacimiento, con la finalidad de
				<br /><br />
				-	Habilitar la cumplimentación del formulario de petición de información del Sitio Web por parte del Interesado para que presente su solicitud de comparación.
				<br /><br />
				-	Ceder sus datos personales a terceros, a fin generar una BBDD por medio de marketing digital para que te remitan ofertas de productos y servicios que se ajusten a sus intereses o que puedan no estar directamente relacionados a los que tiene contratados con nosotros.
				<br /><br />
				Los datos proporcionados se conservarán mientras se mantenga la relación comercial o durante los años necesarios para cumplir con las obligaciones legales. La legitimación para el tratamiento de sus datos tiene como base legal el consentimiento previo del interesado (Artículo 6.1.a) RGPD).
				<br />Los datos serán cedidos a empresas colaboradoras encargadas en las gestiones de call center.
				<br /><br />
				Usted tiene derecho a obtener confirmación sobre si en <span className={styles.brand}>ONE SPAIN INSURANCE RISK MANAGEMENT SL</span> estamos tratando sus datos personales por tanto tiene derecho a acceder a sus datos personales, rectificar los datos inexactos o solicitar su supresión cuando los datos ya no sean necesarios. Para ello puede dirigirse por escrito a nuestra dirección postal o de correo electrónico.

			</p>
		</>
	)
}

export default AvisoLegal