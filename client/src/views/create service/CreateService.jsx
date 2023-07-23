import { useState } from "react"
import Navbar from "../../components/navbar/Navbar"
import validationsService from "./validations"
import axios from "axios"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"

const CreateService = () => {

  const navigate = useNavigate()

  const [service, setService] = useState({
    name: '',
    price: '',
    description: '',
    photo: ''
  })

  const [errors, setErrors] = useState({
    name: '',
    price: '',
    description: '',
    photo: ''
  })

  const handleChange = (event) => {
    setService({
      ...service,
      [event.target.name]: event.target.value
    })
    setErrors(validationsService({
      ...service,
      [event.target.name]: event.target.value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const errors = validationsService(service)
    if(Object.keys(errors).length > 0){
      Swal.fire({
        title: 'Empty fields',
        icon: 'error',
        confirm: 'accept'
      })
      return;
    }
    axios.post('http://localhost:3000/api/products/', service)
    .then(res => {
      Swal.fire({
        title: 'Service Created',
        icon: 'success',
        confirm: 'accept'
      })
      navigate('/allServices')
    })
    setService({
      name: '',
      price: '',
      description: '',
      photo: ''
    })
    .catch(error => {
      console.log({message: error.message});
    })
  }

 
  return (
    <>
    <Navbar />
    <div className="w-full h-screen">
        <form onSubmit={handleSubmit} className="w-2/3 h-screen rounded flex items-center justify-center flex-col mx-auto text-white">
          <div className="flex flex-col gap-2 w-full h-[80px]">
            <input name="name" onChange={handleChange} value={service.name} type="text" className="py-2 text-black rounded px-2" placeholder="name service..." />
            {errors && <span className="text-yellow-500">{errors.name}</span>}
          </div>
          <div className="flex flex-col gap-2 w-full h-[140px] border border-yellow-300">
            <textarea name="description" onChange={handleChange} value={service.description} className="py-2 text-black rounded  px-2" placeholder="description..." />
            {errors && <span className="text-yellow-500">{errors.description}</span>}
          </div>
          <div className="flex flex-col gap-2 w-full h-[80px]">
            <input name="price" onChange={handleChange} value={service.price} type="number" className="py-2 text-black rounded px-2" placeholder="price..." />
            {errors && <span className="text-yellow-500">{errors.price}</span>}
          </div>
          <div className="flex flex-col gap-2 w-full h-[80px]">
            <input name="photo" type="file" onChange={handleChange} value={service.photo} className="py-2 text-black rounded  px-2" placeholder="description..." />
            {errors && <span className="text-yellow-500">{errors.photo}</span>}
          </div>
          <button type="submit" className="bg-slate-300 text-black w-[180px] rounded py-2 hover:bg-slate-400 ">create</button>
        </form>
    </div>
    </>
  )
}

export default CreateService