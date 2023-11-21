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
        <ParagraphHeader data={props.data.Name}></ParagraphHeader>
        <CommonText data={props.data.ShortInfo}></CommonText>
        <CommonButton type="button" text="Learn More" url={props.data.Url}></CommonButton>
      </div>
    </>
  );
}

export default ArtistShortInfo;
