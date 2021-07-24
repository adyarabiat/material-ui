import React, { useState } from "react";
import { Typography, Button, Container, TextField } from "@material-ui/core";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";

import useStyles from "./CreateStyles";

const Create = () => {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();

    // when we fix and fill then to change again
    setTitleError(false);
    setDetailsError(false);

    if (title === "") {
      setTitleError(true);
    }
    if (details === "") {
      setDetailsError(true);
    }

    if (title && details) {
      console.log(title, details);
    }
  };
  return (
    <Container>
      <Typography
        component="h2"
        variant="h6"
        color="textSecondary"
        gutterBottom
      >
        Create A Note
      </Typography>

      <form onSubmit={submitHandler} noValidate autoComplete="off">
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className={classes.field}
          label="Note Title"
          color="secondary"
          variant="outlined"
          fullWidth
          required
          error={titleError}
        />
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          value={details}
          className={classes.field}
          label="Details"
          color="secondary"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          required
          error={detailsError}
        />
        <Button
          type="submit"
          color="secondary"
          variant="contained"
          endIcon={<ArrowForwardIosOutlinedIcon />}
        >
          Submit
        </Button>
      </form>

      <br />
    </Container>
  );
};

export default Create;
