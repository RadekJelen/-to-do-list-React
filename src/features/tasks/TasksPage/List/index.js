import { useDispatch, useSelector } from "react-redux";
import { selectTasksByQuery, selectHideDone, toggleTaskDone, removeTask } from "../../tasksSlice";
import { useQueryParameter } from "../queryParameters";
import { searchQueryParameterName } from "../serchQueryParameterName";
import { toTask } from "../../../../routes";
import { StyledList, StyledItem, StyledSpan, StyledButton, StyledDeleteButton, StledTaskLink } from "./styled";

const List = () => {
  const query = useQueryParameter(searchQueryParameterName);

	const tasks = useSelector(state => selectTasksByQuery(state, query));
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
          <StyledSpan done={task.done}>
            <StledTaskLink to={toTask({ id: task.id })}>{task.content}</StledTaskLink>
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