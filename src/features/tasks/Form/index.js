import { useRef, useState } from "react";
import { StyledForm, StyledButton, StyledInput } from "./styled";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  
  const inputRef = useRef(null);
	
  const onFormSubmit = (event) => {
    event.preventDefault();
    inputRef.current.focus();
    if (newTaskContent.trim() === "") {
      return;
    };

    addNewTask(newTaskContent.trim());
    setNewTaskContent("")
  };

  return (
    <StyledForm
      onSubmit={onFormSubmit}
    >
      <StyledInput
        placeholder="Co jest do zrobienia?"
        value={newTaskContent}
        onChange={({ target }) => setNewTaskContent(target.value)}
        ref={inputRef}
        required
        autoFocus
      />
      <StyledButton>
        Dodaj zadanie
      </StyledButton>
    </StyledForm>
  );
};

export default Form;