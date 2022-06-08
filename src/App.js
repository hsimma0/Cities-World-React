
import React, { useState } from "react";
import "./styles.css";
import imagesArr from "./imageData.js";

export default function App() {
  const [bigImage, setBigImage] = useState(imagesArr[0].img);

  
  const handleClick = (imgUrl) => {
    setBigImage(imgUrl);
  };

  
  const images = imagesArr.map((image, index) => {
    return (
      <img
        className="thumb"
        id={image.city}
        src={image.img}
        alt={image.city}
        key={index}
        onClick={() => handleClick(image.img)}
      />
    );
  });

  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails">{images}</div>
     
        <img src={bigImage} id="bigimage" alt="bigImage"/>
        
      </div>
    </div>
  );
}
