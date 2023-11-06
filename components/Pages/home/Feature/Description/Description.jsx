import styles from './Description.module.css'

const Description = ({title, list_items}) => {
	return (
		<div className={styles.description}>
			<h4 className={styles.card_subtitle}>{title}</h4>
			<ul className={styles.list}>
				{
					list_items?.map((item, index)=> {
						return <li key={index}>{item}</li>
					})
				}
			</ul>
		</div>
	)
}

export default Description;