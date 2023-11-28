import React from "react";
import "./QuickFacts.css";
import { IQuickFacts } from "./QuickFactsValidator.ts";
import NumberedCircle from "../NumberedCircle/NumberedCircle.tsx";
import ParagraphHeader from "../../../Common/Text/ParagraphHeader/ParagraphHeader.tsx";
import CommonText from "../../../Common/Text/CommonText/CommonText.tsx";

function QuickFacts(props: IQuickFacts) {
  return(
    <>
      <div className="QuickFactsWrapper">
        <ParagraphHeader Data={props.Data.SubTitle}></ParagraphHeader>
        {props.Data.QuickFacts.map((value, index) => (
          <div className="Fact" key={index}>
            <NumberedCircle Number={index+1}></NumberedCircle>
            <CommonText Data={value}></CommonText>
          </div>
        ))}
      </div>
    </>
  );
}

export default QuickFacts;
