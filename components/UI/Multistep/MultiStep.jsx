import { Circle } from "./Circle"
import { MultiLine } from "./Line"
import styles from "./MultiStep.module.css"

export const MultiStep = ({ newStepsState }) => {

  return (
    <div className={styles.multistep}>
      {
        newStepsState.map((step, index) => {

          const showLine = index + 1 !== newStepsState.length ? true : false
          const { highlighted } = step

          return (
            <div className={styles.step} key={index}>
              <Circle number={index + 1} active={highlighted} />
              <MultiLine active={highlighted} show={showLine} />
            </div>
          )

        })
      }
    </div>
  )
}
