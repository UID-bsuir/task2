import React from "react";
import "./ArtistShortInfo.css";
import { IArtistShortInfo } from "./ArtistShortInfoValidator";
import ParagraphHeader from "../../../Common/Text/ParagraphHeader/ParagraphHeader.tsx";
import CommonText from "../../../Common/Text/CommonText/CommonText.tsx";
import CommonButton from "../../../Common/CommonButton/CommonButton.tsx";

function ArtistShortInfo(props: IArtistShortInfo) {
  return(
    <>
      <div className="Wrapper">
        <ParagraphHeader Data={props.Data.Name}></ParagraphHeader>
        <CommonText Data={props.Data.ShortInfo}></CommonText>
        <CommonButton Type="button" Text="Learn More" Url={props.Data.Url}></CommonButton>
      </div>
    </>
  );
}

export default ArtistShortInfo;
