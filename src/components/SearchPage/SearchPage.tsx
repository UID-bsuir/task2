import React, { useState } from "react";
import "./SearchPage.css";
import SearchInput from "./Components/SearchInput/SearchInput.tsx";
import SearchCard from "./Components/SearchCard/SearchCard.tsx";
import { useDatabase } from "../../DataContext.tsx";
import { ISearhCardData } from "./Components/SearchCard/SearchCardValidator.ts";

function SearchPage() {
  const [searchResult, setSearchResult] = useState<ISearhCardData[] | null>(
    null
  );
  const db = useDatabase();

  const findArtists = (searchValue: string): void => {
    const artists = db.Artists.filter((a) =>
      a.Name.toLowerCase().includes(searchValue.toLowerCase())
    ).map((a) => {
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
          },
        },
      };
    });
    setSearchResult(artists);
  };

  return (
    <>
      <SearchInput onSearch={findArtists}></SearchInput>
      <SearchCard data={searchResult}></SearchCard>
    </>
  );
}

export default SearchPage;
