import React, { Component } from 'react';
import Serve from './Serve';

function CheckBox(props) {
  return (
    <form className={props.cssForm} style={props.bottom}>
    <Serve list={props.list}/>
      <p>
        <input type='submit' value='提交'/>
        <input type='submit' value='取消' onClick={props.onclick} data-id=''/>
      </p>
    </form>
  )
}

export default CheckBox;