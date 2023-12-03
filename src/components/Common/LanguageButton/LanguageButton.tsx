import React, { useState } from "react";
import "./LanguageButton.css";
import { getLangOrSetDefault, setLang } from "../../../Utils/Cookies.ts";

function LanguageButton({IsMenuHidden}) {
  const lang = getLangOrSetDefault();
  const text = lang === "En" ? "En 🇬🇧" : "Ru 🌎";

  const [LangLabel, setLangLabel] = useState(text);

  const changeButton = () => {
    setLangLabel(text);
    setLang(lang === "En" ? "Ru" : "En");
    location.reload();
  };
  return(
    <button className={`LanguageButton LanguageButton${IsMenuHidden ? "HELL": "Normal"}`} onClick={() => changeButton()}>{LangLabel}</button>
  );
} 

export default LanguageButton;
