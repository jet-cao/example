import React from 'react';

function Trainsition(props){
  return(
    <div className={props.cssOne} >
      <a href={props.url}>{props.text}</a>
      <div className={props.cssTwo}></div>
    </div>
  );
}

export default Trainsition;