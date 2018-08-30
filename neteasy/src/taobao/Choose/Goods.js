import React, { Component } from 'react';

function Goods(props) {
  return (
    <div className={props.goodsCss}>
      {props.goods.map((i, index) => (
        <div className={props.list} style={(index + 1) % 4 == 0 ? { marginRight: 0 } : {}}>
          <div className={props.img}>
            <a href=''>
              <img src={require(`${i.src}`)} alt={i.shop} />
              <div>
                <span>找同款</span>
                <span>找相似</span>
              </div>
            </a>
          </div>
          <div className={props.message}>
            <p>
              <span>&#165;{i.price}</span><span>包邮</span><span>{i.pay}人付款</span>
            </p>
            <p>
              <a href=''>{i.introduce}</a>
            </p>
            <a href='' style={{marginLeft:'-115px'}}>{i.shop}</a>
            <span>{i.address}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Goods;