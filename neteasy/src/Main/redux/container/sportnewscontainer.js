import { loadNews } from "../sportnewsaction";
import { connect } from "react-redux";
import LoadSportNews from "../../maincontent/newscomponent/sportnews";

const mapStateToProps = (state) => {
  return { sportnews: state.sportnews }
}

const mapDispatchToProps = (dispatch) => {
  return {
    news: (type) => {
      dispatch(loadNews(type))
    }
  }
}

const SportNews = connect(mapStateToProps, mapDispatchToProps)(LoadSportNews);
export default SportNews;