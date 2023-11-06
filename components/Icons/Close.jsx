import React from "react";

const Close = (props) => {
  return (
    <svg
      width={19}
      height={18}
      viewBox="0 0 19 18"
      stroke="#232263"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m1.84 17 16-16M17.84 17l-16-16"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Close;
