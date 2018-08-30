import React, { Component } from "react";
import { Link } from "react-router-dom";
import Img from "./img";

const SlideImg = (props) => {
  return (
    <React.Fragment>
      {props.imgs.map((i, index) => (
        <div style={{ display: 'inline-block' }} key={index}>
        <Img imgs={i.bigImg} text={i.text} imgcss='bigimg'/>
          {i.smallImg.map((i, index) => (
            <Img imgs={i.smallImg} text={i.text} imgcss='smallimg' key={index}/>
          ))}
        </div>
      ))}
      </React.Fragment>
  )
}

export default SlideImg;