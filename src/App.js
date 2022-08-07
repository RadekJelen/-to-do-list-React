import Form from "./Form";
import List from "./List";
import TextButtons from "./Text-Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container"

const tasks = [
  { id: 1, content: "test", done: true },
  { id: 2, content: "test1", done: false },
];
const hideDoneTasks = false;

function App() {
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        body={<List tasks={tasks} hideDoneTasks={hideDoneTasks} />}
        headerButtons={<TextButtons tasks={tasks} hideDoneTasks={hideDoneTasks} />}
      />
    </Container>
  );
}

export default App;
