import React from "react";
import "./MainPage.css";
import Header from "../Layout/Header/Header.tsx";
import db from "../../assets/data/database.json";
import {ErrorBoundary } from "../500Page/500Page.tsx";
import { getLangOrSetDefault } from "../../Utils/Cookies.ts";
import "./MainPage.css";
import CommonText from "../Common/Text/CommonText/CommonText.tsx";
import SectionHeader from "../Common/Text/SectionHeader/SectionHeader.tsx";
import ParagraphHeader from "../Common/Text/ParagraphHeader/ParagraphHeader.tsx";
import IndentHeader from "../Common/Text/IndentHeader/IndentHeader.tsx";
import CommonButton from "../Common/CommonButton/CommonButton.tsx";
import ArtistShortInfo from "./Components/ArtistShortInfo/ArtistShortInfo.tsx";
import QuickFacts from "./Components/QuickFacts/QuickFacts.tsx";
import { getArtist } from "../../Utils/GetArtist.ts";
import DynamicImage from "../Common/DynamicImage/DynamicImage.tsx";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

function MainPage() {

  const lang = getLangOrSetDefault().toLowerCase();

  const a = getArtist();
  return (
    <ErrorBoundary>
      <div className="Hero-Wrapper">
        <section className="Intro">
          <Header data={db[lang].Header}></Header>
          <div className="LeftColumn">
            <h1>{db[lang].MainPage.Header.Title}</h1>
            <div className="TextAndButton">
              <CommonText data={db[lang].MainPage.Header.SubInfo} color="ffffff"></CommonText>
              <CommonButton text={db[lang].MainPage.Header.Button} type="button" url="/search" style={{border: "#ffffff 2px solid", color: "#ffffff"}}></CommonButton>
            </div>
          </div>
        </section>
        <section className="ArtistOfTheDay">
          <SectionHeader data={db[lang].MainPage.ArtistOfTheDay.Title}></SectionHeader>
          <div className="ArtistInfo">
            <ArtistShortInfo data={{Name: db[lang].Artists[a].Name, ShortInfo: db[lang].Artists[a].ShortInfo, Url: db[lang].Artists[a].ID}}></ArtistShortInfo>
            <QuickFacts data={{QuickFacts: db[lang].Artists[a].QuickFacts, SubTitle: db[lang].MainPage.ArtistOfTheDay.SubTitle}}></QuickFacts>
            <div className="ImgWrapper">
              <DynamicImage Src={db[lang].Artists[a].Gallery[0]} Alt={db[lang].Artists[a].Name} Width="100%" Height="100%"></DynamicImage>
            </div>
          </div>
        </section>
        <section className="WannaKnowMore">
          <SectionHeader data={db[lang].MainPage.ProjectInfo.Title}></SectionHeader>
          <div className="ProjectInfo">
            {db[lang].MainPage.ProjectInfo.Facts.map((fact, index) => (
              <div className="ProjectFact" key={index}>
                <div className="StarredHeader">
                  <StarRoundedIcon style={{color: "#2A26E4", textShadow: "0px 0px 7px #2A26E4", fontSize: "35px" }}></StarRoundedIcon>
                  <ParagraphHeader data={fact.Title}></ParagraphHeader>                  
                </div>
                <CommonText data={fact.Info[0]}></CommonText>
                <IndentHeader data={fact.Subtitle}></IndentHeader>
                <CommonText data={fact.Info[1]}></CommonText>
              </div>
            ))}
          </div>
        </section>
        <section className="Developers">
          
        </section>
      </div>
    </ErrorBoundary>
  );
}

export default MainPage;
