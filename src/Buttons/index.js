import { StyledButton } from "./styled";

const Buttons = ({ tasks, hideDoneTasks, toggleHideDone, markAllTasksDone }) => {
  if (tasks.length === 0) {
    return null;
  }

  return (
    <StyledButton as="div">
      <StyledButton
        onClick={toggleHideDone}
        disabled={tasks.every(({ done }) => !done)}
      >
        {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
      </StyledButton>
      <StyledButton
        onClick={markAllTasksDone}
        disabled={tasks.every(({ done }) => done)}
      >
        Ukończ wszystkie
      </StyledButton>
    </StyledButton>
  );
};
export default Buttons;