import Form from "../features/Form";
import List from "../features/List";
import Buttons from "../features/Buttons";
import Section from "../common/Section";
import Header from "../common/Header";
import { useTasks } from "../useTasks";
import { useState } from "react";
import { StyledMain } from "./styled";


function App() {
  const [hideDoneTasks, setUpHideDone] = useState(false);

  const toggleHideDone = () => {
    setUpHideDone(hideDoneTasks => !hideDoneTasks);
  };

  const { tasks, deleteTask, toggleTaskDone, markAllTasksDone, addNewTask } = useTasks();

  return (
    <StyledMain>
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
    </StyledMain>
  );
};

export default App;
