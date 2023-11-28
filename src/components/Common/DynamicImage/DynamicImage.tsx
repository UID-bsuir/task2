import React, { useState, useEffect } from "react";
import { IDynamicImage } from "./DynamicImageValidator";


function YourComponent(props: IDynamicImage) {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    const loadImage = async () => {
      try {
        setImageSrc(process.env.PUBLIC_URL+`${props.Src}`);
      } catch (error) {
        console.error("Error loading image:", error);
      }
    };
  
    loadImage();
  }, [props.Src]);
  

  return (
    <div>
      {imageSrc && <img src={imageSrc} alt={props.Alt} style={{width: props.Width, height: props.Height, objectFit: "cover", objectPosition: "center"}}/>}
    </div>
  );
}

export default YourComponent;
