import React from 'react'
import { Route,Routes } from 'react-router-dom'
import KanbanBoard from './components/kanbanBoard'
import AnalyticsDashboard from './components/analyticsDashboard'
import AddApplication from './components/addApplication'
import Home from './pages/Home'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <div> 
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/kanban-board' element={<KanbanBoard/>} />
        <Route path='/analytics-dashboard' element={<AnalyticsDashboard/>} />
        <Route path='/add-application' element={<AddApplication/>} />
      </Routes>
    </div>
  )
}

export default App