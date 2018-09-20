import React from 'react';
import styled from 'styled-components';
import media from './media';

const CoffeeTypeStyle = styled.div`
  text-align:center;
  background:url(${require('./img/menu-bg.jpg')});
  background-size:100%;
  margin-top:10%;
  ${media.tablet`margin-top:300px`};
  p {
    color:rgb(150,150,150);
    font-size:.9em;
  };
`;
const Type = styled.div`
  display:flex;
  justify-content:space-between;
  flex-wrap:wrap;
  ${media.tablet`flex-direction:column;`};
  div{
    display:inline-block;
    width:26%;
    box-shadow:1px 3px 30px rgb(255,145,0,.7);
    margin-bottom:5%;
    padding:0 2%;
    border-radius:10px;
    ${media.tablet`
    width:90%;
    margin:5% auto
    `};
  }
  
`;

const TypeOfCoffee = [{ kind: 'Cappuccino', price: '49', introduce: 'Usage of the Internet is becoming more common due to rapid advance.' },
  { kind: 'Americano', price: '49', introduce: 'Usage of the Internet is becoming more common due to rapid advance.' },
  { kind: 'Espresso', price: '49', introduce: 'Usage of the Internet is becoming more common due to rapid advance.' },
  { kind: 'Macchiato', price: '49', introduce: 'Usage of the Internet is becoming more common due to rapid advance.' },
  { kind: 'Mocha', price: '49', introduce: 'Usage of the Internet is becoming more common due to rapid advance.' },
  { kind: 'Coffee Latte', price: '49', introduce: 'Usage of the Internet is becoming more common due to rapid advance.' },
  { kind: 'Piccolo Latte', price: '49', introduce: 'Usage of the Internet is becoming more common due to rapid advance.' },
  { kind: 'Ristretto', price: '49', introduce: 'Usage of the Internet is becoming more common due to rapid advance.' },
  { kind: 'Affogato', price: '49', introduce: 'Usage of the Internet is becoming more common due to rapid advance.' }
];

const CoffeeType = (props) => {
  return (
    <CoffeeTypeStyle>
      <h1 >What kind of Coffee we serve for you</h1>
      <p>Who are in extremely love with eco friendly system.</p>
      <Type>
        {TypeOfCoffee.map((i, index) => (
          <div>
            <p style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.2em' }}>
              <span style={{ color: 'black', fontWeight: 'bold' }}>{i.kind}</span>
              <span style={{ color: 'rgb(255,145,0)' }}>${i.price}</span>
            </p>
            <p style={{ textAlign: 'left' }}>{i.introduce}</p>
          </div>
        ))}
      </Type>
    </CoffeeTypeStyle>
  );
};

export default CoffeeType;