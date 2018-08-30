import React,{Component} from 'react';
import { Link } from 'react-router-dom';

const AllProduct=(props)=>{
  const divStyle={fontSize:'.9em',borderBottom:'solid 1px #ccc',marginBottom:'5px',padding:'10px'};
  const allProductDiv={textAlign:'left',position:'absolute',top:'50px',backgroundColor:'white',overflow:'hidden',transition:'height .5s'}
  return(
    <div style={{...allProductDiv,height:props.show?'420px':'1px'}}>
      <div style={divStyle}>
        {props.mail.map((i,index)=>(
          <Link to='' key={index} style={{marginRight:'5px'}}><span>{i}</span></Link>
        ))}
      </div>
      {props.list.map((i,index)=>(
        <div key={index} style={divStyle}>
          {i.product.map((j,index)=>(
            <Link to='' key={index} style={{margin:'0px 5px 0px 0',fontWeight:'bold'}}><span>{j}</span></Link>
          ))}
          <div>
            {i.type.map((j,index)=>(
              <Link to='' key={index} style={{fontSize:'.9em',margin:'5px 5px 5px 0',display:'inline-block'}}><span>{j}</span></Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default AllProduct;