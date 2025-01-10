/* eslint-disable react/prop-types */
import IconBox from './IconBox'

const SumCard = ({icon, backgroundColor, title, data}) => {
  return (
    <div className='w-[30%] h-[100px] items-center p-4 gap-3 bg-white rounded-md shadow-md shadow-gray-300 flex'>
        <IconBox icon={icon} backgroundColor={backgroundColor}/>
        <div>
            <p className='font-semibold'>{title}</p>
            <p className='text-sm text-gray-600'>{data}</p>
        </div>
    </div>
  )
}

export default SumCard