import React,{ Component } from 'react';
import Sublist from './Sublist';

function Market(props){
  return(
    <div className={props.Market}>
      <span>更多市场</span>
      <Sublist list={props.list}/>
    </div>
  )
}

export default Market;