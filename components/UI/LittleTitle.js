import React from "react";

const LittleTitle = ({children}) => {
  return (
    <p className="self-start bg-light-accent-color text-accent-text-color px-3.5 py-2 rounded-full font-bold">
      {children}
    </p>
  );
};

export default LittleTitle;
