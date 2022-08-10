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
    { id: 2, content: "test1", done: false },
  ]);

  const toggleHideDone = () => {
    setUpHideDone(hideDoneTasks => !hideDoneTasks);
  };

  const deleteTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }
      return task;
    }));
  };

  const markAllTasksDone = () => {
    setTasks(tasks => tasks.map(task => ({ ...task, done: true })));
  };

  const addNewTask = (content) => {
    setTasks(tasks => [...tasks, {
      content,
      done: false,
      id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
    },
    ]);
  };

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
        headerButtons={<TextButtons
          tasks={tasks}
          hideDoneTasks={hideDoneTasks}
          toggleHideDone={toggleHideDone}
          markAllTasksDone={markAllTasksDone}
        />}
      />
    </Container>
  );
}

export default App;
