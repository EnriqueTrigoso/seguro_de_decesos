import { Text14 } from 'components/UI/Tags/Texts'
import styles from './Lists.module.css'

export const List14 = ({ children }) => {
	return (
		<ul className={styles.list14}>
			{
				children.map((operation, index) => {
					return <li key={index}>
						<Text14>
							{operation}
						</Text14>
					</li>
				})
			}
		</ul>
	)
}