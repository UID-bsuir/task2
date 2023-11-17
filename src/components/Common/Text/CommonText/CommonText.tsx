import React from "react";
import "./CommonText.tsx";
import { ICommonText } from "./CommonTextValidation.ts";

function CommonText(props: ICommonText) {
  return (
    <p className="CommonText">{props.data}</p>
  );
}

export default CommonText;
