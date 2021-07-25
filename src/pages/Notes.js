import React, { useEffect, useState } from "react";
import { Container, Grid } from "@material-ui/core";

import NoteCard from "../components/NoteCard";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchData = await fetch("http://localhost:8000/notes");
      const data = await fetchData.json();
      setNotes(data);
    };

    fetchData();
  }, []);

  const deleteHanlder = async (id) => {
    await fetch("http://localhost:8000/notes/" + id, {
      method: "DELETE",
    });

    const newNotes = notes.filter((note) => {
      return note.id !== id;
    });

    setNotes(newNotes);
  };

  return (
    <Container>
      {/* <Grid container>
        <Grid item md={3} xs={12} sm={6}>
          <Paper>1</Paper>
        </Grid>
        <Grid item md={3} xs={12} sm={6}>
          <Paper>2</Paper>
        </Grid>
        <Grid item md={3} xs={12} sm={6}>
          <Paper>3</Paper>
        </Grid>
        <Grid item md={3} xs={12} sm={6}>
          <Paper>4</Paper>
        </Grid>
      </Grid> */}

      <Grid container spacing={3}>
        {notes.map((note) => {
          return (
            <Grid key={note.id} item xs={12} md={6} lg={4}>
              <NoteCard note={note} onDelete={deleteHanlder} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Notes;
