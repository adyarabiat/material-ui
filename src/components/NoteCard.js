import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Typography,
  makeStyles,
  Avatar,
} from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { yellow, blue, green, pink } from "@material-ui/core/colors";

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
    avatar: {
      backgroundColor: (note) => {
        if (note.category === "work") {
          return yellow[700];
        }
        if (note.category === "money") {
          return green[500];
        }
        if (note.category === "todos") {
          return pink[500];
        }
        return blue[500];
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
          avatar={
            <Avatar className={classes.avatar}>
              {note.category[0].toUpperCase()}
            </Avatar>
          }
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
