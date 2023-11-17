import React from "react";
import "./MainPage.css";
import Header from "../Layout/Header/Header.tsx";
import data from "../../assets/data/database.json";
import {ErrorBoundary } from "../500Page/500Page.tsx";
import { getLangOrSetDefault } from "../../Utils/Cookies.ts";
import "./MainPage.css";

function MainPage() {

  const lang = getLangOrSetDefault();
  console.log(lang);
  return (
    <div className="Hero-Wrapper">
      <ErrorBoundary>
        <section className="Intro">
          <Header data={data[lang.toLowerCase()].Header}></Header>
          
        </section>

      </ErrorBoundary>
    </div>
  );
}

export default MainPage;
