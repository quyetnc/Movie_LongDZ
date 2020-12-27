import {connect} from 'react-redux';
import Login from '../../components/Login/login.component';
const mapStateToProps = (state) => {
  return {
    loginReducers: state.loginReducers
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onLoginAction: (username, password) => {
      dispatch(loginAction(username, password));
  }
};
}
const LoginScreen = connect(mapStateToProps, mapDispatchToProps)(Login);
export default LoginScreen;
