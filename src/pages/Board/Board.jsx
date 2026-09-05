const PageBoard = () => {
    return (
        <section className="page" id="page-board">
            <div className="page-header">
                <h1 className="page-title">Board</h1>
                <p className="page-subtitle">Sprint 24, growth pod</p>
            </div>

            <div
                className="mount-wrap"
                data-hook="3.1 useState + useEffect (fetch on mount)">
                <div className="mount-point stats-row" id="mount-stats">
                    <div className="stat-card">
                        <div className="stat-value">24</div>
                        <div className="stat-label">Open</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-value">9</div>
                        <div className="stat-label">In progress</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-value">61</div>
                        <div className="stat-label">Done this sprint</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-value">7.4</div>
                        <div className="stat-label">Velocity</div>
                    </div>
                </div>
            </div>

            <div className="board-toolbar">
                <div className="mount-wrap" data-hook="1.2 useState (toggle)">
                    <div
                        className="mount-point switch-row"
                        id="mount-show-completed">
                        <span className="switch"></span>
                        <span>Show completed tasks</span>
                    </div>
                </div>
            </div>

            <div
                className="mount-wrap"
                data-hook="1.6 array · 1.1 counter · 1.5 functional update">
                <div className="mount-point" id="mount-tasklist">
                    <div className="add-task-row">
                        <input
                            className="input grow"
                            placeholder="Add a task and press Enter..."
                        />
                        <button className="btn">Add</button>
                    </div>
                    <div className="task-list">
                        <div className="task-row">
                            <button className="task-check"></button>
                            <span className="task-title">
                                Migrate onboarding flow to new design
                            </span>
                            <div className="estimate-stepper">
                                <button className="stepper-btn">−</button>
                                <span className="stepper-value">3</span>
                                <button className="stepper-btn">+</button>
                            </div>
                            <button className="quick-bump">+2</button>
                            <button className="icon-danger">✕</button>
                        </div>
                        <div className="task-row">
                            <button className="task-check checked">✓</button>
                            <span className="task-title done">
                                Write API docs for /webhooks
                            </span>
                            <div className="estimate-stepper">
                                <button className="stepper-btn">−</button>
                                <span className="stepper-value">5</span>
                                <button className="stepper-btn">+</button>
                            </div>
                            <button className="quick-bump">+2</button>
                            <button className="icon-danger">✕</button>
                        </div>
                        <div className="task-row">
                            <button className="task-check"></button>
                            <span className="task-title">
                                Fix flaky retry test in queue worker
                            </span>
                            <div className="estimate-stepper">
                                <button className="stepper-btn">−</button>
                                <span className="stepper-value">2</span>
                                <button className="stepper-btn">+</button>
                            </div>
                            <button className="quick-bump">+2</button>
                            <button className="icon-danger">✕</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageBoard
