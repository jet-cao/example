import React,{Component} from 'react';
import AdvList from './advlist';

const Recommend=(props)=>{
  return(
    <div className={props.adv}>
      <div className='aside'onMouseEnter={props.onEducation}>教育</div>
      {props.show?<AdvList list={props.education}/>:<AdvList list={props.newmessage}/>                         }     
      <div className='aside' onMouseEnter={props.onNewMessage}>最新</div>
    </div>
  )
}

export default Recommend;