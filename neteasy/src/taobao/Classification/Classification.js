import React, { Component } from 'react';
import './Classification.css';
import ListDown from './ListDown';
import Sublist from '../Search/Sublist';
import Trasition from './Transition';

const list=[
{
  showlist:{text:'时尚饰品',url:'',sublist:[{text:'项链',url:''},{text:'手链',url:''},{text:'发饰',url:''},{text:'耳饰',url:''},{text:'戒指',url:''},{text:'新娘配饰',url:''},{text:'DIY饰品',url:''},{text:'首饰盒',url:''}]},
  hidelist:[
    [{text:'款式',url:''},{text:'毛衣链',url:''},{text:'明星杂志款',url:''},{text:'个性铆钉',url:''},{text:'异域藏风',url:''}],
    [{text:'材质',url:''},{text:'合金',url:''},{text:'皮',url:''},{text:'锆石',url:''},{text:'珍珠母贝',url:''},{text:'琉璃',url:''},{text:'蕾丝',url:''}],
    [{text:'用途',url:''},{text:'头巾发带',url:''},{text:'胸针',url:''},{text:'脚链',url:''},{text:'手镯',url:''},{text:'银饰',url:''},{text:'水晶',url:''}],
    [{text:'品牌',url:''},{text:'香奈儿',url:''},{text:'银时代',url:''},{text:'伊泰莲娜',url:''},{text:'T400',url:''},{text:'新光',url:''}],
    [{text:'流行',url:''},{text:'俏皮活泼',url:''},{text:'荧光色',url:''},{text:'缎带',url:''},{text:'石头记',url:''},{text:'银得利',url:''}],
    [{text:'新款',url:''},{text:'戒指',url:''},{text:'项链',url:''},{text:'圆形',url:''},{text:'水滴形',url:''},{text:'扁圆',url:''},{text:'PT900',url:''}],
  ]
},
{
  showlist:{text:'珠宝首饰',url:'',sublist:[{text:'翡翠玉石',url:''},{text:'黄金',url:''},{text:'钻石',url:''},{text:'金条',url:''},{text:'珍珠',url:''},{text:'琥珀',url:''},{text:'和田玉',url:''},{text:'铂金/PT',url:''}]},
  hidelist:[
    [{text:'翡翠',url:''},{text:'吊坠',url:''},{text:'手镯',url:''},{text:'原石',url:''},{text:'手链',url:''},{text:'项链',url:''},{text:'绒面',url:''}],
    [{text:'黄金',url:''},{text:'周大福',url:''},{text:'周生生',url:''},{text:'六福',url:''},{text:'卡地亚',url:''},{text:'潮宏基',url:''}],
    [{text:'钻石',url:''},{text:'珂兰钻石',url:''},{text:'佐卡伊',url:''},{text:'一搏千金',url:''},{text:'钻石小鸟',url:''}],
    [{text:'珍珠',url:''},{text:'白色系',url:''},{text:'黑色系',url:''},{text:'金色系',url:''},{text:'粉色系',url:''},{text:'混彩',url:''}],
    [{text:'白金/PT',url:''},{text:'PT950',url:''},{text:'PT999',url:''},{text:'PT990',url:''},{text:'情侣对',url:''}],
    [{text:'流行',url:''},{text:'套链',url:''},{text:'摆件',url:''},{text:'脚链',url:''},{text:'海水珠',url:''},{text:'淡水珠',url:''}],
  ]
},
{
  showlist:{text:'品质手表',url:'',sublist:[{text:'石英表',url:''},{text:'电子表',url:''},{text:'机械表',url:''},{text:'情侣表',url:''},{text:'儿童表',url:''},{text:'时装表',url:''},{text:'光能表',url:''},{text:'',url:''}]},
  hidelist:[
    [{text:'类型',url:''},{text:'自动机械表',url:''},{text:'手动机械表',url:''},{text:'人工动能表',url:''},{text:'指针',url:''}],
    [{text:'风格',url:''},{text:'时尚潮流',url:''},{text:'休闲',url:''},{text:'运动',url:''},{text:'复古',url:''},{text:'可爱',url:''},{text:'中性',url:''}],
    [{text:'品牌',url:''},{text:'卡西欧',url:''},{text:'迪士尼',url:''},{text:'斯沃琪',url:''},{text:'西铁城',url:''},{text:'宾格',url:''}],
    [{text:'表带',url:''},{text:'真皮',url:''},{text:'精钢',url:''},{text:'陶瓷',url:''},{text:'橡胶',url:''},{text:'合金',url:''},{text:'镀金',url:''}],
    [{text:'表扣',url:''},{text:'蝴蝶双按',url:''},{text:'扣针',url:''},{text:'单折叠',url:''},{text:'双边按',url:''},{text:'马蹄扣',url:''}],
  ]
},
{
  showlist:{text:'眼镜配饰',url:'',sublist:[{text:'太阳镜',url:''},{text:'光学镜',url:''},{text:'司机镜',url:''},{text:'老花镜',url:''},{text:'运动镜',url:''},{text:'护目镜',url:''},{text:'配件',url:''},{text:'',url:''},{text:'',url:''}]},
  hidelist:[
    [{text:'品牌',url:''},{text:'暴龙',url:''},{text:'香奈儿',url:''},{text:'雷朋',url:''},{text:'古奇',url:''},{text:'帕莎',url:''},{text:'奥迪',url:''} ],
    [{text:'款式',url:''},{text:'女款',url:''},{text:'男款',url:''},{text:'通用',url:''},{text:'偏光',url:''},{text:'防UVA',url:''},{text:'防UVB',url:''}],
    [{text:'配件',url:''},{text:'眼镜架',url:''},{text:'眼镜片',url:''},{text:'装饰/搭配眼镜',url:''},{text:'护理剂',url:''}],
    [{text:'功能',url:''},{text:'偏光太阳镜',url:''},{text:'夜视镜',url:''},{text:'防辐射镜',url:''},{text:'老花镜',url:''}],
    [{text:'运动镜',url:''},{text:'3D镜',url:''},{text:'游泳镜',url:''},{text:'滑雪镜',url:''},{text:'篮球镜',url:''},{text:'潜水镜',url:''}],
    [{text:'风格',url:''},{text:'个性',url:''},{text:'优雅',url:''},{text:'前卫',url:''},{text:'运动',url:''},{text:'简约',url:''},{text:'舒适',url:''}],
  ]
},
{
  showlist:{text:'男人饰品',url:'',sublist:[{text:'zippo',url:''},{text:'瑞士军刀',url:''},{text:'烟具',url:''},{text:'酒具',url:''},{text:'紫檀',url:''},{text:'沉香木',url:''},{text:'佛珠/手串',url:''},{text:'',url:''}]},
  hidelist:[
    [{text:'款式',url:''},{text:'菩提子',url:''},{text:'黄花梨',url:''},{text:'红酸枝',url:''},{text:'檀木',url:''},{text:'金丝楠',url:''}],
    [{text:'工具',url:''},{text:'烟斗',url:''},{text:'烟嘴',url:''},{text:'烟斗架',url:''},{text:'卷烟器',url:''},{text:'雪茄剪',url:''}],
    [{text:'打火机品牌',url:''},{text:'都彭',url:''},{text:'登喜路',url:''},{text:'百诚',url:''},{text:'恒星',url:''},{text:'双枪',url:''}],
    [{text:'工艺',url:''},{text:'纯银',url:''},{text:'纯铜',url:''},{text:'磨砂',url:''},{text:'明烙',url:''},{text:'万次火柴',url:''}],
    [{text:'流行',url:''},{text:'哑漆',url:''},{text:'镀金',url:''},{text:'烤漆',url:''},{text:'年抛',url:''},{text:'月抛',url:''},{text:'日抛',url:''}],
    [{text:'其他品牌',url:''},{text:'威戈',url:''},{text:'维氏',url:''},{text:'百诚',url:''},{text:'金士顿',url:''},{text:'海昌',url:''}],
  ]
},
{
  showlist:{text:'古玩珍藏',url:'',sublist:[{text:'紫砂',url:''},{text:'文房',url:''},{text:'核雕',url:''},{text:'脸谱',url:''},{text:'印章',url:''},{text:'徽章',url:''},{text:'西洋收藏',url:''},{text:'流行收藏',url:''}]},
  hidelist:[
    [{text:'宗教',url:''},{text:'天珠',url:''},{text:'佛牌',url:''},{text:'法器',url:''},{text:'唐卡',url:''},{text:'罗盘',url:''},{text:'佛像',url:''}],
    [{text:'邮币',url:''},{text:'中邮',url:''},{text:'外邮',url:''},{text:'封片',url:''},{text:'外币',url:''},{text:'纪念币',url:''},{text:'古币',url:''}],
    [{text:'玉石',url:''},{text:'寿山',url:''},{text:'青田',url:''},{text:'昌化',url:''},{text:'玉石',url:''},{text:'奇石',url:''},{text:'化石',url:''}],
    [{text:'国粹',url:''},{text:'木艺',url:''},{text:'陶/瓷/瓷片',url:''},{text:'篆刻',url:''},{text:'搪瓷',url:''},{text:'核桃',url:''}],
    [{text:'民俗',url:''},{text:'景泰蓝',url:''},{text:'剪纸',url:''},{text:'织绣',url:''},{text:'折扇',url:''},{text:'连环画',url:''},{text:'葫芦',url:''}],
    [{text:'书画',url:''},{text:'国画',url:''},{text:'书法',url:''},{text:'版画',url:''},{text:'年画',url:''},{text:'漫画',url:''},{text:'素描',url:''}],
  ]
}  
]
const nav=[{text:'时尚饰品',url:''},{text:'珠宝首饰',url:''},{text:'品牌手表',url:''},{text:'潮流眼镜',url:''},{text:'男人配饰',url:''},{text:'和田玉直供',url:''},{text:'深圳珠宝特色馆',url:''}]

class Classification extends React.Component{
  render(){
    const position={marginLeft:'-132px'}
    return(
      <div className='classification'>
        <div className='first' >
          <span><a href='' style={{fontSize:'0.9em'}}>首页</a></span>
          <ul>
            {list.map((i,index)=>(
              <li className='list'>               
                <ListDown text={i.showlist.text} url={i.showlist.text} sublist={i.showlist.sublist} one='one' list={i.hidelist} index={index} position={position}/>
              </li>
            ))}
          </ul>
        </div>
        {nav.map((i,index)=>(
          <Trasition text={i.text} url={i.url} cssOne='nav' cssTwo='background'/>
        ))}
        <Trasition text='商品目录' url='' cssOne='nav' cssTwo='background'/>
      </div>
    )
  }
}

export default Classification;