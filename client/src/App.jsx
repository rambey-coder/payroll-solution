import './App.css'
import Layout from './components/layout'
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DashBoard from './pages/Dashboard'
import DepartmentList from './pages/department/DepartmentList'
import Department from './pages/department/Department'
import PositionList from './pages/Position/PositionList'

function App() {
  return (
    <div>
     <Router>
      <Routes>
        <Route element={<Layout />}>
         <Route element={<DashBoard />} path='/'/>
         <Route element = {<DepartmentList />} path='/departments'/>
         <Route element= {<Department />} path='/department' />
         <Route element= {<PositionList />} path='/positions' />
        </Route>
      </Routes>
     </Router>
    </div>
  )
}

export default App
