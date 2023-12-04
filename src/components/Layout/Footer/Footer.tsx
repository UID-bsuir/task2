import React from "react";
import logo from "../../../assets/images/logo.png";
import "./Footer.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import CommonText from "../../Common/Text/CommonText/CommonText.tsx";
import { useDatabase } from "../../../DataContext.tsx";

function Footer() {
  const db = useDatabase();

  return (
    <footer className="Footer">
      <img src={logo} alt={db.Footer.Logo.Alt} />
      <CommonText
        Data={db.Footer.Text}
        style={{ color: "#ffffff", textShadow: "0px 0px 7px #FFF" }}
      ></CommonText>
      <a href="#intro">
        <ArrowUpwardIcon
          id="goUpwards"
          style={{ color: "#FFFFFF" }}
        ></ArrowUpwardIcon>
      </a>
    </footer>
  );
}

export default Footer;
