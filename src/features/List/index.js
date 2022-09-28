import { StyledList, StyledItem, StyledSpan, StyledButton, StyledDeleteButton } from "./styled";

const List = ({ tasks, hideDoneTasks, deleteTask, toggleTaskDone }) => (
  <StyledList>
    {tasks.map(task => (
      <StyledItem
        key={task.id}
        hidden={task.done && hideDoneTasks}
      >
        <StyledButton
          onClick={() => toggleTaskDone(task.id)}
        >
          {task.done ? "✔" : ""}
        </StyledButton>
        <StyledSpan done={task.done}
        >
          {task.content}
        </StyledSpan>
        <StyledDeleteButton onClick={() => deleteTask(task.id)}
        >
          🗑
        </StyledDeleteButton>
      </StyledItem>
    ))}
  </StyledList>
);

export default List;