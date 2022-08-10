import "./style.css";

const TextButtons = ({ tasks, hideDoneTasks, toggleHideDone }) => {
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
        disabled={tasks.every(({ done }) => done)}
			>
				Ukończ wszystkie
			</button>
    </div>
  );
};
export default TextButtons;