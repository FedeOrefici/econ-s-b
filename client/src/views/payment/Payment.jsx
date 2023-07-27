import React, { useContext } from 'react'
import Navbar from '../../components/navbar/Navbar'
import back from '../../../assets/backabout.jpg'
import { CartContext } from '../../context/ContextCart'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const Payment = () => {

    const { cart } = useContext(CartContext)
    const navigate = useNavigate()

    if(cart.length === 0) {
        navigate('/allServices')
    }

    const handleCancel = () => {
        Swal.fire({
            title: 'Are you sure to cancel?',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
            icon: 'warning'
        }).then((result) => {
            if (result.isConfirmed) {
                navigate('/allServices')
            } else {
                return;
            }
        });
    }

  return (
    <>
        <Navbar />
        <div className='h-screen flex items-center justify-center' style={{backgroundImage:`url(${back})`}}>
            <div className='bg-gray-200 w-2/3 h-2/3 flex flex-col items-center justify-center shadow-lg'>
                <p className='font-medium italic'>You are going to pay:</p>
                <div className='flex flex-col items-center py-10'>
                {cart.map(item => (
                    <div key={item?._id} className='flex gap-4'>
                        <p className='font-semibold'>{item?.name}</p>
                        <p>{item?.description}</p>
                        <p>$ {item?.price}</p>
                    </div>
                ))}
                </div>
                <div className='flex gap-4'>
                    <button className='bg-green-700 py-2 w-[120px] hover:bg-green-600 text-white rounded'>go to pay</button>
                    <button onClick={handleCancel} className='bg-red-700 py-2 w-[120px] hover:bg-red-600 text-white rounded'>cancel</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Payment