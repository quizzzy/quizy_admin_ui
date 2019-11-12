import { connect } from "react-redux";
import { checkToken } from "../../actions/checkToken";
import Home from "../../pages/Home/Home";

const mapStateToProps = state => ({
  shouldAllowAuth: state.login.shouldAllowAuth,
  token: state.login.token
});

const mapDispatchToProps = dispatch => ({
  checkToken: data => dispatch(checkToken(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
