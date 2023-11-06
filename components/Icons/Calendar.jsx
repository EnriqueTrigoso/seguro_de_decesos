import React from 'react'

const Calendar = (props) => {
  return (
	<svg
    width={11}
    height={11}
	viewBox="0 0 11 11"
	fill='none'
	stroke="#6A838C"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.469 2.594v-2m4 2v-2m-4.5 4h5m-6 5h7a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
  )
}

export default Calendar;