import React from "react";
import "./CommonText.tsx";
import { ICommonText } from "./CommonTextValidation.ts";

function CommonText(props: ICommonText) {
  return (
    <p className="CommonText" style={{color: props.color ? "#" + props.color : "#000000" , ...props.style}}>{props.data}</p>
  );
}

export default CommonText;
