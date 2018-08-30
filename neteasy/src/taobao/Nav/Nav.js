import React, { Component } from 'react';
import List from './List.js';
import './Nav.css';
import Navigation from './Navigation.js';

const leftHead = [{
  text: '中国大陆',
  url: '',
  sublist: [{ text: '全球', url: '' }, { text: '中国大陆', url: '' }, { text: '香港', url: '' }, { text: '台湾', url: '' }, { text: '澳门', url: '' }, { text: '韩国', url: '' }]
},
{text:'亲，请登录',url:''},
{text:'免费注册',url:''},
{text:'手机逛淘宝',url:''}
];
const rightHead=[{text:'淘宝网首页',url:''},
{text:'我的淘宝',url:'',sublist:[{text:'已买到的宝贝',url:''},{text:'我的足迹',url:''}]},
{text:'购物车',url:''},
{text:'收藏夹',url:'',sublist:[{text:'收藏的宝贝',url:''},{text:'收藏的店铺',url:''}]},
{text:'商品分类',url:''},
{text:'卖家中心',url:'',sublist:[{text:'免费开店',url:''},{text:'已卖出的宝贝',url:''},{text:'出售中的宝贝',url:''},{text:'卖家培训市场',url:''},{text:'卖家培训中心',url:''},{text:'体检中心',url:''},]},
{text:'联系客服',url:''},
];
const navigation = [
  {
    text: '主题市场', url: '', color: 'red', sublist: [
      { text: '女装', url: '' }, { text: '男装', url: '' }, { text: '内衣', url: '' }, { text: '鞋靴', url: '' }, { text: '箱包', url: '' }, { text: '婴童', url: '' }, { text: '家电', url: '' }, { text: '数码', url: '' }]
  },
  {
    text: '特色市场', url: '', color: 'green', sublist: [
      { text: 'Ifashion', url: '' }, { text: '爱逛街', url: '' }, { text: '美妆秀', url: '' }, { text: '全球购', url: '' }, { text: '腔调', url: '' }, { text: '淘女郎', url: '' }, { text: '星店', url: '' }, { text: '极有家', url: '' }]
  },
  {
    text: '阿里APP', url: '', color: 'violet', sublist: [
      { text: '淘宝', url: '' }, { text: '天猫', url: '' }, { text: '支付宝', url: '' }, { text: '聚划算', url: '' }, { text: '飞猪', url: '' }, { text: '蚂蚁聚宝', url: '' }, { text: '旺信', url: '' }, { text: '闲鱼', url: '' }]
  },
  {
    text: '精彩推荐集', url: '', color: 'blue', sublist: [
      { text: '余额宝', url: '' }, { text: '大牌捡宝', url: '' }, { text: '淘公仔', url: '' }, { text: '浏览器', url: '' }, { text: '淘宝香港', url: '' }, { text: '淘宝台湾', url: '' }, { text: '淘宝全球', url: '' }, { text: '淘宝东南亚', url: '' }]
  },
];

class Nav extends React.Component{
  render(){
    return(
      <div style={{backgroundColor:'rgb(235, 235, 235)',width:'100%',minWidth:'1180px'}}>
      <div style={{width:'1180px',margin:'auto',display:'flex',justifyContent:'space-around'}}>
      <List list={leftHead} content='Nav' stepone='one' steptwo='two'/>
      <List list={rightHead} content='Nav' stepone='one' steptwo='two' />
      <Navigation navigation={navigation} navCss='navigation' title='网站导航'/>
      </div>
      </div>
    )
  }
}

export default Nav;