import Form from "./Form";
import List from "./List";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container"
import { useState, useEffect } from "react";

function App() {
  const [hideDoneTasks, setUpHideDone] = useState(false);
  const storedTasks = localStorage.getItem("tasks");
	const [tasks, setTasks] = useState(
		storedTasks ? JSON.parse(storedTasks) : []
	);

	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(tasks));
	}, [tasks]);

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
