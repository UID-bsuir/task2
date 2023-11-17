import React from "react";
import "./SectionHeader.css";
import { ISectionHeader } from "./SectionHeaderValidation";

function SectionHeader(props: ISectionHeader) {
  return (
    <h1>{props.data}</h1>  
  );
}
