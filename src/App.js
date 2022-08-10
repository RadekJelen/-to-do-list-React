import Form from "./Form";
import List from "./List";
import TextButtons from "./Text-Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container"
import { useState } from "react";

const tasks = [
  { id: 1, content: "test", done: true },
  { id: 2, content: "test1", done: false},
];

function App() {
  const [hideDoneTasks, setUpHideDone] = useState(false);

  const toggleHideDone = () => {
    setUpHideDone(hideDoneTasks => !hideDoneTasks);
  };

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
        headerButtons={<TextButtons tasks={tasks} hideDoneTasks={hideDoneTasks} toggleHideDone={toggleHideDone} />}
      />
    </Container>
  );
}

export default App;
