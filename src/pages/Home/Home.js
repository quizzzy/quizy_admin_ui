import React, { useEffect, Fragment } from "react";
import { Redirect } from "react-router-dom";
import { Container, Grid } from "@material-ui/core";
import ProfileList from "../../components/ProfileList";
import Bar from "../../components/Bar";

export default class Home extends React.Component {
  componentDidMount() {
    this.props.checkToken(this.props.token);
    this.props.fetchProfiles();
    this.props.fetchScales();
  }

  render() {
    const {
      shouldAllowAuth,
      profiles,
      scales,
      isProfileLoaded,
      isScalesLoaded
    } = this.props;
    console.log(this.props);
    if (shouldAllowAuth) {
      return (
        <Fragment>
          <Bar />
          <Container fixed={true} maxWidth="lg" spacing={1}>
            <Grid container direction="row">
              <Grid item xs={12}>
                {isProfileLoaded ? (
                  <ProfileList profiles={profiles} scales={scales} />
                ) : (
                  <h1>No data loaded</h1>
                )}
              </Grid>
            </Grid>
          </Container>
        </Fragment>
      );
    }
    return null;
  }
}
