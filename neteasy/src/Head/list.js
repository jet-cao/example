import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Downlist = (props) => {
  return (
    <div className={props.headCss}>
      {props.list.map((i, index) => (
        <div >
          <span>
            <Link to='/'>{i.text}</Link>
          </span>
          {i.sublist && <ul>
            {i.sublist.map((i, index) => (
              <li key={index}><Link to='/'>{i.text}</Link></li>
            ))}
          </ul>}
        </div>
      ))}
    </div>
  )
}

export default Downlist;