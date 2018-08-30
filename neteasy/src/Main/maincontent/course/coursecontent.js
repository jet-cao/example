import React, { Component } from 'react';
import Img from './img';
import { Link } from 'react-router-dom';

const CourseContent = (props) => {
  return (
    <div className='coursediv' style={{marginLeft:`${props.show}`,transition:'margin-left 1s'}}>
      {props.courseimg.map((i, index) => (
        <div key={index} className='content' >
          {i.img.map((i, index) => (
            <Img imgs={i.src} text={i.text} imgcss='coursecss' key={index} />
          ))}
          <ul>
            {i.content.map((i, index) => (
              <li key={index}><Link to=''>{i.text}</Link></li>
            ))}
          </ul>
        </div>
      ))}

    </div>
  )
}

export default CourseContent;