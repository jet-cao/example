import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const LiveImg = (props) => {
  const divStyle = { display: 'inline-block', width: '50%', position: 'relative' };
  const spanStyle = { position: 'absolute', top: '0', right: '0', borderBottomLeftRadius: '10px', color: 'white', backgroundColor: 'tomato', fontSize: '0.6em', padding: '2px 5px' };
  const pStyle = { position: 'absolute', left: '0', bottom: '-12px', padding: '5px 10px', color: 'white', width: '180px', background: 'linear-gradient(rgba(0,0,0,0),rgba(0,0,0,1))', textAlign: 'left' };
  return (
    <Link to=''>
      <div style={divStyle}>
        <img src={require(`${props.src}`)} />
        <span style={spanStyle}>LIVE</span>
        <p style={pStyle}>{props.text}</p>
      </div>
    </Link>
  )
}

export default LiveImg;