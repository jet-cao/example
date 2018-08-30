import React,{Component} from 'react';

const Adbigimg=(props)=>{
  return(
   <React.Fragment>
      {props.adimg.map((i,index)=>(
        <div className={props.imgdiv} key={index} onMouseEnter={props.paused} onMouseLeave={props.showed}>
        <img src={require(`${i.src}`)} key={index} />
        <span>{i.text}</span>
        </div>
      ))}
      </React.Fragment>
  )
}

export default Adbigimg;