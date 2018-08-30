import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Img = (props) => {
  return (
    <Link to=''>
      <figure style={{width:'45%',display:'inline-block',padding:'0',margin:'0',marginBottom:'20px'}}>
        <div style={{overflow:'hidden',width:'180px',height:'115px'}}><img src={require(`${props.imgs}`)} /></div>
        <figcaption style={{width:'190px',fontSize:'0.9em'}}>{props.text}</figcaption>
      </figure>
    </Link>
  )
}

export default Img;