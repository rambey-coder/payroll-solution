import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup'

const Deductions = () => {
   const initialValues = {
               deductionLoan: 0,
               deductionTax: 0,
               deductionDonation: 0,
               deductionSavings: 0,
               deductionOther: 0
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
                                   <label className='text-sm ' htmlFor="deductionLoan">Loan Deduction</label>
                                   <Field type="text" placeholder="Loan Deduction" id="deductionLoan" name="deductionLoan" className='input-text' />
                                   <ErrorMessage name="deductionLoan" component="div" style={{ color: 'red' }} />
                               </div>
                               <div className='w-full'>
                                   <label className='text-sm ' htmlFor="deductionTax">Tax Deduction</label>
                                   <Field type="text" placeholder="Tax Deduction" id="deductionTax" name="deductionTax" className='input-text' />
                                   <ErrorMessage name="deductionTax" component="div" style={{ color: 'red' }} />
                               </div>
                               <div className='w-full'>
                                   <label className='text-sm ' htmlFor="deductionSavings">Savings Deduction</label>
                                   <Field type="text" placeholder="Savings Deduction" id="deductionSavings" name="deductionSavings" className='input-text' />
                                   <ErrorMessage name="deductionSavings" component="div" style={{ color: 'red' }} />
                               </div>
                               <div className='w-full'>
                                   <label className='text-sm ' htmlFor="deductionOther">Other Deductions</label>
                                   <Field type="text" placeholderLast="Other Deductions" id="deductionOther" name="deductionOther" className='input-text' />
                                   <ErrorMessage name="deductionOther" component="div" style={{ color: 'red' }} />
                               </div>
                           </Form>
                       )}
                   </Formik>
               </div>
           )
}

export default Deductions