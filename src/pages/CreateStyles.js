import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  // i am not using it just for demonstration purposes
  btn: {
    fontSize: 60,
    backgroundColor: "violet",
    "&:hover": {
      backgroundColor: "blue",
    },
  },
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});

export default useStyles;
