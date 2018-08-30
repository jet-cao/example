import React, { Component } from 'react';
import './Search.css';
import Market from './Market';
import SearchBar from './SearchBar';

const list = [[{text: '淘宝发现', url: 'https://world.taobao.com/'},{ text: '淘宝女人', url: 'https://nvren.taobao.com/' }, { text: '淘宝男人', url: 'https://nanren.taobao.com/' }, { text: '生活家', url: 'https://shenghuo.taobao.com/' }, { text: '情侣', url: 'https://qinglv.taobao.com/' }],
[{ text: '男女服饰', url: 'https://www.taobao.com/market/nvzhuang/'}, { text: '女装', url: 'https://www.taobao.com/market/nvzhuang/' }, { text: '新品', url: 'https://www.taobao.com/market/nvzhuang/qiang.php?spm=a217i.11245717.a214d5x.9.5e6533e3tSYbMc' }, { text: '裙子', url: 'https://www.taobao.com/market/nvzhuang/dress.php?spm=a217i.11245717.a214d5x.10.5e6533e3tSYbMc' }, { text: '男装', url: 'https://www.taobao.com/market/nanzhuang/' }, { text: 'T恤', url: 'https://www.taobao.com/market/nanzhuang/citiao/tixu.php?spm=a217i.11245717.a214d5x.12.5e6533e3tSYbMc' }, { text: '休闲', url: 'https://www.taobao.com/market/nanzhuang/citiao/kuzi.php?spm=a217i.11245717.a214d5x.13.5e6533e3tSYbMc' }],
[{ text: '箱包市场', url: 'https://www.taobao.com/market/nvbao/shouye.php?spm=a217i.11245717.a214d5x.14.5e6533e3CtXJ5x'}, { text: '女包', url: 'https://www.taobao.com/market/nvbao/' }, { text: '男包', url: 'https://www.taobao.com/market/nanbao/' }, { text: '双肩包', url: 'https://www.taobao.com/market/nvbao/shuangjianbao.php?spm=a217i.11245717.a214d5x.17.5e6533e3tSYbMc' }, { text: '旅行箱', url: 'https://www.taobao.com/market/nvbao/lvxingxiang.php?spm=5711.1279143.a214d6o.18.4668699f0cqWly' }, { text: '钱包', url: 'https://www.taobao.com/market/nvbao/citiao/qianbao2.php?spm=a217i.11245717.a214d5x.19.5e6533e3tSYbMc' }]
];

class Search extends React.Component{
  constructor(props){
    super(props);
    this.state={
      choose:'宝贝',
      unchoose:'店铺',
    }
  }
  handleClick(e){
    this.setState({
      choose:this.state.unchoose,
      unchoose:this.state.choose,
    })
  }
  render(){
    return(
      <div className='search'>
      <div style={{marginLeft:'10%',position:'relative'}}>
      <a href=''><img src={require('./bling.png')} alt='淘宝配饰'/></a>
        <Market list={list} Market='market'/>
      </div>        
        <SearchBar 
        searchBar='searchbar' 
        goods='goods' 
        shop='shop' 
        accessories='accessories' 
        all='all' 
        onClick={(e)=>this.handleClick(e)}
        choose={this.state.choose}
        unchoose={this.state.unchoose}
        />
      </div>
    )
  }
}

export default Search;