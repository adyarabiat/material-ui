import React from "react";
import { Drawer, makeStyles, Typography } from "@material-ui/core";

const drawerWidth = 240;
const useStyles = makeStyles({
  root: {
    display: "flex",
  },
  page: {
    backgroundColor: "#f1231231",
    width: "100%",
    height: "100vh",
  },
  drawer: {
    width: drawerWidth,
  },
  drawPaper: {
    width: drawerWidth,
  },
});
const Layout = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* app bar */}

      {/* side drawer */}

      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawPaper }}
      >
        <div>
          <Typography variant="h5">Ninja Notes</Typography>
        </div>
      </Drawer>
      <div className={classes.page}>{props.children}</div>
    </div>
  );
};

export default Layout;
