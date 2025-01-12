import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup'

const BankDetails = () => {
   const validationSchema = Yup.object({
            bank_name: Yup.string()
                .required('Bank Name is required'),
            bank_account_number: Yup.string()
                .required('Account Number is required')
                .min(3, 'Account Number must be at least 3 characters'),
        })
    
        // Initial values for form fields
        const initialValues = {
            bank_name: '',
            bank_account_number: '',
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
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting, isValid, dirty }) => (
                        <Form className='w-full mb-3 mt-4 bg-white p-3 flex gap-2 justify-between flex-wrap'>
                            <div className='w-2/3'>
                                <label className='text-sm ' htmlFor="bank_name">Bank Name</label>
                                <Field type="text" placeholder="Bank Name" id="bank_name" name="bank_name" className='input-text' />
                                <ErrorMessage name="bank_name" component="div" style={{ color: 'red' }} />
                            </div>
                            <div className='w-2/3'>
                                <label className='text-sm ' htmlFor="bank_account_number">Account Number</label>
                                <Field type="text" placeholderLast Nam="bank_account_number" id="bank_account_number" name="bank_account_number" className='input-text' />
                                <ErrorMessage name="bank_account_number" component="div" style={{ color: 'red' }} />
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        )
}

export default BankDetails