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
import PaymentList from './pages/Payment/PaymentList'
import Payment from './pages/Payment/Payment'
import Expense from './pages/Expense/Expense'
import ExpenseList from './pages/Expense/ExpenseList'

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
         <Route element= {<PaymentList />} path='/payments' />
         <Route element= {<Payment />} path='/payment' />
         <Route element= {<ExpenseList />} path='/expenses' />
         <Route element= {<Expense />} path='/expense' />
        </Route>
      </Routes>
     </Router>
    </div>
  )
}

export default App
