import React,{Component} from 'react';
import { Link } from 'react-router-dom';

const Header=(props)=>{
  return(
    <header className={props.headCss}>
      <Link to='./'><img src={require('./neteasy1.jpg')} alt='网易Logo' className='logo'/></Link>
      <Link to='./'><img src={require('./advertisement.jpg')} alt='广告' className='advertisement'/></Link>
    </header>
  )
}

export default Header;