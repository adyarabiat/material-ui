import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Typography,
} from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

const NoteCard = ({ note, onDelete }) => {
  return (
    <div>
      <Card elevation={3}>
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
