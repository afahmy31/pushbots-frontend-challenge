import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Button } from "../../../node_modules/@material-ui/core";

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 20
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={7} sm={4} style={{ display: "flex" }}>
          <Paper className={classes.paper} elevation= {0} style ={{fontSize: '10px', fontWeight: 'bold'}}>
            {/* <i className="fas fa-check" /> */}
            COMPLETE <span> {props.data.completedApps}</span>
          </Paper>
          <Paper className={classes.paper} elevation={0} style ={{fontSize: '10px',fontWeight: 'bold'}}>
            {/* <i className="fas fa-cog" /> */}
            IN SETUP
            <span> {props.data.inProgressApps}</span>
          </Paper>
          <Paper className={classes.paper} elevation={0} style ={{fontSize: '10px', fontWeight: 'bold'}}>
            {/* <i className="fas fa-share" /> */}
            SHARED
            <span> {props.data.sharedApps}</span>
          </Paper>
          <Paper className={classes.paper} elevation={0} style ={{fontSize: '10px', fontWeight: 'bold'}}>
            {/* <i claclassNamess="fas fa-chart-bar" /> */}
            ACTIVE
            <span> {props.data.activeApps}</span>
          </Paper>
        </Grid>
        <Grid item xs={5} sm={5}>
          <Paper className={classes.paper} elevation={0}>
            1-4 Of 4
          </Paper>
        </Grid>

        <Grid item xs={6} sm={3}>
          <Button
            style={{
              backgroundColor: "#0497A8",
              width: "100%",
              color: "white"
            }}
          >
            + NEW APP
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FullWidthGrid);
