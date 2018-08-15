import React from "react";
import classNames from "classnames";
import { loadCSS } from "fg-loadcss/src/loadCSS";
import { withStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";

const styles = theme => ({
  root: {
    display: "flex"
  },
  icon: {
    margin: theme.spacing.unit * 1.2
  },
  iconHover: {
    ":hover": {
      color: "#0497A8"
    }
  }
});

class FontAwesome extends React.Component {
  componentDidMount() {
    loadCSS(
      "https://use.fontawesome.com/releases/v5.1.0/css/all.css",
      document.querySelector("#insertion-point-jss")
    );
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <IconButton>
          <Icon
            className={classNames(classes.icon, "fa fa-paper-plane")}
            color="action"
          />
        </IconButton>
        <IconButton>
          <Icon
            className={classNames(classes.icon, "fa fa-history")}
            color="action"
          />
        </IconButton>
        <IconButton>
          <Icon
            className={classNames(classes.icon, "fa fa-mobile")}
            color="action"
          />
        </IconButton>
        <IconButton>
          <Icon
            className={classNames(classes.icon, "fa fa-cog")}
            color="action"
          />
        </IconButton>
        <IconButton>
          <Icon
            className={classNames(classes.icon, "fa fa-user-friends")}
            color="action"
          />
        </IconButton>
        <IconButton>
          <Icon
            className={classNames(classes.icon, "fa fa-chart-area")}
            color="action"
          />
        </IconButton>
        <IconButton>
          <Icon
            className={classNames(classes.icon, "fab fa-twitter")}
            color="action"
          />
        </IconButton>
      </div>
    );
  }
}

export default withStyles(styles)(FontAwesome);
