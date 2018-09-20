import React from 'react';
import Content from './content';
import styled from 'styled-components';

const title = 'What kind of Coffee we serve for you';
const instroduce = 'Who are in extremely love with eco friendly system.';
const ContentStyle = styled.div`
  display:flex;
  justify-content:space-between;
  margin-top:5%;
  div {
    display:inline-block;
    width:45%;
    text-align:left;
    img {
      width:100%
    };
    span{
      margin-left:5%;
      display:inline-block;
      border:solid 1px #ccc;
      border-radius:15px;
      padding:1% 3%;
      transition: all .3s;
      cursor:pointer;
      :hover {
        color:white;
        background-color:#FFA500;
      }
    }
  }
`;
const content=[{img:'./img/b1.jpg',title:'Portable latest Fashion for young women',introduce:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.'},
  {img:'./img/b2.jpg',title:'Portable latest Fashion for young women',introduce:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.'},
];
const date=new Date();

const Share = () => (
  <Content title={title} instroduce={instroduce}>
    <ContentStyle>
      {content.map((i,index)=>(
        <div key={{index}}>
          <img src={require(`${i.img}`)} style={{width:'100%'}}/>
          <span>Travel</span>
          <span>Life Style</span>
          <p style={{fontWeight:'bold',fontSize:'1.2em'}}>{i.title}</p>
          <p style={{color:'rgb(150,150,150'}}>{i.introduce}</p>
        </div>
      ))}
    </ContentStyle>
  </Content>
);

export default Share;