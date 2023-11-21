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
        <ParagraphHeader data={props.data.SubTitle}></ParagraphHeader>
        {props.data.QuickFacts.map((value, index) => (
          <div className="Fact" key={index}>
            <NumberedCircle Number={index+1}></NumberedCircle>
            <CommonText data={value}></CommonText>
          </div>
        ))}
      </div>
    </>
  );
}

export default QuickFacts;
