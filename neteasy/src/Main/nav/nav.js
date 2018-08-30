import React,{Component} from 'react';
import './nav.css'
import { Link } from 'react-router-dom';
import Column from './column';
import Recommend from './recommend';

class Nav extends React.Component{
  constructor(props){
    super(props);
    this.state={show:true}
  }
  onHandle=(e)=>{
    this.setState({
      show: !this.state.show
    })
  }
  onEducation=(e)=>{
    this.setState({show:true})
  }
  onNewMessage=(e)=>{
    this.setState({show:false})
  }
  componentDidMount(){
    this.timerId=setInterval(()=>this.onHandle(),3000)
  }
  render(){
    return(
      <nav>
        <Column navcss={this.props.navcss} list={this.props.list}/>
        <Link to=''><img src={require('./headadv.jpg')} alt='广告'/></Link>
        <Recommend 
        education={this.props.education} 
        newmessage={this.props.newmessage} 
        adv='adv' show={this.state.show} 
        onEducation={this.onEducation} 
        onNewMessage={this.onNewMessage}
        />
      </nav>
    )
  }
}

export default Nav;