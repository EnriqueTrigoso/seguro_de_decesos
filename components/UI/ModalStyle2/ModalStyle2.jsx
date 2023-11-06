import { Close } from 'components/Icons'
import styles from './ModalStyle2.module.css'
import BlockScroll from '../BlockScroll/BlockScroll';
import useText from 'contexts/TextContext/useText';

const ModalStyle2 = ({ children, closeModal }) => {

	const { modal_style2_text } = useText()

	return (
		<BlockScroll>
			<div className={`${styles.fundation_modal}`}>
				<div
					className={`${styles.fundation_cards} container`}
					onClick={(e) => e.stopPropagation()}
				>
					<div className={styles.close_btn_container} onClick={closeModal}>
						<p>{modal_style2_text.closeButton}</p>
						<div>
							<Close stroke="#5E6788" width={10} height={10} />
						</div>
					</div>

					{
						children
					}

				</div>
			</div>
		</BlockScroll>
	)
}

export default ModalStyle2;