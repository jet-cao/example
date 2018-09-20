import React from 'react';
import styled from 'styled-components';
import media from './media';

const Introduction = styled.div`
  text-align:center;
  ${media.tablet`margin-top:100px`};
  p {
    color:rgb(150,150,150);
    font-size:.9em;
  };
`;
const Img = styled.div`
  display:flex;
  justify-content:space-between;
  ${media.tablet`
    flex-wrap:wrap;
    flex-direction:column;
    display:block;
  `};
`;
const Left = styled.div`
  width:33%;
  margin-Right:2%;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  ${media.tablet`
    display:block;
    width:100%;
    margin-right:0;
    img {
      width:100%;
      margin-bottom:10px;
    }
  `};
`;
const Right = styled.div`
  width:66%;
  display:flex;
  justify-content:space-between;
  flex-wrap:wrap; 
  img:nth-child(1) {
    width:100%;
  };
  img:nth-child(2) {
    width:48%;
  };img:nth-child(3) {
    width:48%;
  };
  ${media.tablet`
    display:block;
    width:100%;
    img{
      width:100%;
      margin-bottom:10px;
    };
    img:nth-child(2) {
      width:100%;
    };img:nth-child(3) {
      width:100%;
    };
  `};
`;

const Introduce = (props) => {
  return (
    <Introduction>
      <h1>What kind of Coffee we serve for you</h1>
      <p>Who are in extremely love with eco friendly system.</p>
      <Img>
        <Left>
          <img src={require('./img/g1.jpg')} />
          <img src={require('./img/g2.jpg')} />
        </Left>
        <Right>
          <img src={require('./img/g3.jpg')} style={{ marginBottom: '3%' }} />
          <img src={require('./img/g4.jpg')} />
          <img src={require('./img/g5.jpg')} />
        </Right>
      </Img>
    </Introduction>
  );
};

export default Introduce;