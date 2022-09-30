import { useDispatch, useSelector } from "react-redux";
import { selectTasks, toggleHideDone, setAllDone } from "../tasksSlice";
import { StyledButton } from "./styled";

const Buttons = () => {
  const { tasks, hideDone } = useSelector(selectTasks);
	const dispatch = useDispatch();

  if (tasks.length === 0) {
    return null;
  }

  return (
    <StyledButton as="div">
      <StyledButton
        onClick={() => dispatch(toggleHideDone())}
        disabled={tasks.every(({ done }) => !done)}
      >
        {hideDone ? "Pokaż" : "Ukryj"} ukończone
      </StyledButton>
      <StyledButton
        onClick={() => dispatch(setAllDone())}
        disabled={tasks.every(({ done }) => done)}
      >
        Ukończ wszystkie
      </StyledButton>
    </StyledButton>
  );
};
export default Buttons;