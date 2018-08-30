import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Img = (props) => {
  return (
    <Link to=''>
      <figure className={props.imgcss}>
        <img src={require(`${props.imgs}`)} />
        <figcaption>{props.text}</figcaption>
      </figure>
    </Link>
  )
}

export default Img;