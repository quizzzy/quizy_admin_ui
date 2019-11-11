import { connect } from "react-redux";
import { checkToken } from "../../actions/checkToken";
import Home from "../../pages/Home/Home";

const mapStateToProps = state => ({
    shouldAllowAuth: state.shouldAllowAuth,
    token: state.token
});

const mapDispatchToProps = dispatch => ({
    checkToken: data => dispatch(checkToken(data))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
