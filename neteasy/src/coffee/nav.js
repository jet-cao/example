import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import media from './media';

const NavList = styled.div`
  background-color:${props => props.background};
  position:fixed;
  top:5%;
  padding:1% 15%;
  width:100%;
  ${media.tablet`top:1%`};
  img {
    width:10%;
  };
  div {
    color:white;
    display:inline-block;
    width:50%;
    float:right;
    text-align:right;
    margin-right:30%;
    span {
      margin-right:2%;
      display:inline-block;
    };
    ${media.tablet`display:none`}
  }
`;
const NavLink = styled(Link)`
  color:white;
  margin-right:2%;
  font-size:.8em;
  :hover {
  color:white
}
`;

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { background: 'none' }
  }
  scorll = (e) => {
    let top = document.documentElement.scrollTop;
    this.setState({ background: parseInt(top) > document.getElementById('head').offsetTop ? 'rgb(48, 24, 16,.9)' : 'none' })
  }
  componentDidMount() {
    window.onscroll = () => this.scorll();
  }
  componentWillUnmount(){
    window.onscroll=null;
  }
  render() {
    return (
      <NavList background={this.state.background}>
        <img src={require('./img/logo.png')} />
        <div>
          <span>Mon-Fri: 8am to 2pm</span>
          <span>Sat-Sun: 11am to 4pm</span>
          <span>(012) 6985 236 7512</span>
          <nav>
            <NavLink to='HOME'>HOME</NavLink>
            <NavLink to='ABOUT'>ABOUT</NavLink>
            <NavLink to='COFFEE'>COFFEE</NavLink>
            <NavLink to='REVIEW'>REVIEW</NavLink>
            <NavLink to='BLOG'>BLOG</NavLink>
            <NavLink to='PAGES'>PAGES</NavLink>
          </nav>
        </div>
      </NavList>
    );
  }
}

export default Nav;