import { useSelector } from "react-redux";
import { useParams } from "react-router";
import Container from "../../../common/Container";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import { getTaskById } from "../tasksSlice";
import { TaskDetails } from "./styled";


const TasksPage = () => {
  const { id } = useParams();
  const task = useSelector(state => getTaskById(state, id));

  return (
    <Container>
      <Header title="Szczegóły zadania" />
      <Section
        title={task ? task.content : "Nie znaleziono zadania 😔"}
        body={
          !!task && (
            <TaskDetails>
              <strong>Ukończone: </strong>{task.done ? "Tak" : "Nie"}
            </TaskDetails>
          )
        }
      />
    </Container>
  );
};

export default TasksPage;