import React,{Component} from 'react';
import { Link } from 'react-router-dom';

const MyProduct=(props)=>{
  return(
    <div style={{textAlign:'left'}}>
      {props.myproduct.map((i,index)=>(
        <div key={i.index} style={{padding:'10px',borderBottom:'solid 1px #ccc'}}>
          <Link to=''><img src={require(`${i.src}`)} alt={i.text} style={{width:'40px',height:'40px',borderRadius:'10px',float:'left',marginRight:'10px'}}/></Link>
          <Link to=''><span style={{fontSize:'.8em'}}>{i.text}</span><br/></Link>
          {i.sublist.map((j,index)=>(
            <Link  key={j.index} to=''><span style={{fontSize:'.8em',marginRight:'5px'}}>{j}</span></Link>
          ))}
        </div>
      ))}
      <div style={{padding:'10px',borderBottom:'solid #ccc 1px',marginBottom:'20px'}}>
        <span>推荐</span>
        <ul style={{listStyle:'none',padding:0,margin:0,marginTop:'5px'}}>
          {props.recommend.map((i,index)=>(
            <li key={i.index} style={{display:'inline-block',marginRight:'10px',fontSize:'.8em'}}><Link to=''>{i}</Link></li>
          ))}
        </ul>
      </div>
      <div style={{padding:'10px'}}>
        {props.myproducticon.map((i,index)=>(
          <figure key={index} style={{display:'inline-block',margin:'9px',padding:0,textAlign:'center'}}>
          <img src={require(`${i.src}`)} alt={i.text} style={{width:'40px',border:'solid #ccc 1px',borderRadius:'5px'}}/>
          <figcaption style={{fontSize:'.8em'}}>{i.text}</figcaption>
        </figure>
        ))}
        
      </div>
    </div>
  )
}

export default MyProduct;