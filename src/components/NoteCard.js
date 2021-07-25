import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Typography,
  makeStyles,
} from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

const useStyles = makeStyles(() => {
  return {
    test: {
      // to apply specific styling depends on what we want
      border: (note) => {
        if (note.category === "work") {
          return "1px solid blue";
        }
      },
    },
  };
});
const NoteCard = ({ note, onDelete }) => {
  const classes = useStyles(note);

  return (
    <div>
      <Card elevation={3} className={classes.test}>
        <CardHeader
          title={note.title}
          subheader={note.category}
          action={
            <IconButton onClick={() => onDelete(note.id)}>
              <DeleteOutlineIcon />
            </IconButton>
          }
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default NoteCard;
