import './App.css'
import Layout from './components/layout'
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DashBoard from './pages/Dashboard'
import DepartmentList from './pages/department/DepartmentList'
import Department from './pages/department/Department'
import PositionList from './pages/Position/PositionList'
import Position from './pages/Position/Position'
import EmployeeList from './pages/Employee/EmployeeList'
import Employee from './pages/Employee/Employee'

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
         <Route element= {<Position />} path='/position' />
         <Route element= {<EmployeeList />} path='/employees' />
         <Route element= {<Employee />} path='/employee' />
        </Route>
      </Routes>
     </Router>
    </div>
  )
}

export default App
