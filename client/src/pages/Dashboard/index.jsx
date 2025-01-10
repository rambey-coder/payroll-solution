import SumCard from './components/SumCard'
import { FaUsers } from 'react-icons/fa'
import { GiExpense } from "react-icons/gi";
import { MdOutlinePayment } from "react-icons/md";
import CustomCalendar from './CustomCalendar';
import Report from './components/Report';

const DashBoard = () => {
  return (
    <div className='w-full h-full overflow'>
        <div className='w-full flex justify-between'>
            <SumCard icon={<FaUsers />} title={'Total Employees'} backgroundColor={'#cbae11'} data={'1000 employees'}/>
            <SumCard title={'Total Expenses'} icon={<GiExpense />} backgroundColor={'#5cd85a'} data={'₦100000'}/>
            <SumCard title={'Total Payments'} icon={<MdOutlinePayment />} backgroundColor={'#dc4731'} data={'₦100000'}/>
        </div>
        <div className='flex w-full h-[55%] mt-4 justify-between'>
            <div className='h-full w-[48%]  rounded-sm shadow-sm shadow-gray-300'>
                <CustomCalendar />
            </div>
            <div className='h-full w-[48%] flex flex-col justify-between border border-gray-300 rounded-md o-3'>
              <Report title={'Expense Report'}/>
              <Report title={'Payment Report'}/>
            </div>
        </div>
    </div>
  )
}

export default DashBoard