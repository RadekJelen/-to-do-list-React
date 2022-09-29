import Form from "./Form";
import List from "./List";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import { useTasks } from "../../useTasks";
import { useState } from "react";


function TasksSide () {
  const [hideDoneTasks, setUpHideDone] = useState(false);

  const toggleHideDone = () => {
    setUpHideDone(hideDoneTasks => !hideDoneTasks);
  };

  const { tasks, deleteTask, toggleTaskDone, markAllTasksDone, addNewTask } = useTasks();

  return (
    <>
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
    </>
  );
};

export default TasksSide;