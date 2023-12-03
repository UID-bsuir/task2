import React from "react";
import { IHeader } from "./HeaderValidator.ts";
import logo from "../../../assets/images/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageButton from "../../Common/LanguageButton/LanguageButton.tsx";
import "./Header.css";
import { useDatabase } from "../../../DataContext.tsx";

function Header(props: IHeader) {
  const db = useDatabase();

  return (
    <>
      <div className="Top-H" style={props.style}>
        <img src={logo} alt={"some logo"} className="Logo-H" />
        <div className="Menu-H">
          {db.Header.Menu.map((item, index) => (
            <a key={index} className="Item-Top-H" href={item.Url}>
              {item.Title}
            </a>
          ))}
        </div>

        <div className="DropdownMenu" style={{"float":"left"}}>
          <div className="MenuIcon">
            <MenuIcon />
          </div>
          <div className="PhoneMenu-H">
            {db.Header.Menu.map((item, index) => (
              <a key={index} className="PhoneItem-Top-H" href={item.Url}>
                {item.Title}
              </a>
            ))}
            <LanguageButton IsMenuHidden={true}></LanguageButton>
          </div>
        </div>

        <LanguageButton IsMenuHidden={false}></LanguageButton>
      </div>
    </>
  );
}

export default Header;
