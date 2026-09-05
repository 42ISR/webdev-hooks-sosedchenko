import "./Header.css"
import Input from '../Input/Input.jsx'

const Header = ({setSidebarCollapsed}) => {
    return (
        <header className="topbar">
            <button
                onClick={() => setSidebarCollapsed(val => !val)}
                className="icon-btn"
                id="sidebarToggle"
                title="Collapse sidebar"
            >
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                >
                    <line x1="4" y1="7" x2="20" y2="7" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="17" x2="20" y2="17" />
                </svg>
            </button>

            <div
                className="topbar-search mount-wrap"
                data-hook="3.3 useState + useEffect + fetch (debounce)"
            >
                <div className="mount-point" id="mount-search">
                    <Input
                        style={{ width: "100%" }}
                        placeholder="Search tasks, people..."
                    />
                </div>
            </div>

            <div className="topbar-right">
                <div
                    className="mount-wrap"
                    data-hook="3.4 useState + useEffect (polling)"
                >
                    <div
                        className="mount-point"
                        id="mount-build-status"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "7px",
                            fontSize: "12.5px",
                            color: "var(--muted)",
                        }}
                    >
                        <span className="status-dot online"></span>
                        Build passing
                    </div>
                </div>
                <button
                    className="avatar-btn"
                    data-page="settings"
                    title="Settings"
                >
                    AM
                </button>
            </div>
        </header>
    )
}

export default Header
