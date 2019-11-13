import React, { useEffect, useState } from "react";
import { Paper, Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { APP_URI } from "../../constants";
import indigo from "@material-ui/core/colors/indigo";

const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto",
    marginTop: "20px",
    padding: "10px 0"
  },
  box: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    color: indigo[500]
  },
  subtitle: {
    fontSize: "12px",
    lineHeight: "1.5",
    textAlign: "center",
    marginTop: "5px"
  }
});

function StatisticsCircleItem(props) {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Typography variant="h4" className={classes.title}>
        {props.number}
      </Typography>
      <Typography variant="subtitle1" className={classes.subtitle}>
        {props.desc}
      </Typography>
    </Box>
  );
}

function Statistics(props) {
  const classes = useStyles();
  const [statistics, setStat] = useState({
    scales: [],
    completedProfiles: 0
  });

  useEffect(() => {
    async function fetchAdminStatistics(url) {
      const response = await fetch(url);

      try {
        const stat = await response.json();
        setStat(stat);
      } catch (error) {
        console.error(error);
      }
    }

    fetchAdminStatistics(`${APP_URI}/admin/statistics`);
  }, []);

  return (
    <Paper className={classes.root}>
      <Grid container direction="row" spacing={2}>
        <Grid item xs={2}>
          <StatisticsCircleItem
            number={statistics.completedProfiles}
            desc="Раз пройдено квіз"
          />
        </Grid>
        {statistics.scales.map(stat => {
          return (
            <Grid item xs={2}>
              <StatisticsCircleItem
                number={stat.value}
                desc={`Середнє значення для категорії: ${stat.title}`}
              />
            </Grid>
          );
        })}
      </Grid>
    </Paper>
  );
}

export default Statistics;
