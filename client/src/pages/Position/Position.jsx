import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react'
import * as Yup from 'yup'
import BackButton from '../../components/button/BackButton';
import AddButton from '../../components/button/AddButton';

const Position = () => {
    const validationSchema = Yup.object({
        title: Yup.string()
            .required('Title is required')
            .min(3, 'Title must be at least 3 characters'),
        description: Yup.string()
            .required('Description is required')
            .min(3, 'Description must be at least 3 characters')
    });

    // Initial values for form fields
    const initialValues = {
        title: '',
        description: '',
    };

    // Submit handler
    const handleSubmit = (values, { resetForm }) => {
        console.log('Form Data:', values);
        resetForm(); // Reset the form after submission
    };
    return (
        <div className='w-1/2 flex items-center flex-col mx-auto bg-white h-[300px] rounded-md shadow-md shadow-gray-400'>
            <div className='p-3 w-full bg-primary text-white font-semibold'>
                Add Department
            </div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className='w-full mb-3 mt-4 bg-white p-3 px-5 flex flex-col gap-3 flex-wrap'>
                        <div className='w-full'>
                            <Field as="select" name="departmentId" id="department" className="select">
                                <option value="" label="Select a department" />
                                <option value="engineering" label="Engineering" />
                                <option value="accounting" label="Accounting" />
                                <option value="bursary" label="Bursary" />
                            </Field>
                        </div>
                        <div className='w-full'>
                            <label className='text-sm ' htmlFor="title">Title</label>
                            <Field type="text" placeholder="Title" id="title" name="title" className='input-text' />
                            <ErrorMessage name="title" component="div" style={{ color: 'red' }} />
                        </div>
                        <div className='w-full'>
                            <label className='text-sm ' htmlFor="description">Description</label>
                            <Field type="text" placeholder="Description" id="description" name="description" className='input-text' />
                            <ErrorMessage name="description" component="div" style={{ color: 'red' }} />
                        </div>
                        <div className='w-full'>
                            <label className='text-sm ' htmlFor="salary">Salary</label>
                            <Field type="text" placeholder="Salary" id="salary" name="salary" className='input-text' />
                            <ErrorMessage name="salary" component="div" style={{ color: 'red' }} />
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

export default Position