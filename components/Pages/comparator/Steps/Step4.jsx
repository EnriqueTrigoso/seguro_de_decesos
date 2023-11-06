import { useContext, useEffect } from 'react'
import { StepperContext } from 'contexts/StepperContext'
import styles from './Steps.module.css'
import StepTitle from '../StepTitle/StepTitle'
import InputPostal from '../InputDate/InputPostal'
import { useLoginRegisterModal } from 'components/Pages/comparator/context/LoginRegisterModalContext/useLoginRegisterModal'
import useText from 'contexts/TextContext/useText'

const Step4 = () => {

  const { userData, setShowRightButton } = useContext(StepperContext)
  const { setSendData } = useLoginRegisterModal()
  const currentPostalCode = userData['postal_code'] ? userData['postal_code'] : ''

  const { step4text } = useText()

  // let checkPostalCode = /^[0-9]{5}$/g

  useEffect(() => {
    setShowRightButton(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // const postalCodeChange = (postal_code) => {
  //   setUserData({ ...userData, 'postal_code': postal_code })
  //   if (!("postal_code" in userData)) return;
  //   setShowRightButton(postal_code.match(checkPostalCode));
  // }

  const handleOnKeyDown = async (e) => {

    if (e.key !== "Enter") return;
    if (!("postal_code" in userData)) return;

    if (userData["postal_code_valid"]) {
      setSendData(true)
    }

  }

  return (
    <div className={styles.step_container} onKeyDown={handleOnKeyDown}>

      <StepTitle
        title={step4text.title}
        subtitle={step4text.subtitle}
      />
      <InputPostal
        currentPostalCode={currentPostalCode}
      />

    </div>
  )
}

export default Step4;