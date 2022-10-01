import { useDispatch, useSelector } from "react-redux";
import { selectTasks, selectHideDone, toggleTaskDone, removeTask } from "../tasksSlice";
import { StyledList, StyledItem, StyledSpan, StyledButton, StyledDeleteButton } from "./styled";

const List = () => {
  const tasks = useSelector(selectTasks);
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();

  return (
    <StyledList>
      {tasks.map(task => (
        <StyledItem
          key={task.id}
          hidden={task.done && hideDone}
        >
          <StyledButton
            onClick={() => dispatch(toggleTaskDone(task.id))}
          >
            {task.done ? "✔" : ""}
          </StyledButton>
          <StyledSpan done={task.done}
          >
            {task.content}
          </StyledSpan>
          <StyledDeleteButton remove onClick={() => dispatch(removeTask(task.id))}
          >
            🗑
          </StyledDeleteButton>
        </StyledItem>
      ))}
    </StyledList>
  )
};

export default List;