import styles from "./Circle.module.css"

export const Circle = ({ number, active = false }) => {
  return (
    <div
      className={active ? styles.circle : styles.circledisabled}>
      {number}
    </div>
  )
}
