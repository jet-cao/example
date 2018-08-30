import React,{Component} from 'react';

function Sublist(props){
  return(
    <div className={props.one}>
      <a href={props.url}><b>{props.text}</b></a><br/>
      {props.sublist.map((i, index) => (
          <a href={i.url} key={index}>{i.text}</a>
      ))}
      <ul style={props.index==5?props.position:{}}>
        {props.list.map((i,index)=>(
          <li>
            {i.map((i,index)=>(
              <a href={i.url}>{i.text}</a>
            ))}
          </li>
        ))}
      </ul>
    </div>
  )
};
export default Sublist;