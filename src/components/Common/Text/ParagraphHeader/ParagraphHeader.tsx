import React from "react";
import "./ParagraphHeader.css";
import { IParagraphHeader } from "./ParagraphHeaderValidation";

function ParagraphHeader(props: IParagraphHeader) {
  return (
    <h2 style={props.style}>{props.Data}</h2>  
  );
}

export default ParagraphHeader;
