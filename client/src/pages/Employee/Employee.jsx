import { ErrorMessage, Field, Form, Formik } from 'formik'
import Tab from '../../components/tab'
import * as Yup from 'yup'
import PersonalDetails from './PersonalDetails'
import OfficialDetails from './OfficialDetails'
import BankDetails from './BankDetails'

const Employee = () => {
    

    return (
        <div className='w-full h-[65%] bg-white border border-gray-300 shadow-md shadow-gray-300 rounded-md'>
            <div className='w-full h-full'>
                <p className='text-xl p-4 font-semibold'>
                    Create Employee
                </p>
                <Tab tabs={[{ name: "Personal Details", component: <PersonalDetails /> },
                { name: "Official Details", component: <OfficialDetails /> },
                { name: "Bank Details", component: <BankDetails /> }
                ]} />
            </div>
        </div>
    )
}


export default Employee