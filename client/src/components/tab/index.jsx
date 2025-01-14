/* eslint-disable react/prop-types */
import { SaveButton } from '../button/SaveButton'
import BackButton from '../button/BackButton'
import { useState } from 'react'

const Tab = ({ tabs, bottomRightButton }) => {
    const [activeTab, setActiveTab] = useState(tabs[0].name)
    const tabWidth = 100 / (tabs.length)
    return (
        <div className='w-full flex flex-col justify-between h-[90%] bg-white'>
            <div className='flex w-full'>
                {tabs && tabs.map((tab, index) => (
                    <div style={{ width: `${tabWidth}%` }} className={`w-[${tabWidth}%]`} key={index}>
                        <div onClick={()=> setActiveTab(tab.name)} className={`w-full ${(tab.name == activeTab) && '!bg-gray-300 !text-gray-700'} p-3 bg-[#0C2D48] cursor-pointer text-white border-r border-white`}>
                            {tab.name}
                        </div>
                    </div>
                ))}
            </div>
             <div className='w-full h-[70%] p-4'>
                 {tabs.find(t => t.name == activeTab)?.component}        
            </div>
           <div className='w-full flex justify-between border-t border-gray-300 mb-6 p-4 mt-4'>
           <div className='flex gap-3  '>
                <SaveButton />
                <BackButton />
            </div>
            {bottomRightButton}
           </div>
        </div>
    )
}

export default Tab