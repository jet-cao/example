import React from 'react';
import styled from 'styled-components';
import media from './media';
import { Link } from 'react-router-dom';

const FooterStyle = styled.div`
  background: url(${require('./img/footer-bg.jpg')});
  background-size:cover;
  background-repeat:no-reprat;
  padding-top:10%;
  color:white;
  div {
    width:80%;
    margin:auto;
    vertical-align:text-top;
    div {
      padding:5%
    }
  }
  
`;
const LinkStyle = styled(Link)`
  background-color:red;
  color:white;
  padding:2px 10px;
  margin-right:10px;
  :hover {
    color:blue;
  }
`;
const content = [
  { title: 'About Us', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.', width: '30%' },
  { title: 'Newsletter', text: 'Stay update with our latest', width: '25%' },
  { title: 'Follow Us', text: 'Let us be social', width: '15%' }
];

const Footer = () => {
  return (
    <FooterStyle>
      <div>
        {content.map((i, index) => (
          <div style={{ display: 'inline-block', width: i.width }}>
            <h3>{i.title}</h3>
            <p>{i.text}</p>
          </div>
        ))}
      </div>
      <div style={{textAlign:'center'}}>
        <LinkStyle to='/'>转到首页</LinkStyle>
        <LinkStyle to='/taobao'>转到淘宝</LinkStyle>
      </div>
    </FooterStyle>
  );
};

export default Footer;