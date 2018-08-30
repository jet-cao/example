import React, { Component } from 'react';
import './adslide.css';
import Adbigimg from './adbigimg';

const adimg = [{ src: './1.jpg', text: '快速开发平台' }, { src: './2.jpg', text: '可视化数据' }, { src: './3.jpg', text: '网页设计师' }, { src: './4.jpg', text: '小程序开发' }, { src: './5.jpg', text: '电子标签' }, { src: './6.jpg', text: '如何学习编程' }, { src: './7.jpg', text: '编程入门先学什么' }, { src: './8.jpg', text: '锦鲤鱼池过滤系统' }]

class AdSlideContent extends React.Component {
  constructor(props) {
    super(props);
  }
  show=(e)=>{
    let left=document.getElementById('bigimg').style;
    let run=document.getElementsByClassName('run')[0].style;
    let index=e.currentTarget.getAttribute('data-id');
    left.marginLeft=`-${index*300}px`;
    run.animationPlayState='paused';
    clearInterval(this.timerId);    
  }
  showed=(e)=>{
    let run=document.getElementsByClassName('run')[0].style;
    this.timerId=  setInterval(() => this.autorun(), 2000);
    run.animationPlayState='running';
  }
  paused=(e)=>{
    clearInterval(this.timerId); 
    let run=document.getElementsByClassName('run')[0].style;
    run.animationPlayState='paused';
  }
  autorun = () => {
    let left=document.getElementById('bigimg').style;
    left.marginLeft=parseInt(left.marginLeft)<=-2400?'-300px':`${parseInt(left.marginLeft)-300}px`;
  }
  componentDidMount() {
    this.timerId = setInterval(() => this.autorun(), 2000);
  }
  componentWillUnmount(){
    clearInterval(this.timerId)
  }
  render() {
    return (
      <div style={{marginTop:'30px'}}>
        <div style={{ width: '300px', whiteSpace: 'nowrap', overflow: 'hidden' }}>
          <div style={{marginLeft:'-300px',whiteSpace:'nowrap'}} id='bigimg'>
            <Adbigimg adimg={adimg} bigImg='true' imgdiv='bigimgdiv' paused={this.paused} showed={this.showed}/>
            <Adbigimg adimg={adimg} bigImg='true' imgdiv='bigimgdiv' paused={this.paused} showed={this.showed}/>
          </div>
        </div>
        <div style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
          <div className='run' style={{animationPlayState:'running'}}>
            {adimg.map((i, index) => (
              <div className='smallimgdiv' key={index} data-id={index} onMouseEnter={this.show} onMouseLeave={this.showed}>
                <img src={require(`${i.src}`)} />
              </div>
            ))}
            {adimg.map((i, index) => (
              <div className='smallimgdiv' key={index} data-id={index} onMouseEnter={this.show} onMouseLeave={this.showed}>
                <img src={require(`${i.src}`)} />
              </div>
            ))}

          </div>
        </div>
      </div>
    )
  }
}

export default AdSlideContent;