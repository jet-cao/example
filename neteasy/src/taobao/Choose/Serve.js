import React,{Component} from 'react';

function Serve(props){
  return(
    <div>
    {props.list.map((i, index) => (
      <label>
        {props.content}<input type='checkbox' value={i.text} name={props.name}/>{i.text}
      </label>
    ))}
    </div>
  )
}

export default Serve;