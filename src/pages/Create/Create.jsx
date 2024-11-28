import React from "react";
import Input from "../../components/Input/Input";
import { addNote } from "../../utils/local-data";
import { useNavigate } from "react-router-dom";

function Create() {
  const navigate = useNavigate();

  const handleAddNote = (notes) => {
    addNote(notes);
    navigate("/");
  };

  return <Input addNote={handleAddNote} />;
};

export default Create;
