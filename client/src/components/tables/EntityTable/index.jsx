/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import EntityTableItem from './EntityTableItem'
import { FaSearch, FaPlus } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

const EntityTable = ({
    searchResults,
    queryEntitys,
    setQueryValues,
    clearQryFormData,
    tableName,
    headers
}) => {
    const [formRec, setFormRec] = useState(Object.fromEntries(
        Array.from(headers.keys()).map(key => [key, ""])
    ));
    const results = queryEntitys?.map((dataentity) => (
        <EntityTableItem key={dataentity.id} props={dataentity} />
    ))
    const content = results?.length ? (
        results
    ) : (
        <tr>
            <td className="m-auto">
                <br />
                <span>No matching records</span>
            </td>
        </tr>
    );
    
    const navigate = useNavigate()

    const handleClearform = () => {
        setFormRec(formRec);
        clearQryFormData();
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormRec((prevformRecObj) => ({ ...prevformRecObj, [id]: value }));
    };

    const handleBlur = (e) => {
        const { id, value } = e.target;

        setQueryValues(id, value);
    };

    const goToAdd = () =>{
        navigate(`/${tableName.trim()}`)
    }
    return (
        <div className='w-full border border-gray-300 bg-white'>
            <div className='w-full p-2 bg-[#0C2D48] text-white font-semibold '>
                {tableName} List
            </div>
            <div className='w-full p-3'>
            <div className="bg-white mt-4 shadow-lg border border-gray-300 overflow-x-scroll rounded-sm relative p-4">
            <header className="pl-5 py-4text-white">
                <div className="grid grid-cols-4 ">
                    <h2 className="col-span-3 text-xl ">
                        {tableName}
                    </h2>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end">
                        <nav
                            className="mb-4 sm:mb-0 sm:order-1"
                            role="navigation"
                            aria-label="Navigation"
                        >
                            <ul className="flex justify-end gap-2">
                                <li className="ml-0 first:ml-0 mr-1">
                                    <button
                                        className="bg-white h-8 border border-blue-300 text-blue-500 py-0 px-2 rounded-md text-center"
                                        onClick={queryEntitys}
                                    >
                                        {' '}
                                        Search{' '}
                                    </button>
                                </li>
                                <li className="ml-0 first:ml-0 mr-1">
                                    <button
                                        className="bg-white flex gap-2 items-center h-8 border border-gray-300 text-gray-700 py-0 px-2 rounded-md text-center"
                                        onClick={goToAdd}
                                    >
                                        {' '}
                                        Add{' '}
                                        <FaPlus />
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
            <div className="flex flex-col w-full place-items-center mt-3">
                <div className="overflow-x-scroll block w-full">
                    <div className="align-middle inline-block min-w-full shadow sm:rounded-lg border-b border-gray-200">
                        <table className="table-auto w-full">
                            {/* Table header */}
                            <thead className="sticky top-0  divide-grey-200 text-xs font-semibold text-gray-500 bg-gray-50 border-t border-b border-gray-200">
                                <tr>
                                    <th className="!px-0 first:pl-5 last:pr-5 py-3 whitespace-nowrap border ">
                                        <div className="font-semibold text-left"></div>
                                    </th>
                                    {/*/////////////////////end of Fixed and replaceable variable 2*/}

                                    {
                                        Array.from(headers).map(([key, value], index) => {
                                            return (
                                                <th key={index} className="first:pl-5 last:pr-5 !px-0  whitespace-nowrap">
                                                    <div className="font-semibold text-left  mr-0 p-4 w-full">
                                                        {value}
                                                    </div>
                                                </th>
                                            )
                                        })
                                    }
                                </tr>
                            </thead>
                            <tbody className="text-sm divide-y-4  divide-gray-200">
                                <tr>
                                    <td>
                                        <div className="mb-1 mt-1">
                                            <button
                                                onClick={handleClearform}
                                                title="Clear Query"
                                                name="ClearQry"
                                                id="ClearQry"
                                                className="border border-white  flex justify-center items-center w-6  h-6 hover:border-gray-300 text-gray-500 shadow-sm transition duration-150 ml-2"
                                            >
                                                {/* 2.Fixed from here with replacable items */}
                                                <span className="sr-only">Clear Query</span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="icon icon-tabler icon-tabler-zoom-cancel"
                                                    width="44"
                                                    height="44"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <circle cx="10" cy="10" r="7" />
                                                    <line x1="8" y1="8" x2="12" y2="12" />
                                                    <line x1="12" y1="8" x2="8" y2="12" />
                                                    <line x1="21" y1="21" x2="15" y2="15" />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                    {
                                        Array.from(headers).map(([key, value], index) => {
                                            return (
                                                <td key={index}>
                                                    <div
                                                        style={{
                                                            marginBottom: '9px',
                                                        }}
                                                    >
                                                        <input
                                                            type="text"
                                                            id={key}
                                                            className=" bm-10 w-full pl-6 bg-gray-50 border border-gray-150 h-8 focus:border-blue-500  dark:bg-gray-50 dark:border-gray-200 dark:placeholder-gray-400"
                                                            value={formRec[key]}
                                                            onChange={handleInputChange}
                                                            onBlur={handleBlur}
                                                        />
                                                        <span onClick={queryEntitys}>
                                                            <FaSearch className="-mt-6 ml-2 cursor-pointer" />
                                                        </span>
                                                    </div>
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                                {content}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
            </div>
        </div>
    )
}

export default EntityTable