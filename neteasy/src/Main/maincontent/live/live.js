import React, { Component } from 'react';
import LiveImg from './liveimg';
import LiveComponent from './livecomponent';
import NeteasyLive from './neteasylive';

const bohe = [
  { kind: '正在直播', livelist: '拒绝工作疲劳综合征 你的提神灵药在这里' },
  { kind: '正在直播', livelist: '见过我的美之后，你心里还能留下谁？' },
  { kind: '正在直播', livelist: '可乐要加冰爱我要走心，等一个骑士归来' },
  { kind: '历史回顾', livelist: '减肥就变美？主播告诉我们变的还有气质' },
  { kind: '历史回顾', livelist: '就算萍水相逢，至少这个房间里能好好聊聊' }
];
const date = new Date;
const time = `${date.getMonth() + 1}月${date.getDate()}日`
const neteasyLive = [
  { kind: '正在直播', livelist: '雪山到草地，乘坐火车来趟说走就走的旅行' },
  { kind: '正在直播', livelist: '畅游海底世界 带您体验清凉一夏' },
  { kind: '正在直播', livelist: '闪转腾挪，看猫主子如何上演精彩扑救' },
  { kind: time, livelist: '指尖上的修行：中国绳艺原来还可以这么玩' },
  { kind: time, livelist: '核爆后的断壁残垣！漫步日本广岛平和公园' }
];

class Live extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: 'bohe' }
  }
  bohe = (e) => {
    this.setState({ show: 'bohe' })
  }
  neteasy = (e) => {
    this.setState({ show: 'neteasy' })
  }
  render() {
    const spanStyle = { padding: '15px 20px' }
    return (
      <div style={{ marginTop: '20px', textAlign: 'left', borderTop: 'solid #ccc 1px' }}>
        <p>
          <span onMouseEnter={this.bohe} style={{ ...spanStyle, borderTop: this.state.show == 'bohe' ? 'tomato 2px solid' : 'none' }}>薄荷</span>
          <span onMouseEnter={this.neteasy} style={{ ...spanStyle, borderTop: this.state.show == 'neteasy' ? 'tomato 2px solid' : 'none' }}>网易直播</span>
        </p>
        <div style={this.state.show == 'bohe' ? { display: 'block' } : { display: 'none' }}>
          <LiveImg src='./11.jpg' text='精分少女带你飞' />
          <LiveImg src='./12.jpg' text='投身岁月身如客' />
          <LiveComponent livecontent={bohe} />
        </div>
        <div style={this.state.show == 'neteasy' ? { display: 'block' } : { display: 'none' }}>
          <NeteasyLive src='./21.jpg' text='上帝视角！国际空间站高清观测地球试验！' />
          <LiveComponent livecontent={neteasyLive} />
        </div>
      </div>
    )
  }
}

export default Live;