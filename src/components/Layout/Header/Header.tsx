import React from "react";
import { IHeader } from "./HeaderValidation";
import logo from "../../../assets/images/logo.png";
import LanguageButton from "../../Common/LanguageButton/LanguageButton.tsx";
import "./Header.css";
import { useNavigate } from "react-router-dom";

function Header(props: IHeader) {

  const navigate = useNavigate();
  const redirect = (url: string): void => {
    navigate(url);
  };


  return (
    <>
      <div className="Top-H">
        <img src={logo} alt={props.data.Logo.Alt} className="Logo-H"/>
        <div className="Menu-H">
          {props.data.Menu.map((item, index) => <button key={index} className="Item-Top-H" onClick={() => redirect(item.Url)}>{item.Title}</button>)}
        </div>
        <LanguageButton></LanguageButton>
      </div>
    </>
  );
}

export default Header;
