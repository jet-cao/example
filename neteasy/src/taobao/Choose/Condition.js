import React, { Component } from 'react';

function Condition(props) {
  return (
    <div className={props.cssName}>
      <div>综合排序</div>
      <div className='salse' onClick={props.priceSort} data-id='pay'>销量</div>
      <div className={props.price}>
        <span>价格</span>
        <div>
          <span onClick={props.priceSort} data-id='desc'>价格从低到高</span><br />
          <span onClick={props.priceSort} data-id='asc'>价格从高到低</span>
        </div>
      </div>
      <div className='range'>
        <input type='text' placeholder='&yen;' name='range' />-
        <input type='text' placeholder='&yen;' name='range' />
        <div data-id='range' onClick={props.range}>确定</div>
      </div>
      <div className={props.addressCss}>
        <div className='stepone'>
          <span>发货地</span>
        </div>
        <div className='steptwo'>
          {props.address.map((i, index) => (
            <span data-id={i} onClick={props.addressRange}>{i}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Condition;