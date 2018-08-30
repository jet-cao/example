import React, { Component } from 'react';
import LoadNews from './loadnews';

class LoadYuleNews extends React.Component {
  render() {
    let pictureNews = this.props.yulenews.slice(0, 3);
    let otherNews = this.props.yulenews.slice(3, 11);
    return (   
    <div>
      <LoadNews
        pictureNews={pictureNews}
        otherNews={otherNews}
        picturenews='yulepicturenews'
        news={this.props.news}
        type='yule'
        kind='娱乐新闻'
      />
    </div>
    );
  }
}
export default LoadYuleNews;