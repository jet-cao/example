import React from 'react';
import Header from './header';
import Nav from './nav';
import styled from 'styled-components';
import Main from './main';
import Footer from './footer';

const Background=styled.div`
  background: url(${require('./img/header-bg.jpg')}) no-repeat;
  background-size:100%;
`;

class Coffee extends React.Component {
  render() {
    return (
      <Background>
        <Nav/>
        <Header/>
        <Main/>
        <Footer/>
      </Background>
    );
  }
}

export default Coffee;