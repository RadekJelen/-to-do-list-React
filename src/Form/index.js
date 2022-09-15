import { useRef, useState } from "react";
import { StyledForm, StyledButton, StyledInput } from "./styled";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  
  const inputFocus = useRef(null);
	
  const onFormSubmit = (event) => {
    event.preventDefault();
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
        ref={inputFocus}
        required
        autoFocus
      />
      <StyledButton 
				onClick={() => inputFocus.current.focus()}
        >
        Dodaj zadanie
      </StyledButton>
    </StyledForm>
  );
};

export default Form;