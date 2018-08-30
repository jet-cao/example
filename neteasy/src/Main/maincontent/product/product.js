import React ,{Component} from 'react';
import MyProduct from './myproduct';
import AllProduct from './allproduct';

const myproduct=[
  {text:'网易新闻',src:'./neteasy.jpg',sublist:['新闻首页','ios下载','Android下载']},
  {text:'网易邮箱',src:'./mail.jpg',sublist:['免费邮','vip邮箱','企业邮箱','邮箱大师']},
  {text:'网易考拉',src:'./kaola.jpg',sublist:['新用户特价','领红包','点卡9.8折']}
];
const recommend=['相册','车险',,'公正邮','青果','美聊','有道词典','同城约会','翻译','LOFTER','跟帖','易龙智投','OC语音','新闻客户端','众筹','理财','考拉海购']
const myproducticon=[{text:'网易薄荷',src:'./bohe.png'},{text:'网易红彩',src:'./hongcai.jpg'},{text:'公开课',src:'./gongkaike.jpg'},{text:'网易严选',src:'./yanxuan.jpg'}]
const mail=['免费邮','VIP邮箱','企业邮箱','邮箱大师','易信'];
const list=[
  {product:['新闻客户端','网易红彩'],type:['理财','赚钱','易龙智投','车险','有钱','众筹','彩票','火车票','严选','网易味央','商城','考拉海购','公正邮','青果','网易智造','印象派','王三三','态度营销']},
  {product:['薄荷直播','公开课','跟帖'],type:['网易美学','漫画','读小说','美聊','约会','CC语音','花田','LOFTER','相册','有道词典','翻译','云笔记','云课堂','大学MOOC']},
  {product:['梦幻西游','新大话2','梦幻西游手游','逆水寒'],type:['新大话3','魔兽世界','倩女幽魂手游','新倩女幽魂','武魂2','大话西游手游','守望先锋','天下3','率师之滨','大唐无双零','天谕','阴阳师','镇魔曲','炉石传说']},
]
class Product extends React.Component{
  constructor(props){
    super(props);
    this.state={show:false}
  }
  show=(e)=>{
    this.setState({show:!this.state.show})
  }
  render(){
    return(
      <div style={{border:'solid #ccc 1px',position:'relative'}}>
        <div>
        <span style={{fontWeight:'bold',color:'red',display:'inline-block',width:'50%',padding:'11px 0',borderTop:'2px solid red'}}>我的产品</span>
        <span style={{display:'inline-block',width:'49%',padding:'15px 1px 15px 0',fontSize:'.8em',cursor:'pointer',borderLeft:'solid 1px #ccc',borderBottom:'solid 1px #ccc'}} onClick={this.show}>全部产品</span>
        </div>
          <MyProduct myproduct={myproduct} recommend={recommend} myproducticon={myproducticon}/>
          <AllProduct mail={mail} list={list} show={this.state.show}/>
      </div>
    )
  }
}

export default Product;