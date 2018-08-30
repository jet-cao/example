import React, { Component } from 'react';
import Mainnews from './columnComponent/columncomponent';
import './maincontent.css';
import SportNews from '../redux/container/sportnewscontainer';
import YuleNews from '../redux/container/yulenewscontainer';
import Select from './select/select';


let imgs = [
  { bigImg: './slideimg/1.jpeg', text: '高圆圆与好友相聚', smallImg: [{ smallImg: './slideimg/s11.jpeg', text: '梅银花钱如流水' }, { smallImg: './slideimg/s12.jpeg', text: '卡戎北极的魔多暗斑' }] },
  { bigImg: './slideimg/2.png', text: '月薪1W+，在广州过着怎样的生活？', smallImg: [{ smallImg: './slideimg/s21.jpeg', text: '广州房价1.8万/平，你信吗？' }, { smallImg: './slideimg/s22.jpeg', text: '吉利推飞行车，明年上市' }] },
  { bigImg: './slideimg/3.jpeg', text: '凭借过目不忘的记忆力，服务员逆袭身家过亿CEO', smallImg: [{ smallImg: './slideimg/s31.jpeg', text: '明星御用摄影师揭网红照秘密' }, { smallImg: './slideimg/s32.jpeg', text: '揭秘马云麾下神秘销售高手' }] },
  { bigImg: './slideimg/4.png', text: '长春一幼儿园招生，爷爷奶奶扎营通宵排队', smallImg: [{ smallImg: './slideimg/s41.jpeg', text: '男子建8600平豪华狗狗乐园' }, { smallImg: './slideimg/s42.jpeg', text: '胡杏儿露香肩秀性感' }] },
  { bigImg: './slideimg/5.jpeg', text: '没眼看！这菜地是中超草皮！足协的修整金呢？', smallImg: [{ smallImg: './slideimg/s51.jpeg', text: '台风安比登录上海' }, { smallImg: './slideimg/s52.jpeg', text: '刘国梁爱女首夺世界冠军' }] }
]

class Maincontent extends React.Component {
  render() {
    return (
      <div className='maincontent'>
        <Mainnews imgs={imgs} />
        <SportNews />
        <YuleNews />
        <Select />
      </div>
    )
  }
}

export default Maincontent;