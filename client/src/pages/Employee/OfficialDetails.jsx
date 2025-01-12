import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup'

const OfficialDetails = () => {
 const validationSchema = Yup.object({
         employee_id: Yup.string()
             .required('Employee Id is required'),
         password: Yup.string()
             .required('Last name is required')
             .min(3, 'Last name must be at least 3 characters'),
         position: Yup.string()
             .required('Position is invalid'),
         start_date: Yup.string()
             .required('Start date is required')
             .min(3, 'Start date must be at least 3 characters'),
         employment_type: Yup.string()
             .required('Employment type is required')
             .min(3, 'Employment type must be at least 3 characters')
     })
 
     // Initial values for form fields
     const initialValues = {
         employee_id: '',
         password: '',
         position: '',
         start_date: '',
         employment_type: '',
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
                             <label className='text-sm ' htmlFor="employee_id">Employee ID</label>
                             <Field type="text" placeholder="Employee ID" id="employee_id" name="employee_id" className='input-text' />
                             <ErrorMessage name="employee_id" component="div" style={{ color: 'red' }} />
                         </div>
                         <div className='w-[32%]'>
                             <label className='text-sm ' htmlFor="password">Last Name</label>
                             <Field type="text" placeholderLast Nam="Password" id="password" name="password" className='input-text' />
                             <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
                         </div>
                         <div className='w-[32%]'>
                         <label className='text-sm ' htmlFor="department">Department</label>
                             <Field as="select" name="departmentId" id="department" className="select">
                                 <option value="" label="Select a department" />
                                 <option value="engineering" label="Engineering" />
                                 <option value="accounting" label="Accounting" />
                                 <option value="bursary" label="Bursary" />
                             </Field>
                         </div>
                         <div className='w-[32%]'>
                             <label className='text-sm ' htmlFor="position">Position</label>
                             <Field as="select" placeholder="Position" id="position" name="position" className='select'>
                                 <option value="" label="Select a Position" />
                                 <option value="engineering" label="Software Engineer" />
                                 <option value="accountant" label="Accountant" />
                                 <option value="bursar" label="Bursar" />                            
                             </Field>
                         </div>
                         <div className='w-[32%]'>
                             <label className='text-sm ' htmlFor="start_date">Start Date</label>
                             <Field type="date" placeholder="start_date" id="start_date" name="start_date" className='input-text' />
                             <ErrorMessage name="start_date" component="div" style={{ color: 'red' }} />
                         </div>
                         <div className='w-[32%]'>
                             <label className='text-sm ' htmlFor="employment_type">Employment Tye</label>
                             <Field as="select" placeholder="Employment Type" id="employment_type" name="employment_type" className='select'>
                                 <option value="" label="Select an Employment Type" />
                                 <option value="full_time" label="Full Time" />
                                 <option value="part_time" label="Part Time" />
                                 <option value="contract" label="Contract" />
                             </Field>                             
                            <ErrorMessage name="employment_type" component="div" style={{ color: 'red' }} />
                         </div>
                     </Form>
                 )}
             </Formik>
         </div>
     )
}

export default OfficialDetails