import ModalStyle2 from 'components/UI/ModalStyle2/ModalStyle2'
import AvisoLegal from './AvisoLegal'

const Terms = ({closeModal}) => {
	return (
		<ModalStyle2 closeModal={closeModal}>
			<AvisoLegal />
		</ModalStyle2>
	)
}

export default Terms