import React,{Component}from 'react';
import {Link} from 'react-router-dom';
import './main.css'
import Header from './head/header';
import Nav from './nav/nav';
import Maincontent from './maincontent/maincontent';

const navList=[
  [[{text:'新闻'},{text:'军事'},{text:'图片'},{text:'航空'}],[{text:'娱乐'},{text:'电影'},{text:'薄荷'},{text:'电视剧'}]],
  [[{text:'体育'},{text:'红彩'},{text:'NBA'},{text:'中超'}],[{text:'财经'},{text:'股票'},{text:'基金'},{text:'商业'}]],
  [[{text:'科技'},{text:'手机'},{text:'智能'},{text:'彩票'}],[{text:'时尚'},{text:'女人'},{text:'教育'},{text:'亲子'}]],
  [[{text:'直播'},{text:'PGC'},{text:'公开课'}],[{text:'房产'},{text:'家居'},{text:'二手房'}]],
  [[{text:'汽车'},{text:'购车'},{text:'选车'}],[{text:'健康'},{text:'酒香'},{text:'身体课'}]],
  [[{text:'广东'},{text:'政务'},{text:'跟帖'}],[{text:'旅游'},{text:'海淘'},{text:'严选'}]],
  [[{text:'公益'},{text:'佛学'},{text:'网易号'}],[{text:'艺术'},{text:'双创'},{text:'收藏'}]]
]

const education=['新东方暑假班报名入口','高校成绩在美渐获承认','录取通知书教你辨‘真假’','上外MBA无国界人才','世界杯掀起足彩热','2018高考招生特别报道','华裔女孩获总统学者奖','解答高招录取热点问题','凯顿暑托优惠持续中','大学毕业生求职调查','对外经贸大学本硕连读','百年上财百年商学'];
const newmessage=['严选3月必入好物大赏','让分享知识成为习惯','禹州滨之江，恭迎品鉴','刚需热盘，参团有礼','正申花珑玺精装宽宅','预言世界杯，赢奔驰C！','免费送您50元话费','投资理财，一招搞定','天街旁，地铁餐饮铺','让你的竞彩一触即发','大人物，当洋房','免费领最高50万保障']
class Main extends React.Component{
  render(){
    return(
      <main>
       {/* <Link to='./'><img src={require('./main.jpg')} alt='广告' className='background'/></Link> */}
        <div className='maindiv'>
          <Header headCss='mainhead'/>
          <Nav list={navList} navcss='navcss' education={education} newmessage={newmessage}/>
          <Maincontent/>
        </div>
      </main>
    )
  }
}

export default Main;