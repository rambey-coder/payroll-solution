import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup'

const Allowances = () => {
         // Initial values for form fields
         const initialValues = {
             allowanceRent: 0,
             allowanceMedical: 0,
             allowanceOther: 0,
             allowanceTransport: 0,
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
                                 <label className='text-sm ' htmlFor="allowanceRent">Rent Allowance</label>
                                 <Field type="text" placeholder="Rent Allowance" id="allowanceRent" name="allowanceRent" className='input-text' />
                                 <ErrorMessage name="allowanceRent" component="div" style={{ color: 'red' }} />
                             </div>
                             <div className='w-full'>
                                 <label className='text-sm ' htmlFor="allowanceMedical">Medical Allowance</label>
                                 <Field type="text" placeholder="Medical Allowance" id="allowanceMedical" name="allowanceMedical" className='input-text' />
                                 <ErrorMessage name="allowanceMedical" component="div" style={{ color: 'red' }} />
                             </div>
                             <div className='w-full'>
                                 <label className='text-sm ' htmlFor="allowanceTransport">Transport Allowance</label>
                                 <Field type="text" placeholder="Transport Allowance" id="allowanceTransport" name="allowanceTransport" className='input-text' />
                                 <ErrorMessage name="allowanceTransport" component="div" style={{ color: 'red' }} />
                             </div>
                             <div className='w-full'>
                                 <label className='text-sm ' htmlFor="allowanceOther">Other Allowance</label>
                                 <Field type="text" placeholder="Other Allowance" id="allowanceOther" name="allowanceOther" className='input-text' />
                                 <ErrorMessage name="allowanceOther" component="div" style={{ color: 'red' }} />
                             </div>
                         </Form>
                     )}
                 </Formik>
             </div>
         )
}

export default Allowances