import React, { Component } from 'react';
import './HotSale.css';

const goods = [
  { src: './Img/1.jpg', price: '290.00', pay: '65', introduce: '24K金玫瑰花束送女友老婆生日礼物礼盒装9朵金玫瑰花520节日礼物', shop: '黛蓝丝', address: '福建 莆田', url: '' }, { src: './Img/2.jpg', price: '360.00', pay: '34', introduce: '24k金箔玫瑰花纯银镀金送女友银饰婚庆告白礼物七夕情人节金玫瑰', shop: '新浪时尚8', address: '福建 莆田', url: '' }, { src: './Img/3.jpg', price: '360.00', pay: '34', introduce: '24k金箔玫瑰花七夕情人节礼物镀金玫瑰花束送女友送爱人纯银摆件', shop: '沐白银饰', address: '福建 莆田', url: '' }, { src: './Img/4.jpg', price: '360.00', pay: '43', introduce: '24k金箔纯银镀金玫瑰花七夕情人节礼物送女友母亲节礼品结婚摆件', shop: '时兴out', address: '福建 莆田', url: '' },
  { src: './Img/5.jpg', price: '25.00', pay: '286', introduce: '开光天然粉水晶七星阵摆件粉水晶球招桃花稳定感情利姻缘新婚礼物', shop: '石全九美水晶城堡', address: '江苏 连云港', url: '' }, { src: './Img/6.jpg', price: '100.00', pay: '42', introduce: '原石正品招财家居聚宝盆天然紫晶洞摆件紫晶簇净化消磁真水晶礼物', shop: '我要的永远在哪里', address: '江苏 连云港', url: '' }, { src: './Img/7.jpg', price: '198.00', pay: '30', introduce: '结婚纪念爱情银币刻字生日礼物女送老婆新人高档浪漫个性纯银定制', shop: '阿古珞', address: '浙江 温州', url: '' }, { src: './Img/8.jpg', price: '3.50', pay: '256', introduce: '金箔金玫瑰花24k金箔仿真送女友生日创意浪漫开业情人节刻字礼物', shop: '诗婷露雅代理商', address: '浙江 温州', url: '' },
  { src: './Img/9.jpg', price: '195.00', pay: '7', introduce: '纯天然白水晶球摆件原石镇宅居家风水球招财礼物辟邪转运开光正品', shop: '东海缘分水晶', address: '江苏 连云港', url: '' }, { src: './Img/10.jpg', price: '69.00', pay: '84', introduce: '武汉大学樱花标本永生花 生日送男女朋友创意礼物 武汉旅游纪念品', shop: 'kuangpeiling2', address: '湖北 武汉', url: '' }, { src: './Img/11.jpg', price: '270.00', pay: '28', introduce: '易晶缘水晶天然矿物晶体97种矿石标本盒科普教育孩子礼物原石', shop: 'hualei200633', address: '江苏 连云港', url: '' }, { src: './Img/12.jpg', price: '5.79', pay: '107', introduce: '金玫瑰花24k金箔玫瑰花康乃馨摆件创意礼物品实用情人送女友老婆', shop: '368759森林', address: '浙江 金华', url: '' },
  { src: './Img/13.jpg', price: '188.00', pay: '13', introduce: 'LAUTIE幸运小胖LUCKYFATMAN人偶EDC随身小物品摆件送男友礼物', shop: '源本大叔', address: '云南 昆明', url: '' }, { src: './Img/14.jpg', price: '19.90', pay: '36', introduce: '24k金箔玫瑰花单支装学生创意礼品送女友母亲节生日礼物金色玫瑰', shop: '三清鞋服饰品', address: '广东 深圳', url: '' }, { src: './Img/15.jpg', price: '188.00', pay: '35', introduce: 'REEFUR狗头法斗斗牛犬车载香薰香水ins送男友情人节礼物香氛 摆件', shop: 't_1493522913989_0198', address: '上海', url: '' }, { src: './Img/16.jpg', price: '359.29', pay: '45', introduce: '999纯银宝宝婴儿生日礼物纯银碗筷勺子套装家用足银餐具周岁礼盒', shop: '希雯丫丫', address: '福建 莆田', url: '' },
  { src: './Img/17.jpg', price: '330.24', pay: '16', introduce: '足银999百福纯银梳子加厚结婚 生日礼物 送妻子女友妈妈礼品刮痧', shop: '伊家银饰', address: '山东 济南', url: '' }, { src: './Img/18.jpg', price: '1000', pay: '12', introduce: '旗胜水晶天然巴西幽灵四季春夏秋冬摆件球水滴收藏礼物一物一图', shop: '小马哥电子商务有限公司', address: '江苏 连云港', url: '' }, { src: './Img/19.jpg', price: '648.00', pay: '28', introduce: '纯银999银碗筷勺餐具套装长辈摆件福龙凤结婚宝宝满月周岁礼物', shop: '希雯丫丫', address: '福建 莆田', url: '' }, { src: './Img/20.jpg', price: '318.00', pay: '26', introduce: '钻戒 钥匙 水晶球 （圣诞节）情人节礼物', shop: '邓薇may', address: '广东 广州', url: '' },
  { src: './Img/21.jpg', price: '18.90', pay: '49', introduce: '特惠迎6.1送孩子朋友春节礼物矿物总汇天然水晶原石矿石标本', shop: '子怡水晶', address: '江苏 连云港', url: '' }, { src: './Img/22.jpg', price: '195.00', pay: '20', introduce: '法国官方|小王子水晶球雪花球 狐狸/玫瑰款 生日礼物摆件', shop: 'chenzihui_czh', address: '湖南 长沙', url: '' }, { src: './Img/23.jpg', price: '879.00', pay: '13', introduce: '阿鹏银匠 雪花银碗999纯银碗筷勺子套装宝宝生日礼物家用纯银餐具', shop: '洗礼云南', address: '云南 昆明', url: '' }, { src: './Img/24.jpg', price: '33.00', pay: '12', introduce: '结婚送礼 生日礼物 送闺蜜女友水晶旋转魔方相框摆台照片创意礼品', shop: 'q253955415', address: '浙江 金华', url: '' },
  { src: './Img/25.jpg', price: '25.00', pay: '17', introduce: '天然水晶原石矿石晶体标本摆件收藏把玩送人给孩子的礼物包邮促销', shop: '晶lingwen123456', address: '江苏 连云港', url: '' }, { src: './Img/26.jpg', price: '27.80', pay: '7', introduce: 'hellokitty水晶球送女生闺蜜生日礼物情侣哈喽KT猫创意旋转音乐盒', shop: '爱你永远98623', address: '浙江 金华', url: '' }, { src: './Img/27.jpg', price: '608.00', pay: '22', introduce: '纯银餐具999足银实心百福银碗银筷子银勺子套装婴儿宝宝生日礼物', shop: '秋之心梦缘', address: '山东 烟台', url: '' }, { src: './Img/28.jpg', price: '16.50', pay: '4', introduce: '金玫瑰 24k金箔玫瑰 金玫瑰花 创意七夕情人节礼物送女友老婆闺蜜', shop: '饰界魅影', address: '浙江 杭州', url: '' },
  { src: './Img/29.jpg', price: '138.00', pay: '6', introduce: '爱情银行银卡生日礼物女生特别送女友朋友老婆创意礼品520diy定制', shop: '平阳县银浩工艺品厂1980', address: '浙江 温州', url: '' }, { src: './Img/30.jpg', price: '14.90', pay: '4', introduce: '新品创意迷你天气预报瓶子风暴瓶送闺蜜男女朋友生日礼物客厅摆件', shop: '认清了真心话就能放的下丶', address: '陕西 西安', url: '' }, { src: './Img/31.jpg', price: '69.00', pay: '4', introduce: '武汉大学樱花标本武大旅游纪念品 非宙sola永生花情人节创意礼物', shop: 'kuangpeiling2', address: '湖北 武汉', url: '' }, { src: './Img/32.jpg', price: '18.99', pay: '2', introduce: '卧室桌面少女心小清新迷你一对小摆件送女友闺蜜友情可爱生日礼物', shop: 'huangxianhong81', address: '福建 厦门', url: '' },
  { src: './Img/33.jpg', price: '10.00', pay: '2', introduce: '金玫瑰花24k金箔玫瑰花束结婚纪念金秋教师节送老师 闺蜜精品礼物', shop: '好依佳首饰', address: '浙江 金华', url: '' }, { src: './Img/34.jpg', price: '1031.50', pay: '7', introduce: '结婚碗筷礼品 银碗勺筷套装 999足银餐具 六件套贺寿结婚礼物', shop: '凌志银饰旗航店', address: '福建 莆田', url: '' }, { src: './Img/35.jpg', price: '18.00', pay: '1', introduce: '金箔玫瑰花礼盒表白金色玫瑰送女朋友老婆闺蜜生日七夕情人节礼物', shop: '玲玲diy饰品配件', address: '浙江 金华', url: '' }, { src: './Img/36.jpg', price: '1337.60', pay: '6', introduce: '结婚碗筷礼品 银碗勺筷套装 999足银餐具 六件套贺寿结婚礼物', shop: 'zoujinzhu', address: '江苏 苏州', url: '' },
  { src: './Img/37.jpg', price: '4.90', pay: '1', introduce: '金玫瑰花24K金箔玫瑰花创意生日情人节礼物送女友闺蜜diy表白金花', shop: '8090恋之坊', address: '福建 福州', url: '' }, { src: './Img/38.jpg', price: '30.00', pay: '2', introduce: '创意生日礼物 摩天轮水晶球摆件七夕情人节送女生女闺蜜个性刻字', shop: '小贝20021123', address: '浙江 金华', url: '' }, { src: './Img/39.jpg', price: '636.00', pay: '6', introduce: '999纯银餐具足银银勺子银筷子家用龙凤银碗筷套装新结婚生日礼物', shop: '金凌菲', address: '浙江 温州', url: '' }, { src: './Img/40.jpg', price: '3.00', pay: '2', introduce: '24k金箔玫瑰花情人节礼物 厂家直销金玫瑰创意生日礼物女生送闺蜜', shop: '林剑敏00', address: '福建 莆田', url: '' },
];

class HotSale extends React.Component {
  list() {
    let list = [];
    let listall = goods.sort(function (x, y) { return (y.pay - x.pay) })
    for (let i = 0; i < 10; i++) {
      list.push(listall[i])
    }
    return list;
  }
  render() {
    return (
      <div className='HotSale'>
        <p>掌柜热卖</p>
        {this.list().map((i, index) => (
          <a href=''>
            <div className='img'>
              <img src={require(`${i.src}`)} alt='热卖' />
              <div>
                {i.introduce}
              </div>
            </div>
            <p>
              <span>&yen;{i.price}</span>
              <span>销量:{i.pay}</span>
            </p>
          </a>
        ))}
      </div>
    )
  }
}

export default HotSale;