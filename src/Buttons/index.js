import "./style.css";

const Buttons = ({ tasks, hideDoneTasks, toggleHideDone, markAllTasksDone }) => {
  if (tasks.length === 0) {
    return null;
  }

  return (
    <div className="textButtons">
      <button
        className="textButtons__button"
        onClick={toggleHideDone}
        disabled={tasks.every(({ done }) => !done)}
      >
        {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
      </button>
      <button
        className="textButtons__button"
        onClick={markAllTasksDone}
        disabled={tasks.every(({ done }) => done)}
      >
        Ukończ wszystkie
      </button>
    </div>
  );
};
export default Buttons;