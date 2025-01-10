import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CustomCalendar = () => {
    const [value, setValue] = useState(new Date());
  
    return (
      <div className="calendar-container w-full h-full">
        <Calendar className='react-calendar w-full text-xl text-gray-500 border-none shadow-md shadow-gray-300 !border !border-l-1' onChange={setValue} value={value} />
      </div>
    );
  };
  
  export default CustomCalendar;
  