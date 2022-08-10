import Form from "./Form";
import List from "./List";
import TextButtons from "./Text-Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container"
import { useState } from "react";

function App() {
  const [hideDoneTasks, setUpHideDone] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, content: "test", done: true },
    { id: 2, content: "test1", done: false},
  ]);

  const toggleHideDone = () => {
    setUpHideDone(hideDoneTasks => !hideDoneTasks);
  };

  const deleteTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
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
        body={<List tasks={tasks} hideDoneTasks={hideDoneTasks} deleteTask={deleteTask} />}
        headerButtons={<TextButtons tasks={tasks} hideDoneTasks={hideDoneTasks} toggleHideDone={toggleHideDone} />}
      />
    </Container>
  );
}

export default App;
