import React from "react";

const Win = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 9h20M6 6.5h.01M9 6.5h.01" />
    </svg>
  );
};

export default Win;
