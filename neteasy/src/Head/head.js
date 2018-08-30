import React,{Component} from 'react';
import List from './list';
import './head.css';
const leftList=[
  {text:'网易首页'},
  {text:'应用',sublist:[{text:'网易新闻'},{text:'网易公开课'},{text:'薄荷直播'},{text:'网易红彩'},{text:'网易严选'},{text:'邮箱大师'},{text:'网易美学'},{text:'网易云课堂'},{text:'网易考拉海购'}]}
];
const rightList=  [
  {text:'网易',img:'./topapp.jpg'},
  {text:'公开课',sublist:[{text:'付费精品'},{text:'TED'},{text:'国际名校公开课'},{text:'中国大学视频公开课'},{text:'赏课'},{text:'可汗学院'},{text:'下载公开课'}]},
  {text:'薄荷直播',sublist:[{text:'薄荷直播大厅'},{text:'下载薄荷直播app'}]},
  {text:'网易考拉',sublist:[{text:'1000元现金礼包'},{text:'进口好货9.9元包邮'},{text:'今日限时抢购'},{text:'母婴专区'},{text:'美容彩妆'},{text:'家居日用'},{text:'进口美食'},{text:'营养保健'},{text:'海外直邮'}]},
  {text:'严选',sublist:[{text:'888元现金券'},{text:'品牌制造商爆款'},{text:'999+人气好评品'},{text:'限时特惠'},{text:'丁磊推荐'},{text:'居家床品'},{text:'精致餐厨'},{text:'箱包鞋类'},{text:'经典服饰'},{text:'健康美食'}]},
  {text:'¥',sublist:[{text:'一卡通充值'},{text:'一卡通购买'},{text:'网易白金卡'},{text:'我的网易支付'},{text:'网易智造'},{text:'网易来钱-借现金'},{text:'立马理财送8888'}]},
  {text:'购物车',sublist:[{text:'彩票'},{text:'贵金属'},{text:'车险'},{text:'严选'},{text:'电影票'},{text:'火车票'},{text:'我要借钱'},{text:'青果商城'},{text:'考拉海购'}]},
  {text:'邮件',sublist:[{text:'免费邮箱'},{text:'vip邮箱'},{text:'企业邮箱'},{text:'免费注册'},{text:'快速注册'},{text:'客户端下载'}]},
  {text:'登录',sublist:[{text:'网易账号中心'},{text:'我的邮箱'},{text:'我的LOFTER'},{text:'我的相册'},{text:'我的花田'},{text:'我的同城约会'},{text:'我的博客'},{text:'我的云笔记'},{text:'我的彩票'},{text:'我的贵金属'},{text:'我的车险'},{text:'我的保险'},{text:'网易商城'},{text:'网易云阅读'},{text:'云课堂'},{text:'我的考拉'}]},
  {text:'安全退出'}
]
class Head extends React.Component{
  render(){
    return(
      <header className='head' id='head'>
          <List list={leftList} headCss='leftlist'/>
          <List list={rightList} headCss='rightlist'/>     
      </header>
    )
  }
}

export default Head;