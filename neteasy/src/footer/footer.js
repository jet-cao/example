import React,{Component} from 'react';
import { Link } from 'react-router-dom';

class TurnToTaobao extends React.Component{
  render() {
    return (
      <div  style={{backgroundColor:'red',fontWeight:'bold'}}>
        <Link to='/taobao' style={{color:'white',margin:'10px'}}>点击转到淘宝demo</Link>
        <Link to='/coffee' style={{color:'white',margin:'10px'}}>点击转到响应式demo</Link>
      </div>
    );
  }
}

export default TurnToTaobao;