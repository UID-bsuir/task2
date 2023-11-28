import React from "react";
import { ICommonButton } from "./CommonButtonValidation";
import "./CommonButton.css";
import { useNavigate } from "react-router-dom";

function CommonButton({Text: text, Type: type, Url: url, ...props}: ICommonButton) {
  const navigate = useNavigate();

  const redirect = (url: string): void => {
    navigate(url);
  };

  return (
    <button type={type} onClick={() => redirect(url)} {...props} className="CommonButton">
      {text}
    </button>
  );
}

export default CommonButton;
