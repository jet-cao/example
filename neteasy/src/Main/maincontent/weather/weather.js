import React from 'react';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = { city: '广州' }
  }
  handleClick = (e) => {
    e.preventDefault();
    this.props.changeCity(this.state.city);
  }
  change = (e) => {
    this.setState({ city: e.target.value })
  }
  componentDidMount() {
  this.props.changeCity();
  }
  render() {
    return (
      <div style={{marginTop:'30px'}}>
        <form>
          <input type='text' name='city' placeholder='请输入搜索的城市' onChange={this.change} style={{paddingTop:'3px'}}/>
          <input type='submit' value='提交' onClick={this.handleClick} />
        </form>
        <div>
          <img src={this.props.pic} style={{width:'100%',border:'1px blue solid',height:'200px',marginTop:'10px'}}/>
          <p>城市：{this.props.city}</p>
          <p>风速：{this.props.wind}</p>
          <p>温度：{this.props.temperature}</p>
          <p>天气：{this.props.weather}</p>
        </div>
      </div>
    );
  }
}

export default Weather;