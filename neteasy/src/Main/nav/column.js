import React,{Component} from 'react';
import { Link } from 'react-router-dom';

const Column=(props)=>{
  return(
    <div className={props.navcss}>
        {props.list.map((i,index)=>(
          <div style={index>2?{flex:'3'}:{flex:'4'}}>
            {i.map((j,index)=>(
              <ul>
                {j.map((k,index)=>(
                  <li><Link to=''>{k.text}</Link></li>
                ))}
              </ul>
            ))}
          </div>
        ))}
        </div>
  )
}

export default Column;