import { loadNews } from "../sportnewsaction";
import { connect } from "react-redux";
import LoadYuleNews from "../../maincontent/newscomponent/yulenews";

const mapStateToProps = (state) => {
  return { yulenews: state.yulenews }
}

const mapDispatchToProps = (dispatch) => {
  return {
    news: (type) => {
      dispatch(loadNews(type))
    }
  }
}

const YuleNews = connect(mapStateToProps, mapDispatchToProps)(LoadYuleNews);
export default YuleNews;