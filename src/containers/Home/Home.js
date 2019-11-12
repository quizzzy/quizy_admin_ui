import { connect } from "react-redux";
import { checkToken } from "../../actions/checkToken";
import { fetchProfiles } from "../../actions/profile.action";
import { fetchScales } from "../../actions/scales.action";
import Home from "../../pages/Home/Home";

const mapStateToProps = state => ({
  shouldAllowAuth: state.login.shouldAllowAuth,
  token: state.login.token,
  profiles: state.profiles.profiles,
  isProfileLoaded: !state.profiles.pending,
  scales: state.scales.scales,
  isScaleLodaded: !state.scales.pending
});

const mapDispatchToProps = dispatch => ({
  checkToken: data => dispatch(checkToken(data)),
  fetchProfiles: () => dispatch(fetchProfiles()),
  fetchScales: () => dispatch(fetchScales())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
