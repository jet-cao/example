import React from 'react';
import styled from 'styled-components';
import CoffeePruduction from './coffeepruduction';
import CoffeeType from './coffeetype';
import Introduce from './introduce';
import Serve from './serve';
import Share from './share';
import media from './media';

const MainStyle = styled.div`
  width:70%;
  margin:auto;
  margin-top:20%;
  ${media.tablet`width:100%;`};
`;

class Main extends React.Component {
  render() {
    return (
      <MainStyle>
        <CoffeePruduction/>
        <CoffeeType/>
        <Introduce/>
        <Serve/>
        <Share/>
      </MainStyle>
    );
  }
}

export default Main;