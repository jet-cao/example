import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import todoApp from './Main/redux/reducers';
import { Provider } from 'react-redux';
import thunk from'redux-thunk';
import{createLogger}from'redux-logger';
import Taobao from './taobao/taobao';
const logger=createLogger();
const store = createStore(todoApp,applyMiddleware(thunk,logger));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <Switch>
    <Route exact path='/' component={App} />
    <Route path='/taobao' component={Taobao}/>  
    </Switch> 
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
