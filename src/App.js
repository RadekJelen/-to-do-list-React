import Form from "./Form";
import List from "./List";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container"
import { useTasks } from "./useTasks";
import { useState } from "react";


function App() {
  const [hideDoneTasks, setUpHideDone] = useState(false);

  const toggleHideDone = () => {
    setUpHideDone(hideDoneTasks => !hideDoneTasks);
  };

  const { tasks, deleteTask, toggleTaskDone, markAllTasksDone, addNewTask } = useTasks();
  
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />
      <Section
        title="Lista zadań"
        body={<List
          tasks={tasks}
          hideDoneTasks={hideDoneTasks}
          deleteTask={deleteTask}
          toggleTaskDone={toggleTaskDone}
        />}
        headerButtons={<Buttons
          tasks={tasks}
          hideDoneTasks={hideDoneTasks}
          toggleHideDone={toggleHideDone}
          markAllTasksDone={markAllTasksDone}
        />}
      />
    </Container>
  );
};

export default App;
