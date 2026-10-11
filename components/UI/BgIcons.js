import React from "react";

const BgIcon = ({ children, className = "" }) => (
  <div
    aria-hidden="true"
    className={`pointer-events-none absolute select-none text-accent-text-color opacity-10 ${className}`}
  >
    {children}
  </div>
);

export default BgIcon;