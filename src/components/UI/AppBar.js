import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import classNames from "classnames";
import Avatar from "@material-ui/core/Avatar";
import searchIcon from "./Images/search_white_27x27.png";
import logo from "./Images/android_white_48x48.png";
import avatar from "./Images/avatar.png";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import "./AppBar.css";
const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  }
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "#0497A8" }}>
        <Toolbar>
          <IconButton aria-label="More">
            <MenuIcon style={{ color: "white" }} />
          </IconButton>
          <img src={logo} id="logo" alt="logo" />
          <img src={searchIcon} alt="search" />
          <Typography color="inherit" className={classes.flex} />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 18 18"
            id="users"
          >
            <path d="M6 8c1.11 0 2-.9 2-2s-.89-2-2-2c-1.1 0-2 .9-2 2s.9 2 2 2zm6 0c1.11 0 2-.9 2-2s-.89-2-2-2c-1.11 0-2 .9-2 2s.9 2 2 2zM6 9.2c-1.67 0-5 .83-5 2.5V13h10v-1.3c0-1.67-3.33-2.5-5-2.5zm6 0c-.25 0-.54.02-.84.06.79.6 1.34 1.4 1.34 2.44V13H17v-1.3c0-1.67-3.33-2.5-5-2.5z" />
          </svg>
          <span>{props.data.devices}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            id="grid"
          >
            <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z" />
          </svg>
          <span>{props.data.totalApps}</span>
          <Typography variant="subheading" color="inherit" className="Username">
            UserName
            <Typography variant="caption" color="inherit">
              Premium
            </Typography>
          </Typography>
          <Avatar
            alt="Adelle Charles"
            src={avatar}
            className={classNames(classes.avatar, classes.bigAvatar)}
          />
          <IconButton aria-label="More">
            <MoreVertIcon style={{ color: "white" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(ButtonAppBar);
