import React, { Component } from 'react';
import CourseContent from './coursecontent';
import './course.css';

const courseimg = [
  {
    img:[{ src: './11.jpeg', text: '减肥成功是什么体验' }, { src: './12.jpeg', text: '央视名嘴教你练性感好声音' }],
    content:[{text:'普通人可行7个挣钱思路'},{text:'12步做出能挣钱的公众号'},{text:'没钱月光族怎么开始理财'},{text:'阿里销售冠军对赌马云'},{text:'职场中不会说话有多可怕'},{text:'揭秘高考状元独家学习法'},{text:'北大教授讲白鹿原田小娥'},{text:'10招让你学习效率翻10倍'},{text:'适合懒人的高效减肥方法'},{text:'为什么82年的拉菲这么贵'}]
  },
  {
    img:[{ src: './21.jpeg', text: '千万别让自己输在没人脉' }, { src: './22.jpeg', text: '学会这个你也能有最强大脑'}],
    content:[{text:'用三招成为更受欢迎的人'},{text:'普通人适合的7个挣钱思路'},{text:'你这么优秀得让老板知道'},{text:'写字好看有哪些优势'},{text:'普通人如何练就过目不忘'},{text:'辗轧同事的PPT动画模板'},{text:'六招让家庭不被钱困扰'},{text:'如何优雅的在朋友圈挣钱'},{text:'3步激发孩子的写作潜能'},{text:'美食的手机拍照3个秘诀'}]
  }
]

class Course extends React.Component {
  constructor(props){
    super(props);
    this.state={show:'0'}
  }
  showLeft=(e)=>{
    this.setState({show:'0'})
  }
  showRight=(e)=>{
    this.setState({show:'-100%'})
  }
  render() {
    return (
      <div className='course'>
        <p><span>网易公开课</span></p>
        <CourseContent courseimg={courseimg} show={this.state.show}/> 
        <span onMouseEnter={this.showLeft} className='contral'>1</span>
        <span onMouseEnter={this.showRight} className='contral'>2</span>
      </div>
    )
  }
}

export default Course;