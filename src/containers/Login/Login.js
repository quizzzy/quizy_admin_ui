import { connect } from "react-redux";
import { fetchLogin } from "../../actions/login.action";
import Login from "../../pages/Login/Login";

const mapStateToProps = state => ({
    pending: state.login.pending,
    loginSuccess: state.login.loginSuccess
});

const mapDispatchToProps = dispatch => ({
    fetchLogin: data => dispatch(fetchLogin(data))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
