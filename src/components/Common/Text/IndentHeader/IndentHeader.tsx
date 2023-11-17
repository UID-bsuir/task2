import React from "react";
import "./IndentHeader.css";
import { IIndentHeader } from "./IndentHeaderValidation";

function IndentHeader(props: IIndentHeader) {
  return (
    <h3>{props.data}</h3>  
  );
}

export default IndentHeader;
