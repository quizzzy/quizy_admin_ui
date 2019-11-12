import React, { useEffect, Fragment } from "react";
import { Redirect } from "react-router-dom";
import { Container, Grid } from "@material-ui/core";
import ProfileList from "../../components/ProfileList";
import Bar from "../../components/Bar";

export default function Home({ checkToken, token, shouldAllowAuth }) {
  useEffect(() => {
    checkToken(token);
  });

  if (shouldAllowAuth) {
    return (
      <Fragment>
        <Bar />
        <Container fixed={true} maxWidth="lg" spacing={1}>
          <Grid container direction="row">
            <Grid item xs={12}>
              <ProfileList />
            </Grid>
          </Grid>
        </Container>
      </Fragment>
    );
  }
  return null;
}
