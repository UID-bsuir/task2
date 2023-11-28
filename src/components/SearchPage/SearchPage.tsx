import React, { useState } from "react";
import "./SearchPage.css";
import Header from "../Layout/Header/Header.tsx";
import { getLangOrSetDefault } from "../../Utils/Cookies.ts";
import db from "../../assets/data/database.json";
import SearchInput from "./Components/SearchInput/SearchInput.tsx";
import SearchCard from "./Components/SearchCard/SearchCard.tsx";

function SearchPage() {

  const [searchResult, setSearchResult] = useState(null);

  const lang = getLangOrSetDefault().toLowerCase();
  

  const findArtists = (searchValue: string): void => {
    setSearchResult(db[lang].Artists
      .filter((a) => a.Name.toLowerCase().includes(searchValue.toLowerCase()))
      .map((a) => {
        return {
          ID: a.ID,
          Data: {
            Name: a.Name,
            Facts: a.QuickFacts,
            Image: {
              Src: a.Gallery[0],
              Alt: a.Name,
              Width: "100%",
              Height: "100%",
            }
          }
        };
      })
    );
  };

  return (
    <div className="HeroWrapper">
      <div className="HeaderPad">
        <Header Data={db[lang].Header}></Header>
      </div>  
      <SearchInput onSearch={findArtists}></SearchInput>
      <SearchCard data={searchResult}></SearchCard>
    </div>
  );
}

export default SearchPage;
