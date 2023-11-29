import React from "react";
import "./SectionHeader.css";
import { ISectionHeader } from "./SectionHeaderValidator";

function SectionHeader(props: ISectionHeader) {
  return (
    <h1 className="SectionHeader" style={props.style}>{props.Data}</h1>  
  );
}

export default SectionHeader;
