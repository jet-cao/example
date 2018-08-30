import React,{Component} from 'react';
import Choose from './Choose';
import HotSale from './HotSale';
import './ChooseBox.css';

function ChooseBox(){
  return(
    <div className='ChooseBox'>
      <Choose/>
      <HotSale/>
    </div>
  )
}
export default ChooseBox;