import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import PageActivity from './pages/Activity/Activity'
import PageBoard from './pages/Board/Board'
import PagePeople from './pages/People/People'
import PageSettings from './pages/Settings/Settings'
import { useState } from 'react'

function App() {
    const [page, setPage] = useState('board');
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    return (
        <div className= { `app-shell ${sidebarCollapsed ? 'sidebar-collapsed' : ''}` } id="appShell">
            <Sidebar setPage={setPage} page={page} sidebarCollapsed={sidebarCollapsed} />
            <div className="app-main">
                <Header setSidebarCollapsed={setSidebarCollapsed} />

                <main className="page-area">
                    { page === "board" && <PageBoard /> }
                    { page === "people" && <PagePeople /> }
                    { page === "activity" && <PageActivity /> }
                    { page === "settings" && <PageSettings /> }
                </main>
            </div>
        </div>
    )
}

export default App

//app-shell sidebar-collapsed
