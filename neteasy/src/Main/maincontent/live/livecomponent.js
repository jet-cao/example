import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const LiveComponent = (props) => {
  const spanStyle = { marginRight: '10px', borderRight: 'solid 1px #ccc', paddingRight: '10px', display: 'inline-block', width: '70px' };
  return (
    <div style={{ textAlign: 'left' }}>
      {props.livecontent.map((i, index) => (
        <Link to=''>
          <p key={index}>
            <span style={{ ...spanStyle, color: i.kind == '正在直播' ? 'tomato' : 'grey' }}>{i.kind}</span>
            <span>{i.livelist}</span>
          </p>
        </Link>
      ))}

    </div>
  )
}

export default LiveComponent;