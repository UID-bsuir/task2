import React, { useState } from "react";
import "./LanguageButton.css";
import { getLangOrSetDefault, setLang } from "../../../Utils/Cookies.ts";

function LanguageButton() {
  const lang = getLangOrSetDefault();
  const text = lang === "En" ? "En 🇬🇧" : "Ru 🌎";

  const [LangLabel, setLangLabel] = useState(text);

  const changeButton = () => {
    setLangLabel(text);
    setLang(lang === "En" ? "Ru" : "En");
    location.reload();
  };

  return(
    <button className="LanguageButton" onClick={() => changeButton()}>{LangLabel}</button>
  );
} 

export default LanguageButton;
