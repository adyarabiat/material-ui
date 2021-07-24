import React, { useEffect, useState } from "react";

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

  return (
    <div>
      {notes.map((note) => {
        return <p key={note.id}>{note.title}</p>;
      })}
    </div>
  );
};

export default Notes;
