import React from "react";
import "./ParagraphHeader.css";
import { IParagraphHeader } from "./ParagraphHeaderValidation";

function ParagraphHeader(props: IParagraphHeader) {
  return (
    <h2 style={props.style}>{props.data}</h2>  
  );
}

export default ParagraphHeader;
