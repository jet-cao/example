import React, { Component } from 'react';

class Select extends React.Component {
  handleClick = (e) => {
    let id = e.target.dataset.id;
    document.documentElement.scrollTop = document.getElementById(id).offsetTop;
  }
  onscroll=()=>{
    let top = Math.ceil(document.documentElement.scrollTop),
    head = document.getElementById('head').offsetTop,
    main = document.getElementById('mainnews').offsetTop,
    tiyu = document.getElementById('tiyu').offsetTop,
    yule = document.getElementById('yule').offsetTop,
    li = document.getElementById('select').getElementsByTagName('ul')[0].getElementsByTagName('li');
  li[0].style.color = (top >= head && top < main) ? 'yellow' : 'white';
  li[0].style.backgroundColor = (top >= head && top < main) ? 'tomato' : 'rgb(158, 0, 250)';
  li[1].style.color = (top >= main && top < tiyu) ? 'yellow' : 'white';
  li[1].style.backgroundColor = (top >= main && top < tiyu) ? 'tomato' : 'rgb(158, 0, 250)';
  li[2].style.color = (top >= tiyu && top < yule) ? 'yellow' : 'white';
  li[2].style.backgroundColor = (top >= tiyu && top < yule) ? 'tomato' : 'rgb(158, 0, 250)';
  li[3].style.color = (top > yule) ? 'yellow' : 'white';
  li[3].style.backgroundColor = (top > yule) ? 'tomato' : 'rgb(158, 0, 250)';
  }
  componentDidMount() {
    window.onscroll = ()=>this.onscroll()
  }
  componentWillUnmount(){
    window.onscroll=null
  }
  render() {
    const list = [{ text: '回到顶部', id: 'head' }, { text: '主要新闻', id: 'mainnews' }, { text: '体育新闻', id: 'tiyu' }, { text: '娱乐新闻', id: 'yule' }];
    return (
      <div style={{ position: 'fixed', width: '100px', top: '50%', right: '15%', backgroundColor: 'rgb(158, 0, 250)', lineHeight: '2em', cursor: 'pointer', border: 'solid #ccc 1px' }} className='select' id='select'>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {list.map((i, index) => (
            <li
              key={index}
              data-id={i.id}
              onClick={this.handleClick}
              style={{ color: 'yellow', backgroundColor: '' }}
            >
              {i.text}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Select;