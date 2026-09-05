const Task = ({ title, counter, completed, id, setTasks }) => {
    const handleCompleted = () => {
        setTasks(oldValue => oldValue.map(task => {
            if (task.id === id) {
                return {
                    ...task,
                    completed: !task.completed
                }
            }
            return task;
        }));
    };

    const handleDeleted = () => {
        setTasks(oldValue => oldValue.filter(task => task.id !== id));  
    };

    const handleCounter = (give) => {
        setTasks(oldValue => oldValue.map(task => {
            if (task.id === id) {
                return {
                    ...task,
                    counter: task.counter + give
                }
            }
            return task;
        }));
    };

    return (
        <div className="task-row">
            <button className={`task-check ${completed ? 'checked' : ''}`} onClick={handleCompleted}>
                {completed ? '✓' : ''}
            </button>
            <span className={`task-title ${completed ? 'done' : ''}`}>
                {title}
            </span>
            <div className="estimate-stepper">
                <button className="stepper-btn" onClick={() => handleCounter(-1)}>−</button>
                <span className="stepper-value">{counter}</span>
                <button className="stepper-btn" onClick={() => handleCounter(1)}>+</button>
            </div>
            <button className="quick-bump" onClick={() => handleCounter(2)}>
                +2
            </button>
            <button className="icon-danger" onClick={handleDeleted}>
                ✕
            </button>
        </div>
    )
};

export default Task;