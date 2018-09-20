import React from 'react';
import Content from './content';
import styled from 'styled-components';

const title = 'What kind of Coffee we serve for you';
const instroduce = 'Who are in extremely love with eco friendly system.';

const ContentStyle=styled.div`
  display:inline-block;
  width:40%;
  text-align:left;
  padding:5%;
  color:white;
`;

const Serve = () => {
  return (
    <Content title={title} instroduce={instroduce} background='#FFB90F'>
      <ContentStyle>
        <img src={require('./img/r1.png')} />
        <p style={{fontSize:'1.5em'}}>lorem ipusm</p>
        <p>Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.</p>
      </ContentStyle>
      <ContentStyle>
        <img src={require('./img/r2.png')} />
        <p style={{fontSize:'1.5em'}}>lorem ipusm</p>
        <p>Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.</p>
      </ContentStyle>
    </Content>
  );
};

export default Serve;