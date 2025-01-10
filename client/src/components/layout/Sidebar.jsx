import { AiOutlineDashboard } from "react-icons/ai";
import { AiOutlineGroup } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { GiExpense } from "react-icons/gi";
import { LuScrollText } from "react-icons/lu";
import { SiOnlyoffice } from "react-icons/si";

const Sidebar = () => {
  return (
    <div className='col-start-1 col-end-3 h-screen bg-[#0C2D48] text-gray-200 shadow-sm shadow-gray-300'>
        <div className="w-full h-14 flex items-center p-6 border-b border-gray-100">
            <p className="font-semibold">INFO HRM & PAYROLL</p>
        </div>
        <div className="w-full p-4 py-4  border-b border-gray-300 flex gap-2 items-center">
            <div className="rounded-full h-10 w-10 bg-yellow-500 border border-gray-300"></div>
            <p>Sadiq Ajibola</p>
        </div>
        <div className={`w-full  h-screen border-r`}>
      <ul className="gap-10 w-full flex flex-col  items-start pl-3 mt-8">
        <li className="menus" ><AiOutlineDashboard  className="text-xl"/>Dashboard</li>
        <li className="menus"><AiOutlineGroup /> Departments</li>
        <li className="menus"><SiOnlyoffice /> Positions</li>
        <li className="menus"><FaUsers /> Employee</li>
        <li className="menus" ><LuScrollText /> Payroll Management</li>
        <li className="menus"><GiExpense /> Expense Management</li>
      </ul>
    </div>
    </div>
  )
}

export default Sidebar