import React, { Component } from 'react';
import News from './news';
import Img from './img';
import { Link } from 'react-router-dom';
import './gznewsimg.css'

const mainNews1 = [{ text: '习近平抵达毛里求斯共和国过境并进行友好访问' }, { text: '习主席到访的这个国家，中国春节是法定假日' }, { text: '为金砖合作勾画第二个“金色十年”' }, { text: '金砖国家领导人第十次会晤约翰内斯堡宣言(全文)' }, { text: '汤兰兰:被判刑11人没一个冤枉 敢为话负法律责任' }];
const mainNews2 = [{ text: '证监会公布退市制度修改 长生生物拉响退市警报' }, { text: '于欢家人被控非法吸存2500多万 辩称系正常借贷' }, { text: '著名剧作家沙叶新去世 曾创作话剧《陈毅市长》' }, { text: '侠客岛:"巴铁"选举变天 新领导人对中国态度如何?' }, { text: '白宫回话普京：若接到俄正式邀请 特朗普愿意访俄' }, { text: '成都一台商失智后被前员工照顾两年，受多方相助回台湾' }];
const mainNews3 = [{ text: '浙江桐庐县合村乡发生廊桥桥顶垮塌 致8死3伤' }, { text: '俄军来华参加军事比赛 使用中国装备与解放军竞技' }, { text: '台当局要求金门推迟举办自大陆引水工程通水典礼' }, { text: '英国男子淘到500年不遇天然大金块 可能被皇家收走' }, { text: '外卖小哥送餐途中帮人开挖掘机:没想到会被拍下来' }, { text: '河南立法提倡"黄昏恋"婚前财产公证 曾有老人被骗' }];
const mainNews4 = [{ text: '放弃聚美1亿期权去读MBA的人 现在怎么样了' }, { text: '了不起的中国制造 | 如何把5100根桩子准确敲进海底?' }, { text: '大国小民 | 我在整容医院，假冒了半个月的男人' }, { text: '吐槽姬 | 《延禧攻略》里的女人只爱宫斗不爱美男' }];
const mainNews5 = [{ text: '财经 | 疫苗案事实查清！60块硬盘证据差点被毁' }, { text: '资金转换思路挖掘个股 要小心这类股的高风险' }, { text: '科技 | 市场监管总局：很遗憾高通放弃收购恩智浦' }, { text: '一路狂奔幸运儿:拼多多成立3年市值2000亿元 专题' }, { text: '体育 | 德罗巴变彩神带中国彩民盈利 揭秘曼城输球' }, { text: '走进富豪圈!帕托和王石女友吃火锅:谢谢你送的书' }];
const mainNews6 = [{ text: '娱乐 | 郑爽新男友正面照曝光 片场相伴亲吻头发' }, { text: '粉头上线！伊能静为秦昊新剧打call变迷妹' }, { text: '女人 | 《延禧攻略》里女人爱宫斗不爱男人' }, { text: '爆款制造机李宁又来一件单品？穿上它时髦整个世界' }, { text: '网易号 | 为什么总有人造假？这绝不只是经济账' }, { text: '这个病比癌症可怕，很多人还不知道' }];
const gzNews1 = [{ text: '王老吉商标纠纷案 加多宝被判赔14亿' }, { text: '蜗居城中村的广州年轻人：有什么问题都是钱的问题！' }, { text: '市法制办：上学遇到台风黄色预警 全天停课！' }, { text: '广东一男子接了一个电话 突然仰面倒下池塘身亡' }, { text: '懵！广州“开四停四” 你真的搞懂了吗？' }, { text: '惨！广州一瑜伽助教遭大面积严重烧伤 原因是这个' }];
const gzNews2 = [{ text: '香港新版钞票曝光！竟把港人和广东人的最爱印在钱上' }, { text: '快来围观！海珠这五处老旧物业要强势逆袭啦' }, { text: '这些“卡门”利器不保管好 分分钟可能会逼停地铁' }, { text: '为缓解儿科医生荒 今后三年广东这样做' }, { text: '广东一外卖小哥违章记录有8米 连交警都惊呆！' }, { text: '全科开考！广州中考改革从2018年开始实施' }];
const gzNews3 = [{ text: '广州或许真的不需要米其林 但你我都不该发声' }, { text: '广州拟出台新规：视雨势险情 低洼地将断电！' }, { text: '广州共享单车服务质量考核：摩拜和ofo刚过及格线' }, { text: '在清远买房可申请使用广州住房公积金' }, { text: '日均堵车超4.5小时 广州头号堵点为何是沿江西路？' }, { text: '又升了！7月新增3.8万人摇号 169人抢1个粤A车牌' }]
const gzNewsImg = [{ src: './1.jpeg', text: '探访香港西九龙站' }, { src: './2.jpeg', text: '广州的火烧云美极了！' }, { src: './3.jpeg', text: '广州的晚霞美炸朋友圈' }, { src: './4.png', text: '同福西成观览骑楼“慢行街”' }, { src: './5.jpeg', text: '江湛铁路正式开通' }, { src: './6.jpeg', text: '朋友圈昨天被双彩虹刷屏' }];

class ImportentNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: 'china' }
  }
  chinaNews = (e) => {
    this.setState({ show: 'china' })
  }
  gzNews = (e) => {
    this.setState({ show: 'gz' })
  }
  render() {
    const spanStyle = { padding: '10px 40px' };
    const joinNeteasy = { fontSize: '0.7em', padding: '5px', display: 'inline', marginLeft: '10px' };
    return (
      <React.Fragment>
        <div style={{ padding: '10px', fontSize: '1.3em', marginBottom: '10px' }} id='mainnews'>
          <Link to=''><span style={{ ...spanStyle, borderTop: this.state.show == 'china' && 'solid 2px tomato' }} onMouseEnter={this.chinaNews}>要闻</span></Link>
          <Link to=''><span style={{ ...spanStyle, borderTop: this.state.show == 'gz' && 'solid 2px tomato' }} onMouseEnter={this.gzNews}>广州新闻</span></Link>
        </div>
        <div style={this.state.show == 'china' ? { display: 'block' } : { display: 'none' }}>
          <News news={mainNews1} />
          <News news={mainNews2} />
          <News news={mainNews3} />
          <News news={mainNews4} />
          <News news={mainNews5} />
          <News news={mainNews6} />
        </div>
        <div style={this.state.show == 'gz' ? { display: 'block' } : { display: 'none' }} className='gznewsimg'>
          <News news={gzNews1} />
          <News news={gzNews2} />
          <News news={gzNews3} />
          <div style={{ marginLeft: '30px' }}>
            {gzNewsImg.map((i, index) => (
              <Img imgs={i.src} text={i.text} />
            ))}
          </div>
          <div style={{ padding: '30px 15px' }}>
            <Link to='' style={{ ...joinNeteasy, border: 'solid 1px #ccc', borderRadius: '10px' }}>网易地方加盟站</Link>
            <Link to='' style={{ ...joinNeteasy, border: 'solid 1px #ccc', borderRadius: '10px' }}>本地网易号入驻</Link>
            <Link to='' style={{ ...joinNeteasy, float: 'right' }}>进入本地频道》</Link>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default ImportentNews;