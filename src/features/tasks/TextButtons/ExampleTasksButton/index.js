import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectLoading } from "../../tasksSlice";
import { StyledButton, StyledDiv } from "../styled";

const ExampleTasksButton = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  return (
    <StyledDiv>
      <StyledButton
        disabled={loading}
        onClick={() => dispatch(fetchExampleTasks())}
      >
        {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
      </StyledButton>
    </StyledDiv>
  )
};

export default ExampleTasksButton;