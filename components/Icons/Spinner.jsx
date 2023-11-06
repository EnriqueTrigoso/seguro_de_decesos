import React from 'react'

const Spinner = (props) => {
  return (
	<svg
    xmlns="http://www.w3.org/2000/svg"
    style={{
      margin: "auto",
      background: "transparent",
      display: "block",
      shapeRendering: "auto",
    }}
    width={62}
    height={62}
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    fill="#fff"
    {...props}
  >
    <rect x={47} y={25} rx={3} ry={6} width={6} height={12} fill={props.fill}>
      <animate
        attributeName="opacity"
        values="1;0"
        keyTimes="0;1"
        dur="1.0204081632653061s"
        begin="-0.9070294784580498s"
        repeatCount="indefinite"
      />
    </rect>
    <rect
      x={47}
      y={25}
      rx={3}
      ry={6}
      width={6}
      height={12}
      fill={props.fill}
      transform="rotate(40 50 50)"
    >
      <animate
        attributeName="opacity"
        values="1;0"
        keyTimes="0;1"
        dur="1.0204081632653061s"
        begin="-0.7936507936507936s"
        repeatCount="indefinite"
      />
    </rect>
    <rect
      x={47}
      y={25}
      rx={3}
      ry={6}
      width={6}
      height={12}
      fill={props.fill}
      transform="rotate(80 50 50)"
    >
      <animate
        attributeName="opacity"
        values="1;0"
        keyTimes="0;1"
        dur="1.0204081632653061s"
        begin="-0.6802721088435374s"
        repeatCount="indefinite"
      />
    </rect>
    <rect
      x={47}
      y={25}
      rx={3}
      ry={6}
      width={6}
      height={12}
      fill={props.fill}
      transform="rotate(120 50 50)"
    >
      <animate
        attributeName="opacity"
        values="1;0"
        keyTimes="0;1"
        dur="1.0204081632653061s"
        begin="-0.5668934240362812s"
        repeatCount="indefinite"
      />
    </rect>
    <rect
      x={47}
      y={25}
      rx={3}
      ry={6}
      width={6}
      height={12}
      fill={props.fill}
      transform="rotate(160 50 50)"
    >
      <animate
        attributeName="opacity"
        values="1;0"
        keyTimes="0;1"
        dur="1.0204081632653061s"
        begin="-0.4535147392290249s"
        repeatCount="indefinite"
      />
    </rect>
    <rect
      x={47}
      y={25}
      rx={3}
      ry={6}
      width={6}
      height={12}
      fill={props.fill}
      transform="rotate(200 50 50)"
    >
      <animate
        attributeName="opacity"
        values="1;0"
        keyTimes="0;1"
        dur="1.0204081632653061s"
        begin="-0.3401360544217687s"
        repeatCount="indefinite"
      />
    </rect>
    <rect
      x={47}
      y={25}
      rx={3}
      ry={6}
      width={6}
      height={12}
      fill={props.fill}
      transform="rotate(240 50 50)"
    >
      <animate
        attributeName="opacity"
        values="1;0"
        keyTimes="0;1"
        dur="1.0204081632653061s"
        begin="-0.22675736961451246s"
        repeatCount="indefinite"
      />
    </rect>
    <rect
      x={47}
      y={25}
      rx={3}
      ry={6}
      width={6}
      height={12}
      fill={props.fill}
      transform="rotate(280 50 50)"
    >
      <animate
        attributeName="opacity"
        values="1;0"
        keyTimes="0;1"
        dur="1.0204081632653061s"
        begin="-0.11337868480725623s"
        repeatCount="indefinite"
      />
    </rect>
    <rect
      x={47}
      y={25}
      rx={3}
      ry={6}
      width={6}
      height={12}
      fill={props.fill}
      transform="rotate(320 50 50)"
    >
      <animate
        attributeName="opacity"
        values="1;0"
        keyTimes="0;1"
        dur="1.0204081632653061s"
        begin="0s"
        repeatCount="indefinite"
      />
    </rect>
  </svg>
  )
}

export default Spinner;