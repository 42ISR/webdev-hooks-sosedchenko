import "./Sidebar.css"

const Sidebar = ({page, setPage}) => {
    return (
        <aside className="sidebar">
            <div className="brand">
                <div className="brand-mark">R</div>
                <div className="brand-name">Relay</div>
            </div>

            <nav className="nav">
                <button onClick={() => setPage("board")} className={`nav-link${page === "board" ? " active" : ""}`} data-page="board">
                    <span className="nav-icon">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.6">
                            <rect x="3" y="4" width="7" height="16" rx="1.5" />
                            <rect x="14" y="4" width="7" height="9" rx="1.5" />
                        </svg>
                    </span>
                    <span className="nav-label">Board</span>
                </button>
                <button onClick={() => setPage("people")} className={`nav-link${page === "people" ? " active" : ""}`} data-page="people">
                    <span className="nav-icon">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.6">
                            <circle cx="9" cy="8" r="3.2" />
                            <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
                            <circle cx="18" cy="8" r="2.4" />
                            <path d="M15.5 14.3c2.6.4 4.5 2.6 4.5 5.7" />
                        </svg>
                    </span>
                    <span className="nav-label">People</span>
                </button>
                <button onClick={() => setPage("activity")} className={`nav-link${page === "activity" ? " active" : ""}`} data-page="activity">
                    <span className="nav-icon">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.6">
                            <path d="M3 12h4l2-7 4 14 2-7h6" />
                        </svg>
                    </span>
                    <span className="nav-label">Activity</span>
                </button>
                <button onClick={() => setPage("settings")} className={`nav-link${page === "settings" ? " active" : ""}`} data-page="settings">
                    <span className="nav-icon">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.6">
                            <circle cx="12" cy="12" r="3" />
                            <path d="M19.4 13.5c.1-.5.1-1 0-1.5l1.7-1.4-1.7-3-2.1.6c-.4-.3-.8-.6-1.3-.8l-.4-2.2h-3.4l-.4 2.2c-.5.2-.9.5-1.3.8l-2.1-.6-1.7 3 1.7 1.4c-.1.5-.1 1 0 1.5l-1.7 1.4 1.7 3 2.1-.6c.4.3.8.6 1.3.8l.4 2.2h3.4l.4-2.2c.5-.2.9-.5 1.3-.8l2.1.6 1.7-3-1.7-1.4z" />
                        </svg>
                    </span>
                    <span className="nav-label">Settings</span>
                </button>
            </nav>

            <div className="sidebar-spacer"></div>

            <div className="sidebar-footer">
                <span className="status-dot online"></span>
                <span>You're online</span>
            </div>
        </aside>
    )
}

export default Sidebar