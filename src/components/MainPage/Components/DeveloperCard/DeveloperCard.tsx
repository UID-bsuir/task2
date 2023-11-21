import React from "react";
import "./DeveloperCard.css";
import { IDeveloperCard } from "./DeveloperCardValidator.ts";
import DynamicImage from "../../../Common/DynamicImage/DynamicImage.tsx";

function DeveloperCard(props: IDeveloperCard) {
  return (
    <>
    <div className="ColorWrapper">
      <DynamicImage ></DynamicImage>
    </div>
    </>
  );
}
