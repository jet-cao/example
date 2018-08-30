import React, { Component } from 'react';
import ListDown from './ListDown'
function Navigation(props) {
  return (
    <div className={props.navCss}>

      <a href='https://www.taobao.com/sitemap.php?spm=a219r.lm5630.1997525077.1.34984aceaRmtdq'>{props.title}</a>
      <div>
        <ul>
          {props.navigation.map((i, index) => (
            <ListDown url={i.url} color={i.color} text={i.text} sublist={i.sublist}/>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Navigation;