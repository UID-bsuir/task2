import React from "react";
import "./SectionHeader.css";
import { ISectionHeader } from "./SectionHeaderValidation";

function SectionHeader(props: ISectionHeader) {
  return (
    <h1 className="SectionHeader">{props.data}</h1>  
  );
}

export default SectionHeader;
