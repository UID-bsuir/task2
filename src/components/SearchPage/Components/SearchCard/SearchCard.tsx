import React from "react";
import "./SearchCard.css";
import { ISearchCard } from "./SearchCardValidator";
import CommonText from "../../../Common/Text/CommonText/CommonText.tsx"; 
import SectionHeader from "../../../Common/Text/SectionHeader/SectionHeader.tsx";
import IndentHeader from "../../../Common/Text/IndentHeader/IndentHeader.tsx";  
import { getLangOrSetDefault } from "../../../../Utils/Cookies.ts";
import DynamicImage from "../../../Common/DynamicImage/DynamicImage.tsx";
function SearchCard(props: ISearchCard) {

  if (!props.data || props.data.length == 0) {
    return (
      <div className="NotFound">
        <CommonText
          Data={
            getLangOrSetDefault() === "En"
              ? "Nothing found. Try looking for something else..."
              : "Ничего не найдено. Попробуйте искать иначе..."
          }
        ></CommonText>
      </div>
    );
  }

  return(
    <div className="CardsWrapper">
      {props.data.map((a, index) => (
        <a key={index} href={`/${a.ID}`} className="SearchCard">
          <div className="ImgWrap">
            <DynamicImage {...a.Data.Image}></DynamicImage>
          </div>
          <div className="Info">
            <SectionHeader Data={a.Data.Name}></SectionHeader>
            <IndentHeader Data={a.Data.Facts[0]}></IndentHeader>
            <div className="Facts">
              <CommonText Data={"• " + a.Data.Facts[1]}></CommonText>
              <CommonText Data={"• " + a.Data.Facts[2]}></CommonText>
              <CommonText Data={"• " + a.Data.Facts[3]}></CommonText>
              <CommonText Data={"• " + a.Data.Facts[4]}></CommonText>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

export default SearchCard;
