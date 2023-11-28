import React from "react";
import { IHeader } from "./HeaderValidator.ts";
import logo from "../../../assets/images/logo.png";
import LanguageButton from "../../Common/LanguageButton/LanguageButton.tsx";
import "./Header.css";

function Header(props: IHeader) {
  
  return (
    <>
      <div className="Top-H" style={props.style}>
        <img src={logo} alt={props.Data.Logo.Alt} className="Logo-H"/>
        <div className="Menu-H">
          {props.Data.Menu.map((item, index) => <a key={index} className="Item-Top-H" href={item.Url}>{item.Title}</a>)}
        </div>
        <LanguageButton></LanguageButton>
      </div>
    </>
  );
}

export default Header;
