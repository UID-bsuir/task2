import React from "react";
import "./CommonText.tsx";
import { ICommonText } from "./CommonTextValidation.ts";

function CommonText(props: ICommonText) {
  return (
    <p className="CommonText" style={{color: props.Color ? "#" + props.Color : "#000000" , ...props.style}}>{props.Data}</p>
  );
}

export default CommonText;
