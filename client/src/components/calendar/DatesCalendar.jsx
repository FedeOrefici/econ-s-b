import { useState } from 'react'
import Calendar from 'react-calendar'

const DatesCalendar = () => {

    const [value, setValue] = useState(new Date())
    const [selectedDay, setSelectedDay] = useState(null)
    
    const handleChange = (date) => {
        setValue(date)
        setSelectedDay(value)
    }

    console.log(value);

  return (
    <div className='bg-slate-900 text-white w-full h-[500px] text-center flex items-center justify-center rounded shadow-lg'>
        <Calendar
        value={value}
        onChange={handleChange}
        onClickDay={handleChange}
        />
        <div>
            <p>you selected the date: {value.toString()} </p>
        </div>
    </div>
  )
}

export default DatesCalendar