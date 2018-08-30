import React ,{Component} from 'react';

function List(props){
  return(
    <div className={props.cssDiv} style={props.bottom}>
      <span style={props.position}>{props.content}</span>
      {props.list.map((i,index)=>(
        <a href={i.url}>{i.text}</a>
      ))}
      <span onClick={props.onclick} data-id={props.content}>+多选</span>  
    </div>
  )
}

export default List;