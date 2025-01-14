import React from 'react'
import Tab from '../../components/tab'
import Deductions from './Deductions'
import Allowances from './Allowances'
import MakePayment from './MakePayment'
import Button from '../../components/button'

const Payment = () => {
    return (
        <div className='w-full h-[65%] bg-white border border-gray-300 shadow-md shadow-gray-300 rounded-md'>
            <div className='w-full h-full'>
                <div className='w-full  flex justify-between'>
                <p className='text-xl p-4 font-semibold'>
                    Employee Payment Management
                </p>
                {/* <div className='flex items-center gap-2 mr-4'>
                   <p className='text-sm font-semibold text-blue-500'>Gross Salary: ₦5000</p>
                   <p className='text-sm font-semibold text-blue-500'>Net Salary: ₦2000</p>
                </div> */}
                </div>
                <Tab tabs={[{ name: "Allowances", component: <Allowances /> },
                { name: "Deductions", component: <Deductions /> },
                { name: "Make Payment", component: <MakePayment />}
                ]} bottomRightButton={<Button name={'Pay'} style={{ border : '1px solid gray', width: '100px', height: '50px', background: "#B1B1B1"}}/>}/>
            </div>
        </div>
    )
}

export default Payment