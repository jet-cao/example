import React,{Component} from 'react';
import LoadNews from './loadnews';

class LoadSportNews extends React.Component{
  render() {
    let pictureNews = this.props.sportnews.slice(0, 3);
    let otherNews = this.props.sportnews.slice(3, 11);
    return (
      <div>
        <LoadNews 
        pictureNews={pictureNews} 
        otherNews={otherNews} 
        picturenews='picturenews' 
        news={this.props.news} 
        type='tiyu'
        kind='体育新闻'
        />
      </div>
    );
  }
}

export default LoadSportNews;