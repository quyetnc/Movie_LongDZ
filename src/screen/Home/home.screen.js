import {connect} from 'react-redux';
import Home from '../../components/Home/home.component';
const mapStateToProps = (state) => {
  return {
    loginReducers: state.loginReducers
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onLoadFilmAction: (username, password) => {
      dispatch(loginAction(username, password));
  }
};
}
const HomeScreen = connect(mapStateToProps, mapDispatchToProps)(Home);
export default HomeScreen;
