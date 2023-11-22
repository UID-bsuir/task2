import React from "react";
import "./DeveloperCard.css";
import { IDeveloperCard } from "./DeveloperCardValidator.ts";
import DynamicImage from "../../../Common/DynamicImage/DynamicImage.tsx";
import ParagraphHeader from "../../../Common/Text/ParagraphHeader/ParagraphHeader.tsx";
import CommonText from "../../../Common/Text/CommonText/CommonText.tsx";

function DeveloperCard(props: IDeveloperCard) {
  return (
    <a href={props.GHLink} className="Link">
      <div className="ColorWrapper">
        <DynamicImage Src={props.Image.Src} Width={props.Image.Width} Height={props.Image.Height} Alt={props.Image.Alt}></DynamicImage>
        <div className="TextualInfo">
          <ParagraphHeader data={props.Nickname}></ParagraphHeader>
          <div className="FactsWrapper">
            {props.Facts.map((el, index) => <CommonText key={index} data={el}></CommonText>)}
          </div>
        </div>
      </div>
    </a> 
  );
}

export default DeveloperCard;
