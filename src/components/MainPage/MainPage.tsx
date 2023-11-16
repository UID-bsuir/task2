import React from "react";
import "./MainPage.css";
import Header from "../Layout/Header/Header.tsx";

import data from "../../assets/data/database.json";

function MainPage() {
  return (
    <>
      <Header data={data}></Header>
    </>
  );
}

export default MainPage;
