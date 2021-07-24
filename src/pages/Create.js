import React, { useState } from "react";
import {
  Typography,
  Button,
  Container,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  FormControl,
} from "@material-ui/core";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";
import { useHistory } from "react-router-dom";
import useStyles from "./CreateStyles";

const Create = () => {
  const history = useHistory();
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState("money");

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
      fetch("http://localhost:8000/notes", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          title,
          details,
          category,
        }),
      }).then(() => {
        history.push("/");
      });
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
        <FormControl className={classes.field}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <FormControlLabel value="money" control={<Radio />} label="Money" />
            <FormControlLabel value="todos" control={<Radio />} label="Todos" />
            <FormControlLabel
              value="reminders"
              control={<Radio />}
              label="Reminders"
            />
            <FormControlLabel value="work" control={<Radio />} label="Work" />
          </RadioGroup>
        </FormControl>
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
