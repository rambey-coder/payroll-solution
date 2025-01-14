import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react'
import AddButton from '../../components/button/AddButton';
import BackButton from '../../components/button/BackButton';

const Expense = () => {
    const initialValues = {
        itemName: '',
        vendor: '',
        purchaseDate: '',
        amount: 0,
        department: ''
    };

    // Submit handler
    const handleSubmit = (values, { resetForm }) => {
        console.log('Form Data:', values);
        resetForm(); // Reset the form after submission
    };
    return (
        <div className='w-full bg-white h-[64%] rounded-sm'>
             <div className='p-3 w-full bg-primary text-white font-semibold'>
                Add Expense
            </div>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting, isValid, dirty }) => (
                    <Form className='w-full mb-3 mt-4 bg-white p-3 flex gap-2 justify-between flex-wrap'>
                        <div className='w-full'>
                            <label className='text-sm ' htmlFor="itemName">Item Name</label>
                            <Field type="text" placeholder="Item Name" id="itemName" name="itemName" className='input-text' />
                            <ErrorMessage name="itemName" component="div" style={{ color: 'red' }} />
                        </div>
                        <div className='w-full'>
                            <label className='text-sm ' htmlFor="vendor">Vendor</label>
                            <Field type="text" placeholder="Vendor" id="vendor" name="vendor" className='input-text' />
                            <ErrorMessage name="vendor" component="div" style={{ color: 'red' }} />
                        </div>
                        <div className='w-full'>
                            <label className='text-sm ' htmlFor="amount">Amount</label>
                            <Field type="text" placeholder="Amount" id="amount" name="amount" className='input-text' />
                            <ErrorMessage name="amount" component="div" style={{ color: 'red' }} />
                        </div>
                        <div className='w-1/3'>
                            <label className='text-sm ' htmlFor="purchaseDate">Purchase Date</label>
                            <Field type="date" placeholder="Purchase Date" id="purchaseDate" name="purchaseDate" className='input-text' />
                            <ErrorMessage name="purchaseDate" component="div" style={{ color: 'red' }} />
                        </div>
                        <div className='w-full'>
                        <label className='text-sm ' htmlFor="department">Department</label>
                            <Field as="select" name="departmentId" id="department" className="select">
                                <option value="" label="Select a department" />
                                <option value="engineering" label="Engineering" />
                                <option value="accounting" label="Accounting" />
                                <option value="bursary" label="Bursary" />
                            </Field>
                        </div>
                        <div className='mt-3 flex items-center gap-2'>
                            <AddButton />
                            <BackButton />
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Expense