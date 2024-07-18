import React from "react";

const Button = ({ children, className = "" }) => {
  return (
    <div>
      <button
        className={`rounded-[30px] text-white font-semibold bg-mainDark py-3 px-11 ${className}`}
        type="submit">
        {children}
      </button>
    </div>
  );
};

export default Button;
