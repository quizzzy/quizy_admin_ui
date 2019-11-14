import { connect } from 'react-redux';
import { checkToken } from '../../actions/check-token.action';
import { fetchProfiles } from '../../actions/profile.action';
import { fetchScales } from '../../actions/scales.action';
import Home from '../../pages/Home/Home';
import withAuth from '../withAuth/withAuth';

const mapStateToProps = state => ({
	shouldAllowAuth: state.login.shouldAllowAuth,
	shouldLogAgain: state.login.shouldLogAgain,
	token: state.login.token,
	profiles: state.profiles.profiles,
	isProfileLoaded: !state.profiles.pending,
	scales: state.scales.scales,
	isScaleLodaded: !state.scales.pending,
});

const mapDispatchToProps = dispatch => ({
	checkToken: data => dispatch(checkToken(data)),
	fetchProfiles: () => dispatch(fetchProfiles()),
	fetchScales: () => dispatch(fetchScales()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withAuth(Home));
