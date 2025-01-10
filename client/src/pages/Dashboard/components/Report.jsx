/* eslint-disable react/prop-types */
import EmployeeChart from './ExpenseChart'

const Report = ({title}) => {
  return (
    <div className='w-full h-[49%] border border-gray-300 bg-white'>
        <p className='p-2 text-sm font-semibold w-full bg-[#0C2D48] text-white'>{title}</p>
        <EmployeeChart />
    </div>
  )
}

export default Report