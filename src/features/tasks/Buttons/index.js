import { useDispatch, useSelector } from "react-redux";
import { selectHideDone, selectAreTasksEmpty, selectIsEveryTaskDone, selectIsEveryTaskHide, toggleHideDone, setAllDone } from "../tasksSlice";
import { StyledButton } from "./styled";

const Buttons = () => {
  const hideDone = useSelector(selectHideDone);
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const isEveryTaskHide = useSelector(selectIsEveryTaskHide);
  const dispatch = useDispatch();

  if (areTasksEmpty)
    return null;

  return (
    <StyledButton as="div">
      <StyledButton
        onClick={() => dispatch(toggleHideDone())}
        disabled={isEveryTaskHide}
      >
        {hideDone ? "Pokaż" : "Ukryj"} ukończone
      </StyledButton>
      <StyledButton
        onClick={() => dispatch(setAllDone())}
        disabled={isEveryTaskDone}
      >
        Ukończ wszystkie
      </StyledButton>
    </StyledButton>
  );
};
export default Buttons;