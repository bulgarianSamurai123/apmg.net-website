import React from "react";

const Git = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="6" cy="5" r="2" />
      <circle cx="6" cy="19" r="2" />
      <circle cx="18" cy="9" r="2" />
      <path d="M6 7v10M18 11c0 4-6 3-12 6" />
    </svg>
  );
};

export default Git;
