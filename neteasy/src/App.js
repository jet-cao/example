import React, { Component } from 'react';
import './App.css';
import Head from './Head/head';
import Main from './Main/main';
import TurnToTaobao from './footer/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Head/>
        <Main/>
        <TurnToTaobao />
      </div>
    );
  }
}

export default App;
