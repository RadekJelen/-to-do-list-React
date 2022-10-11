import Form from "./Form";
import List from "./List";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import DoneTasksButtons from "./TextButtons/DoneTasksButtons";
import ExampleTasksButton from "./TextButtons/ExampleTasksButton";


function TasksPage() {

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
        headerButtons={<ExampleTasksButton />}
      />
      <Section
        title="Lista zadań"
        body={<List />}
        headerButtons={<DoneTasksButtons />}
      />
    </Container>
  );
};

export default TasksPage;