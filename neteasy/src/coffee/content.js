import React from 'react';
import styled from 'styled-components';

const Introduction=styled.div`
  text-align:center;
  background:${props=>props.background ||'none'};
  padding-top:5%;
  margin-top:10%
  p {
    font-size:.9em;
  };
`;

const Content=(props)=>{
  return(
    <Introduction background={props.background}>
      <h1>{props.title}</h1>
      <p style={{color:'rgb(150,150,150)'}}>{props.instroduce}</p>
      {props.children}
    </Introduction>    
  );
};

export default Content;