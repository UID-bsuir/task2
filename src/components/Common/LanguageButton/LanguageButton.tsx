import React, { useState } from "react";
import "./LanguageButton.css";
import { getLangOrSetDefault, setLang } from "../../../Utils/Cookies.ts";

function LanguageButton() {
  const [LangLabel, setLangLabel] = useState("En 🇬🇧");

  const changeButton = () => {
    const lang = getLangOrSetDefault();
    const emoji = lang==="En" ? " 🇬🇧" : " 🌎";
    setLangLabel(lang.toUpperCase() + emoji);
    setLang(lang==="En" ? "Ru" : "En");
  };

  return(
    <>
      <button className="LanguageButton" onClick={() => changeButton()}>{LangLabel}</button>
    </>
  );
} 

export default LanguageButton;
