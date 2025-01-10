import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup';
import Button from '../../components/button';
import AddButton from '../../components/button/AddButton';
import BackButton from '../../components/button/BackButton';

const Department = () => {
    const validationSchema = Yup.object({
        departmentName: Yup.string()
          .required('Name is required')
          .min(3, 'Name must be at least 3 characters'),
        departmentDescription: Yup.string()
          .required('Description is required')
          .min(3, 'Description must be at least 3 characters')
      });
    
      // Initial values for form fields
      const initialValues = {
        departmentName: '',
        departmentDescription: '',
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
        <Form className='w-full mb-3 mt-4 bg-white p-3 flex flex-col gap-3 flex-wrap'>
          <div className='w-5/6'>
          <label className='text-sm ' htmlFor="departmentName">Department Name</label>
            <Field type="text" id="departmentName" placeholder='Department Name' name="departmentName" className='input-text'/>
            <ErrorMessage name="name" component="div" style={{ color: 'red' }} />
          </div>

          <div className='w-5/6'>
          <label  className='text-sm ' htmlFor="departmentName">Description</label>
            <Field type="text" placeholder="Description" id="departmentDescription" name="departmentDescription" className='input-text'/>
            <ErrorMessage name="departmentDescription" component="div" style={{ color: 'red' }} />
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

export default Department