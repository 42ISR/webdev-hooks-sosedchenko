import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import PageActivity from './pages/Activity/Activity'
import PageBoard from './pages/Board/Board'
import PagePeople from './pages/People/People'
import PageSettings from './pages/Settings/Settings'
import { useState } from 'react'

function App() {
    const [page, setPage] = useState('board');
    return (
        <div className="app-shell" id="appShell">
            <Sidebar setPage={setPage} page={page}/>
            <div className="app-main">
                <Header />

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
