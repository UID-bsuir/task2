import React from "react";
import "./MainPage.css";
import Header from "../Layout/Header/Header.tsx";
import data from "../../assets/data/database.json";
import {ErrorBoundary } from "../500Page/500Page.tsx";
import { getLangOrSetDefault } from "../../Utils/Cookies.ts";
import "./MainPage.css";
import CommonText from "../Common/Text/CommonText/CommonText.tsx";
import CommonButton from "../Common/CommonButton/CommonButton.tsx";



function MainPage() {

  const lang = getLangOrSetDefault().toLowerCase();
  console.log(lang);
  return (
    <div className="Hero-Wrapper">
      <ErrorBoundary>
        <section className="Intro">
          <Header data={data[lang].Header}></Header>
          <div className="LeftColumn">
            <h1>{data[lang].MainPage.Header.Title}</h1>
            <div className="TextAndButton">
              <CommonText data={data[lang].MainPage.Header.SubInfo} color="ffffff"></CommonText>
              <CommonButton text={data[lang].MainPage.Header.Button} type="button" url="/search" style={{border: "#ffffff 2px solid", color: "#ffffff"}}></CommonButton>
            </div>
          </div>
        </section>

      </ErrorBoundary>
    </div>
  );
}

export default MainPage;
