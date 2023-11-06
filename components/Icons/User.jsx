import React from "react";

const User = (props) => {
  return (
    <button onClick={props.onClick}>
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0.5" y="0.5" width="43" height="43" rx="21.5" fill="#232263" />
        <path
          d="M14 32C14 27.5817 17.5817 24 22 24C26.4183 24 30 27.5817 30 32H14ZM22 23C18.685 23 16 20.315 16 17C16 13.685 18.685 11 22 11C25.315 11 28 13.685 28 17C28 20.315 25.315 23 22 23Z"
          fill="white"
        />
        <rect
          x="0.5"
          y="0.5"
          width="43"
          height="43"
          rx="21.5"
          stroke="#232263"
        />
      </svg>
    </button>
  );
};

export default User;
