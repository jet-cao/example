import React,{Component} from 'react';

function ListDown(props){
  return(
    <li>
    <a href={props.url} style={{color:props.color}}>{props.text}</a>
    <ul>
      {props.sublist.map((i, index) => (
        <li>
          <a href={i.url}>{i.text}</a>
        </li>
      ))}
    </ul>
  </li>
  )
}

export default ListDown;