import React from "react";
import { IFooter } from "./FooterValidation.ts";
import logo from "../../../assets/images/logo.png";
import "./Footer.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import CommonText from "../../Common/Text/CommonText/CommonText.tsx";

function Footer(props: IFooter) {
  console.log(props.data.Text);
  return (
    <footer className="Footer">
      <img src={logo} alt={props.data.Logo.Alt}/>
      <CommonText data={props.data.Text} style={{color: "#ffffff", textShadow: "0px 0px 7px #FFF"}}></CommonText>
      <a href="#intro">
        <ArrowUpwardIcon style={{color: "#FFFFFF"}}></ArrowUpwardIcon>
      </a>
    </footer>
  );
}

export default Footer;
