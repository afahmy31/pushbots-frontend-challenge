import React from "react";
import classNames from "classnames";
import { loadCSS } from "fg-loadcss/src/loadCSS";
import { withStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";

const styles = theme => ({
  root: {
    display: "flex"
  },
  icon: {
    margin: theme.spacing.unit * 0.2
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
    var arr = [];
    for (var platform in this.props.data.platforms) {
      if (this.props.data.platforms.hasOwnProperty(platform)) {
        platform === "ios" ? (platform = "apple") : null;
        arr.push(platform);
      }
    }
    return (
      <div className={classes.root}>
        {arr.map((platform, i) => (
          <Icon
            className={classNames(classes.icon, `fab fa-${platform} fa-sm`)}
            color="action"
            key={i}
            style={{ marginBottom: "20px" }}
          />
        ))}
      </div>
    );
  }
}

export default withStyles(styles)(FontAwesome);
