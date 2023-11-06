import { useContext, useEffect } from 'react'
import { StepperContext } from 'contexts/StepperContext'
import InputDate from '../InputDate/InputDate'
import styles from './Steps.module.css'
import StepTitle from '../StepTitle/StepTitle'
import { validateDate } from '../helpers/helpDate'
import useText from 'contexts/TextContext/useText'

const Step3 = () => {

  const { userData, setUserData, setShowLeftButton, setShowRightButton, nextOrBackStep } = useContext(StepperContext)
  const currentAges = userData["ages"] ? Object.keys(userData["ages"]).length : "";
  const MORE_THAN_FIVE = "5+"

  const { step3text } = useText()

  const dateChange = (date, index) => {
    setUserData({
      ...userData,
      'ages': {
        ...userData['ages'], [index]: date
      }
    })
  }

  const validateData = () => {

    if (!("ages" in userData)) {
      setShowRightButton(false);
      return false;
    }

    if (!(0 in userData.ages)) return false;

    const limit = userData['number_of_insured']
    let filterDates = Object.fromEntries(
      Object.entries(userData.ages).slice(0, limit)
    );

    let areGoodData;
    if (Object.keys(filterDates).length > 1) {
      let [oneData, ...rest] = Object.values(filterDates);
      areGoodData = rest.every((age) => validateDate(age) || age === "");
    } else {
      areGoodData = true;
    }

    return validateDate(filterDates[0]) && areGoodData;
  }

  const handleOnKeyDown = (e) => {

    if (e.key !== "Enter") return;

    let isValidData = validateData();

    if (isValidData) {
      nextOrBackStep('next');
    }

  }

  
  useEffect(() => {
    const isValidData = validateData();
    setShowRightButton(isValidData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData.ages])

  return (
    <div className={styles.step_container}
      onKeyDown={handleOnKeyDown}
    >

      <StepTitle
        title={step3text.title}
        subtitle={step3text.subtitle}
      />

      <div className={styles.option_container}>

        {
          [...Array(userData['number_of_insured']).keys()].map(index => {
            return <InputDate
              key={index}
              index={index}
              current_date={
                userData['ages'] ?
                  userData['ages'][index] : ""
              }
              dateChange={dateChange}
            />
          })
        }

      </div>

    </div>
  )
}

export default Step3;