import React from "react";

const AngleDown = (props) => {
  return (
    <svg
      width={18}
      height={10}
      fill="#00983A"
      viewBox="0 0 18 10"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.058.808a.625.625 0 0 1 .885 0L9 7.866 16.058.808a.626.626 0 1 1 .884.885l-7.5 7.5a.625.625 0 0 1-.884 0l-7.5-7.5a.625.625 0 0 1 0-.885Z"
      />
    </svg>
  );
};

export default AngleDown;
