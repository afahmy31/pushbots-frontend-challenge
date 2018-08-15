import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Buttons from "./Buttons";
import Platforms from "./Platforms";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 3
  }
});

class Post extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          {this.props.data.apps.data.map((app, i) => (
            <Grid item xs={6} key={i}>
              <Paper className={classes.paper}>
                <h2>{app.title}</h2>
                <span>{app.devices} active</span> <Platforms data={app} />
                <hr />
                <Paper
                  className={classes.paper}
                  elevation={0}
                  style={{ padding: "20px 0px 10px 0px" }}
                >
                  <Buttons />
                </Paper>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Post);
