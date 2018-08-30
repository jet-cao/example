import React, { Component } from 'react';
import './slide.css';
import SlideImg from './slideimg';
class Slide extends React.Component {
  constructor(props) {
    super(props);
    this.state = { direction: 400 };
  }
  turnLeft = (e) => {
    this.setState({ direction: -400 });

  }
  turnRight = (e) => {
    this.setState({ direction: 400 });
  }
  slide = (e) => {
    let slide = document.getElementsByClassName('slide')[0].style;
    slide.marginLeft = `${parseInt(slide.marginLeft) + this.state.direction}px`;
    if (parseInt(slide.marginLeft) < -4000 || parseInt(slide.marginLeft) > 0) {
      slide.transition = '';
      slide.marginLeft = '-2000px';
    } else {
      slide.transition = 'margin-left 1s';
    }
  }
  handle = (e) => {
    clearInterval(this.timeId)
  }
  leave = (e) => {
    this.timeId = setInterval(() => this.slide(), 3000);
  }
  componentDidMount() {
    this.timeId = setInterval(() => this.slide(), 3000);
  }
  componentWillUnmount() {
    clearInterval(this.timeId)
  }
  render() {
    return (
      <div className='outsidediv'>
        <div className='slide' style={{ marginLeft: '-2000px', transition: 'margin-left 1s' }} onMouseOver={this.handle} onMouseOut={this.leave}>
          <SlideImg imgs={this.props.imgs} />
          <SlideImg imgs={this.props.imgs} />
          <SlideImg imgs={this.props.imgs} />
        </div>
        <div className='direction' style={{ left: 0 }} onClick={this.turnLeft}>《</div>
        <div className='direction' style={{ right: 0 }} onClick={this.turnRight}>》</div>
      </div>
    )
  }
}

export default Slide 