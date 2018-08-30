import React, { Component } from 'react';

function List(props){
  return(
    <div className={props.content} style={props.position}>
      {props.list.map((i,index)=>(
        <div className={props.stepone}>
          <a href={i.url}>{i.text}</a>
        <div className={props.steptwo} style={i.sublist && props.border}>
          <ul>
            {i.sublist && i.sublist.map((i,index)=>(
              <li>
                <a href={i.url}>{i.text}</a>
              </li>
            ))}
          </ul>
        </div>
        </div>
      ))}
    </div>
  );
}

export default List;