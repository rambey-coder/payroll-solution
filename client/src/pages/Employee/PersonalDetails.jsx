import { ErrorMessage, Field, Form, Formik } from 'formik'
import Tab from '../../components/tab'
import * as Yup from 'yup'

const PersonalDetails = () => {
    const validationSchema = Yup.object({
        first_name: Yup.string()
            .required('First name is required')
            .min(3, 'First name must be at least 3 characters'),
        last_name: Yup.string()
            .required('Last name is required')
            .min(3, 'Last name must be at least 3 characters'),
        email: Yup.string()
            .email('Email is invalid'),
        address: Yup.string()
            .required('Address is required')
            .min(3, 'Address must be at least 3 characters'),
        state: Yup.string()
            .required('State is required')
            .min(3, 'State must be at least 3 characters'),
        country: Yup.string()
            .required('Country is required')
            .min(3, 'Country must be at least 3 characters'),
        postal_code: Yup.string()
            .required('Postal code is required')
            .min(3, 'Postal code must be at least 3 characters'),
    })

    // Initial values for form fields
    const initialValues = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        address: '',
        state: '',
        country: '',
        postal_code: ''
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
                        <div className='w-[32%]'>
                            <label className='text-sm ' htmlFor="first_name">First Name</label>
                            <Field type="text" placeholder="First Name" id="first_name" name="first_name" className='input-text' />
                            <ErrorMessage name="first_name" component="div" style={{ color: 'red' }} />
                        </div>
                        <div className='w-[32%]'>
                            <label className='text-sm ' htmlFor="last_name">Last Name</label>
                            <Field type="text" placeholder="Last Name" id="last_name" name="last_name" className='input-text' />
                            <ErrorMessage name="last_name" component="div" style={{ color: 'red' }} />
                        </div>
                        <div className='w-[32%]'>
                            <label className='text-sm ' htmlFor="email">Email</label>
                            <Field type="text" placeholder="Email" id="email" name="email" className='input-text' />
                            <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
                        </div>
                        <div className='w-[32%]'>
                            <label className='text-sm ' htmlFor="address">Address</label>
                            <Field type="text" placeholder="Address" id="address" name="address" className='input-text' />
                            <ErrorMessage name="address" component="div" style={{ color: 'red' }} />
                        </div>
                        <div className='w-[32%]'>
                            <label className='text-sm ' htmlFor="state">State</label>
                            <Field type="text" placeholder="State" id="state" name="state" className='input-text' />
                            <ErrorMessage name="state" component="div" style={{ color: 'red' }} />
                        </div>
                        <div className='w-[32%]'>
                            <label className='text-sm ' htmlFor="country">Country</label>
                            <Field type="text" placeholder="Country" id="country" name="country" className='input-text' />
                            <ErrorMessage name="country" component="div" style={{ color: 'red' }} />
                        </div>
                        <div className='w-[32%]'>
                            <label className='text-sm ' htmlFor="postal_code">Postal Code</label>
                            <Field type="text" placeholder="Postal Code" id="postal_code" name="postal_code" className='input-text' />
                            <ErrorMessage name="postal_code" component="div" style={{ color: 'red' }} />
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default PersonalDetails