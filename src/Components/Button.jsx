import React from "react";

const CustomButton = ({ text, icon, onClick, href }) => {
  const Component = href ? "a" : "button";

  return (
    <Component
      href={href}
      onClick={onClick}
      className="custom-button cursor-pointer d-flex align-items-center gap-3 text-white rounded-5 px-3 position-relative overflow-hidden border-0 fw-bold text-decoration-none border-0"
   
    >
      <span className="custom-button-content position-relative z-1">
        {text}
      </span>
      <span className="btn-icon icon-container z-1 rounded-circle d-flex align-items-center justify-content-center">
        {icon}
      </span>
    </Component>
  );
};

export default CustomButton;
