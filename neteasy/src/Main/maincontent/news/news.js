import React ,{Component} from 'react';
import { Link } from 'react-router-dom';

const News=(props)=>{
  const liStyle={marginBottom:'10px'}
  return(
    <ul style={{color:'#ccc',fontSize:'1.2em',padding:0,margin:0}}>
      {props.news.map((i,index)=>(
        <li key={index} style={{marginBottom:'15px',listStylePosition:'inside',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap',fontWeight:index==0 && 'bold'}}><Link to=''>{i.text}</Link></li>
      ))}
    </ul>
  )
}
    

export default News;