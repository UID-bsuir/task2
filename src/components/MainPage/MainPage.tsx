import React from "react";
import "./MainPage.css";
import Header from "../Layout/Header/Header.tsx";
import db from "../../assets/data/database.json";
import {ErrorBoundary } from "../500Page/500Page.tsx";
import { getArtistIndexOrSet, getLangOrSetDefault } from "../../Utils/Cookies.ts";
import CommonText from "../Common/Text/CommonText/CommonText.tsx";
import SectionHeader from "../Common/Text/SectionHeader/SectionHeader.tsx";
import ParagraphHeader from "../Common/Text/ParagraphHeader/ParagraphHeader.tsx";
import IndentHeader from "../Common/Text/IndentHeader/IndentHeader.tsx";
import CommonButton from "../Common/CommonButton/CommonButton.tsx";
import ArtistShortInfo from "./Components/ArtistShortInfo/ArtistShortInfo.tsx";
import QuickFacts from "./Components/QuickFacts/QuickFacts.tsx";
import DynamicImage from "../Common/DynamicImage/DynamicImage.tsx";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import DeveloperCard from "./Components/DeveloperCard/DeveloperCard.tsx";
import Footer from "../Layout/Footer/Footer.tsx";

function MainPage() {

  const lang = getLangOrSetDefault().toLowerCase();
  const a = getArtistIndexOrSet(db[lang].Artists.length);
  
  return (
    <ErrorBoundary>
      <div className="Hero-Wrapper">
        <section className="Intro" id="intro">
          <Header Data={db[lang].Header}></Header>

          <div className="LeftColumn">
            <h1>{db[lang].MainPage.Header.Title}</h1>
            <div className="TextAndButton">
              <CommonText Data={db[lang].MainPage.Header.SubInfo} Color="ffffff"></CommonText>
              <CommonButton Text={db[lang].MainPage.Header.Button} Type="button" Url="/search" style={{border: "#ffffff 2px solid", color: "#ffffff"}}></CommonButton>
            </div>
          </div>
        </section>

        <section className="ArtistOfTheDay" id="artist">
          <SectionHeader Data={db[lang].MainPage.ArtistOfTheDay.Title}></SectionHeader>
          <div className="ArtistInfo">
            <ArtistShortInfo data={{Name: db[lang].Artists[a].Name, ShortInfo: db[lang].Artists[a].ShortInfo, Url: db[lang].Artists[a].ID}}></ArtistShortInfo>
            <QuickFacts Data={{QuickFacts: db[lang].Artists[a].QuickFacts, SubTitle: db[lang].MainPage.ArtistOfTheDay.SubTitle}}></QuickFacts>
            <div className="ImgWrapper">
              <DynamicImage Src={db[lang].Artists[a].Gallery[0]} Alt={db[lang].Artists[a].Name} Width="100%" Height="100%"></DynamicImage>
            </div>
          </div>
        </section>

        <section className="WannaKnowMore" id="about">
          <SectionHeader Data={db[lang].MainPage.ProjectInfo.Title}></SectionHeader>
          <div className="ProjectInfo">
            {db[lang].MainPage.ProjectInfo.Facts.map((fact, index) => (
              <div className="ProjectFact" key={index}>
                <div className="StarredHeader">
                  <StarRoundedIcon style={{color: "#2A26E4", textShadow: "0px 0px 7px #2A26E4", fontSize: "35px" }}></StarRoundedIcon>
                  <ParagraphHeader Data={fact.Title}></ParagraphHeader>                  
                </div>
                <CommonText Data={fact.Info[0]}></CommonText>
                <IndentHeader Data={fact.Subtitle}></IndentHeader>
                <CommonText Data={fact.Info[1]}></CommonText>
              </div>
            ))}
          </div>
        </section>

        <section className="Developers" id="devs">
          <SectionHeader Data={db[lang].MainPage.Developers.Title}></SectionHeader>
          <div className="DevsWrapper">
            {db[lang].MainPage.Developers.Devs.map((dev, index) => (
              <DeveloperCard Image={{Src: dev.ImgSrc, Width: "100%", Height: "100%", Alt: dev.Nickname}} Nickname={dev.Nickname} Facts={dev.Facts} GHLink={dev.GHLink} key={index}></DeveloperCard>
            ))}
          </div>
          <div className="Note">
            <ParagraphHeader Data={db[lang].MainPage.Developers.Note.Title} style={{marginLeft: "26px"}}></ParagraphHeader>
            <CommonText Data={db[lang].MainPage.Developers.Note.Info}></CommonText>
          </div>
        </section>
        
        <Footer data={db[lang].Footer}></Footer>
      </div>
    </ErrorBoundary>
  );
}

export default MainPage;
