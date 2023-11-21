import React from "react";
import "./NumberedCircle.css";
import { INumberedCircle } from "./NumberedCircleValidator.ts";

function NumberedCircle(props: INumberedCircle) {
  return(
    <>
      <div className="NumberedCircle">{props.Number}</div>
    </>
  );
}

export default NumberedCircle;
