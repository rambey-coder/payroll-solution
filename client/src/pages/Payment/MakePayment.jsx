import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react'

const MakePayment = () => {
    const initialValues = {
        grossSalary: 0,
        netSalary: 0,
        accountName: 0,
        accountNumber: 0,
        bankName: 0
    };

    // Submit handler
    const handleSubmit = (values, { resetForm }) => {
        console.log('Form Data:', values);
        resetForm(); // Reset the form after submission
    };
    return (
        <div className='w-full'>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting, isValid, dirty }) => (
                    <Form className='w-full mb-3 mt-4 bg-white p-3 flex gap-2 justify-between flex-wrap'>
                        <div className='w-full'>
                            <label className='text-sm ' htmlFor="grossSalary">Gross Salary</label>
                            <Field type="text" placeholder="Gross Salary" id="grossSalary" name="grossSalary" className='input-text' />
                            <ErrorMessage name="grossSalary" component="div" style={{ color: 'red' }} />
                        </div>
                        <div className='w-full'>
                            <label className='text-sm ' htmlFor="netSalary">Net Salary</label>
                            <Field type="text" placeholder="Net Salary" id="netSalary" name="netSalary" className='input-text' />
                            <ErrorMessage name="netSalary" component="div" style={{ color: 'red' }} />
                        </div>
                        <div className='w-full'>
                            <label className='text-sm ' htmlFor="accountNumber">Account Number</label>
                            <Field type="text" placeholder="Account Number" id="accountNumber" name="accountNumber" className='input-text' />
                            <ErrorMessage name="accountNumber" component="div" style={{ color: 'red' }} />
                        </div>
                        <div className='w-full'>
                            <label className='text-sm ' htmlFor="bankName">Bank Name</label>
                            <Field type="text" placeholderLast="Bank Name" id="bankName" name="bankName" className='input-text' />
                            <ErrorMessage name="bankName" component="div" style={{ color: 'red' }} />
                        </div>
                    </Form>
                )}
            </Formik>

        </div>
    )
}

export default MakePayment