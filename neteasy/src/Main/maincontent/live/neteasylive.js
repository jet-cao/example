import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const NeteasyLive = (props) => {
  const divStyle = { width: '100%', position: 'relative' };
  const spanStyle = { position: 'absolute', top: '5px', left: '5px', borderRadius: '10px', color: 'white', backgroundColor: 'tomato', fontSize: '0.7em', padding: '2px 5px' };
  const pStyle = { position: 'absolute', left: '0', bottom: '-12px', padding: '5px 10px', color: 'white', width: '380px', background: 'linear-gradient(rgba(0,0,0,0),rgba(0,0,0,1))', textAlign: 'left' };
  return (
    <Link to=''>
      <div style={divStyle}>
        <img src={require(`${props.src}`)} style={{ width: '100%',height:'200px' }} />
        <span style={spanStyle}>正在直播</span>
        <p style={pStyle}>{props.text}</p>
      </div>
    </Link>
  )
}

export default NeteasyLive;