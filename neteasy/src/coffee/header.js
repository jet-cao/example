import styled from 'styled-components';
import React from 'react';
import media from './media';

const HeaderContent = styled.div`
  color:white;
  font-weight:blod;
  padding:8% 15%;
  width:40%;  
  span {
    font-size:.9em;
    ${media.tablet`font-size:.5em`};
  };
  p {
    font-size:4em;
    margin:1% 0;
    ${media.tablet`font-size:1em`};
  }
`;
const Buy=styled.span`
  padding:1% 3%;
  border-radius:15px;
  background-color: rgb(255, 255, 255,1);
  color:black;
  cursor:pointer;
  transition: all .3s;
  :hover {
    color:white;
    background-color:rgb(255, 255, 255,0);
    border:solid 1px white;
  }
`;

const Header = (props) => {
  return (
    <header>
      <HeaderContent>
        <span id='head'>NOW YOU CAN FEEL THE ENERGY</span>
        <p>Start your date with a black Coffee</p>
        <Buy>BUY NOW</Buy>
      </HeaderContent>
    </header>
  );
};

export default Header;