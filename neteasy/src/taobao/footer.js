import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkStyle=styled(Link)`
background-color:red;
color:white;
padding:2px 10px;
margin-right:10px;
:hover {
  color:blue;
}
`;

const TaobaoFooter=(props)=>{
  return(
    <div style={{marginTop:'20px'}}>
      <LinkStyle to='/'>转到首页</LinkStyle>
      <LinkStyle to='/coffee'>转到响应式demo</LinkStyle>
    </div>
  );
};

export default TaobaoFooter;