import { useContext, useState } from 'react'
import Calendar from 'react-calendar'
import { CartContext } from '../../context/ContextCart'

const DatesCalendar = () => {

    const {formatDate, handleChange, value} = useContext(CartContext)

  return (
    <div className='bg-slate-900 text-white w-[900px] h-[500px] text-center flex flex-col gap-10 items-center justify-center rounded shadow-lg'>
        <div className='flex flex-col'>
          <Calendar
          className='w-min-[500px] border p-4 bg-slate-50 text-slate-950 rounded'
          value={value}
          onChange={handleChange}  
        />
        </div>
        <div className='flex flex-col items-center justify-center bg-gray-50 text-slate-950 w-2/3 rounded h-[100px]'>
            <p className='italic'>You selected the date:</p>
            <span>{formatDate}</span>
        </div>
    </div>
  )
}

export default DatesCalendar