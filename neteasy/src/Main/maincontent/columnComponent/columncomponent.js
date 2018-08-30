import React, { Component } from 'react'
import Slide from './slide';
import Course from '../course/course';
import Live from '../live/live';
import ImportentNews from '../news/importentnews';
import Product from '../product/product';
import AdSlideContent from '../adslide/adslidecontent';
import WeatherContainer from '../../redux/container/container';




const Mainnews = (props) => {
  return (
    <div className='mainnews'>
      <div className='left' >
        <div className='leftside'>
          <Slide imgs={props.imgs} />
          <Course />
          <Live />
        </div>
        <div className='rightside'>
          <ImportentNews />
        </div>
      </div>
      <div className='right'>
        <Product/>
        <AdSlideContent/>
        <WeatherContainer/>
      </div>
    </div>
  )
}

export default Mainnews;