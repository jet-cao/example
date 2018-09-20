import React from 'react';
import styled from 'styled-components';
import media from './media';

const Content = styled.div`
  video {
    width:55%;
    border-radius:15px;
    ${media.tablet`
    width:100%;
    `};
  };
  div {
    display:inline-block;
    width:40%;
    float:right;
    :nth-child(1) {
      font-size:.8em;
      color:rgb(255,166,0);
    }
    ${media.tablet`
    width:100%;
    :nth-child(1) {
      font-size:.4em
      };
    :nth-child(2){
      font-size:.8em;
      display:block;
      };
    `}
  } 
`;

const CoffeePruduction = (e) => {
  return (
    <Content>
      <video src={require('./video/coffee.mp4')} controls='controls' />
      <div>
        <p style={{ color: 'rgb(255,166,0)' }}>LIVE COFFEE MAKING PROCESS</p>
        <p style={{ fontWeight: 'bold', margin: 0, display: 'inline-block', width: '80%' }}>We Telecast our Coffee Making Live</p>
        <p style={{ fontSize: '.8em' }}>We are here to listen from you deliver exellence</p>
        <p style={{ color: 'rgb(150,150,150)', lineHeight: '1.5em' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
        <img src={require('./img/signature.png')} />
      </div>
    </Content>
  );
};

export default CoffeePruduction;