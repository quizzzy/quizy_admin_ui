import React from "react";
import { Container, Grid } from "@material-ui/core";
import ProfileList from "../../components/ProfileList";
import Bar from "../../components/Bar";

export default class Home extends React.Component {
    componentDidMount() {
        this.props.fetchProfiles();
        this.props.fetchScales();
    }

    render() {
        const { profiles, scales, isProfileLoaded } = this.props;
        return (
            <>
                <Bar />
                <Container fixed={true} maxWidth="lg" spacing={1}>
                    <Grid container direction="row">
                        <Grid item xs={12}>
                            {isProfileLoaded ? (
                                <ProfileList
                                    profiles={profiles}
                                    scales={scales}
                                />
                            ) : (
                                <h1>No data loaded</h1>
                            )}
                        </Grid>
                    </Grid>
                </Container>
            </>
        );
    }
}
