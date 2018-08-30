import React,{ Component } from 'react';

function SearchBar (props){
  return(
    <div className={props.searchBar}>
       <div className={props.goods}>
       <span >{props.choose}</span>
       <div className={props.shop} onClick={props.onClick}>{props.unchoose}</div>
       </div>
       <input type='text'/>
       <div className={props.accessories}>搜配饰</div>
       <div className={props.all}>搜全站</div>
    </div>
    )
}

export default SearchBar