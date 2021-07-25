import React from "react";
import {
  Drawer,
  makeStyles,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { SubjectOutlined, AddCircleOutline } from "@material-ui/icons";
import { useHistory, useLocation } from "react-router-dom";

const drawerWidth = 240;

// we make it as function so we can recive arguments and we can change based on the theme
const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
    },
    page: {
      backgroundColor: "#f1231231",
      width: "100%",
      height: "100vh",
      padding: theme.spacing(3),
    },
    drawer: {
      width: drawerWidth,
    },
    drawPaper: {
      width: drawerWidth,
    },
    active: {
      backgroundColor: "#f5f6",
    },
    title: {
      padding: theme.spacing(2),
    },
  };
});

const Layout = (props) => {
  const history = useHistory();
  const location = useLocation();

  const classes = useStyles();

  const menuItems = [
    {
      text: "My Notes",
      icon: <SubjectOutlined color="secondary" />,
      path: "/",
    },
    {
      text: "Create Notes",
      icon: <AddCircleOutline color="secondary" />,
      path: "/create",
    },
  ];

  return (
    <div className={classes.root}>
      {/* app bar */}

      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawPaper }}
      >
        <div>
          <Typography variant="h5" className={classes.title}>
            Ninja Notes
          </Typography>
        </div>

        {/* List / links */}

        <List>
          {menuItems.map((item) => {
            return (
              <ListItem
                button
                key={item.text}
                onClick={() => {
                  history.push(item.path);
                }}
                className={
                  location.pathname === item.path ? classes.active : null
                }
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            );
          })}
        </List>
      </Drawer>
      <div className={classes.page}>{props.children}</div>
    </div>
  );
};

export default Layout;
