import React from "react";

const Term = (props) => {
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
      <path d="M6 10l3 2-3 2M12 15h6" />
    </svg>
  );
};

export default Term;
