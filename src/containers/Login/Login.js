import { connect } from "react-redux";
import { fetchLogin } from "../../actions/login";
import Login from "../../pages/Login/Login";

const mapStateToProps = state => ({
    pending: state.pending,
    loginSuccess: state.loginSuccess
});

const mapDispatchToProps = dispatch => ({
    fetchLogin: data => dispatch(fetchLogin(data))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
