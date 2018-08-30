import React,{Component} from 'react'
import { Link } from 'react-router-dom';

const AdvList=(props)=>{
  return(
    <div className='news'>
      {props.list.map((i,index)=>(
        <Link to=''>{i}</Link>
      ))}
    </div>
  )
}

export default AdvList;