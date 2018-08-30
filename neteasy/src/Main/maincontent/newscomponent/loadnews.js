import React from 'react';

class LoadNews extends React.Component {
  constructor(props) {
    super(props);
  }
  slideNews = (e) => {
    let slideStyle = document.getElementById(this.props.picturenews).style;
    if (parseInt(slideStyle.marginLeft) > -800) {
      slideStyle.marginLeft = `${parseInt(slideStyle.marginLeft) - 400}px`;
    } else {
      slideStyle.marginLeft = `0px`
    }
  }
  pause=(e)=>{
    clearInterval(this.timerId)
  }
  run=(e)=>{
    this.timerId=setInterval(() => this.slideNews(), 3000)
  }
  componentDidMount() {
    this.props.news(this.props.type);
    this.timerId = setInterval(() => this.slideNews(), 3000)
  }
  componentWillUnmount(){
    clearInterval(this.timerId)
  }
  render() {
    
    return (
      <div id={this.props.type}>
        <p style={{textAlign:'left',fontSize:'2em'}}>{this.props.kind}</p>
        <div style={{display:'flex',marginTop:'30px'}}>
        <div style={{ overflow: 'hidden', width: '400px'}} onMouseEnter={this.pause} onMouseLeave={this.run}>
          <div style={{ marginLeft: '0px', whiteSpace: 'nowrap' }} id={this.props.picturenews}>
            {this.props.pictureNews.map((i, index) => (
              <div style={{ display: 'inline-block', width: '400px' }}>
                <a href={i.url} style={{ display: 'inline-block', width: '400px' }} key={index}>
                  <img src={i.thumbnail_pic_s} style={{ width: '400px' ,height:'250px'}} />
                  <p style={{ display: 'block', width: '400px', textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}>{i.title}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
        <div style={{display:'inline-block',flex:1,textAlign:'left',paddingLeft:'55px'}}>
        <ul style={{listStyle:'none' ,fontSize:'1.2em',padding:0,margin:0,lineHeight:'2em',marginTop:'-10px'}}>
          {this.props.otherNews.map((i,index)=>(
            <li key={index} style={{textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden',display:'block'}}><a href={i.url}>{i.title}</a></li>
          ))}
        </ul>
        </div>
      <div style={{}}></div>
      </div>
      </div>
      
    );
  }
}
export default LoadNews;