import React, { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom';
import { DefaultTab } from '../../../components';
import TaxTable from './tax/TaxTable';
import IncentiveTable from './incentive/IncentiveTable';
import DeductionTable from './deduction/DeductionTable';

const Bursary = () => {
    const [setPageName] = useOutletContext<any>();

    useEffect(()=>{
        setPageName("Bursary")
    }, [])

    const tab = [
        { label: "Tax", value: "list", content: <TaxTable /> },
        { label: "Incentive", value: "incentive", content: <IncentiveTable /> },
        { label: "Deduction", value: "deduction", content: <DeductionTable /> },
      ];
    
     
      return (
        <>
          <DefaultTab defaultValue={"list"} tabs={tab} />
        </>
      )
}

export default Bursary