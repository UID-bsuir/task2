import React, { useState } from "react";
import "./SearchInput.css";
import { ISearchInput } from "./SearchInput";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import InputAdornment from "@mui/material/InputAdornment";

function SearchInput({onSearch}: ISearchInput) {
  const [inputValue, setInputValue] = useState("");
 
  return (
    <div className="Root">
      <InputBase
        placeholder="I am looking for..."
        className="Input"
        style={{
          color: "#68759E",
          padding: "22px 0 22px 26px",
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "25px",
          fontWeight: "700"
        }}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon className="Icon" style={{fontSize: "40px"}}/>
          </InputAdornment>
        }
        onChange={(e) => {
          setInputValue(e.target.value); 
          if (e.target.value.trim() !== "") {
            onSearch(e.target.value);
          }
        }}
        value={inputValue}
      />
    </div>
  );
}

export default SearchInput;
