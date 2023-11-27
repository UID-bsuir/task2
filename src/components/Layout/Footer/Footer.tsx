import React from "react";
import { IFooter } from "./FooterValidator.ts";
import logo from "../../../assets/images/logo.png";
import "./Footer.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import CommonText from "../../Common/Text/CommonText/CommonText.tsx";
import { scrollToAnchor } from "../../../Utils/Scroll.ts";

function Footer(props: IFooter) {
  return (
    <footer className="Footer">
      <img src={logo} alt={props.data.Logo.Alt}/>
      <CommonText data={props.data.Text} style={{color: "#ffffff", textShadow: "0px 0px 7px #FFF"}}></CommonText>
      <a href="#intro" onClick={() => {scrollToAnchor("goUpwards"); }}>
        <ArrowUpwardIcon id="goUpwards" style={{color: "#FFFFFF"}} ></ArrowUpwardIcon>
      </a>
    </footer>
  );
}

export default Footer;
