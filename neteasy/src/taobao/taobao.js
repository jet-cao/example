import React, { Component } from 'react';
import Nav from './Nav/Nav';
import Search from './Search/Search';
import Classification from './Classification/Classification';
import ChooseBox from './Choose/ChooseBox';
import TaobaoFooter from './footer';

class Taobao extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Search/>
        <Classification/>
        <ChooseBox/>
        <TaobaoFooter/>
      </div>
    );
  }
}

export default Taobao;
