import { useContext, useEffect } from 'react'
import { StepperContext } from 'contexts/StepperContext'
import styles from './Steps.module.css'
import OptionsCards from '../OptionsCards/OptionsCards'
import StepTitle from '../StepTitle/StepTitle'
import useText from 'contexts/TextContext/useText'

const Step2 = () => {

  const { setShowLeftButton, setShowRightButton } = useContext(StepperContext)
  const { step2text } = useText()

  
  useEffect(() => {
    setShowLeftButton(true)
    setShowRightButton(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={styles.step_container}>

      <StepTitle
        title={step2text.title}
        subtitle={step2text.subtitle}
      />

      <OptionsCards
        userDataKey='number_of_insured'
        options={step2text.options}
      />

    </div>
  )
}

export default Step2;