import React, {Component} from 'react';

function Sublist(props){
  return(
    <ul style={props.index==5?props.position:{}}>
        {props.list.map((i,index)=>(
          <li>
            {i.map((i,index)=>(
              <a href={i.url}>{i.text}</a>
            ))}
          </li>
        ))}
      </ul>
  )
}
export default Sublist;