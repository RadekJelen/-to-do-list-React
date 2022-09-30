import { useDispatch, useSelector } from "react-redux";
import { selectTasks, toggleTaskDone, removeTask } from "../tasksSlice";
import { StyledList, StyledItem, StyledSpan, StyledButton, StyledDeleteButton } from "./styled";

const List = () => {
  const { tasks, hideDone } = useSelector(selectTasks);

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