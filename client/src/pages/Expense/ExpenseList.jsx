import React, { useEffect, useState } from 'react'
import EntityTable from '../../components/tables/EntityTable';

const ExpenseList = () => {
    const [qryFormRec, setFormRec] = useState({
        itemName: '',
        vendor: '',
        purchaseDate: '',
        amount: 0,
        department: 0,
       })
        const [qryformDataName, setQryformDataName] = useState('qrycurrencyData');
        const [entitys, setEntitys] = useState([]);
        const [qryformData, setqryformData] = useState(qryFormRec);
    
        const [isLoading, setIsLoading]  = useState(false)
    
        const [currentPage, setCurrentPage] = useState(0);
        const [itemsPerPage, setItemsPerPage] = useState(20);
    
        const clearQryFormData = () => {
            sessionStorage.removeItem(qryformDataName);
            setqryformData(qryFormRec);
          };
          const setQueryValues = (fieldname, value) => {
            setqryformData((prevqryformData) => ({
              ...prevqryformData,
              [fieldname]: value,
            }));
          };
        
          const pageCount = Math.ceil(entitys.length / itemsPerPage);
        
          const handlePageClick = (newPage) => {
            setCurrentPage(newPage);
          };
          const handleItemsPerPageChange = (newItemsPerPage) => {
            setItemsPerPage(newItemsPerPage);
            setCurrentPage(0);
          };
        
          const indexOfLastItem = (currentPage + 1) * itemsPerPage;
          const indexOfFirstItem = indexOfLastItem - itemsPerPage;
          const currentItems = entitys?.slice(indexOfFirstItem, indexOfLastItem);
    
        //  async function get_DepartmentLists(){
        //   try{
        //     const response = await getDepartmentLists()
        //     if(!response || !response.data || !response.data.data){
        //       setIsLoading(true)
        //     }
        //     else{
        //       setIsLoading(false)
        //       setEntitys(response.data.data)
        //     }
        //   }
        //   catch(err){
        //     console.log(err)
        //   }
        //  }
    
        //   useEffect(()=>{
        //     get_DepartmentLists()
        //   },[])
    
          useEffect(() => {
            window.addEventListener('beforeunload', clearQryFormData);
            return () => {
              window.removeEventListener('beforeunload', clearQryFormData);
            };
          }, []);
        //   deductionTax: 0,
        //   deductionLoan: 0,
        //   deductionPension: 0,
        //   deductionDonation: 0,
        //   deductionSavings: 0,
        //   deductionOther: 0
          const headers = new Map()
             .set('itemName', 'Item Name')
             .set('vendor', 'vendor')
             .set('purchaseDate', 'Purchase Date')
             .set('amount', 'Amount')
             .set('department', 'Department')
             .set('createdAt', 'Created At')
             .set('updatedAt', 'Updated At')
        // if(isLoading){
        //   return(<LoadingSpinner isLoading={isLoading}/>)
        // }
        return (
            <div className='w-full flex justify-start'>
              <div className='w-full mt-4 overflow-scroll'>
                <EntityTable 
                  queryEntitys={entitys}
                  formRec={qryFormRec}
                  setFormRec={setFormRec}
                  headers = {headers}
                  clearQryFormData={clearQryFormData}
                  setQueryValues={setQueryValues}
                  searchResults={currentItems}
                  tableName={'Expense'}
                />
                {/* <CustomPagination
                  pageCount={pageCount}
                  currentPage={currentPage}
                  handlePageClick={handlePageClick}
                  itemsPerPage={itemsPerPage}
                  handleItemsPerPageChange={handleItemsPerPageChange}
                  entitys={entitys}
                /> */}
            </div>
            </div>
        )
}

export default ExpenseList