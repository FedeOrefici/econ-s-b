import { useState } from "react"
import axios from "axios"
import back from '../../../assets/backhome.jpg'
import validationRegister from "./validations"
import Swal from "sweetalert2"

const Register = () => {

    const [register, setRegister] = useState({
        name: '',
        email: '',
        password: '',
        typePassword: ''
    })

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
        typePassword: ''
    })

    const handleChange = (event) => {
        setRegister({
            ...register,
            [event.target.name]: event.target.value
        })
        setErrors(validationRegister({
            ...register,
            [event.target.name]: event.target.value
        }))

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const errors = validationRegister(register)
        if(Object.keys(errors).length > 0){
            Swal.fire({
                title: 'Empty fields',
                icon: 'warning',
                confirm: 'accept'
            })
            return;
        }
        axios.post('http://localhost:3000/api/register', register)
        .then(res => {
            Swal.fire({
                title: res.data.message,
                icon: 'warning',
                confirm: 'accept'
            });
        }).catch(err => {
            console.log({message: err.message});
        })
        setRegister({
            name: '',
            email: '',
            password: '',
            typePassword: ''
        })
    }

  return (
    <div className="text-white w-full h-screen flex"
    style={{backgroundImage: `url(${back})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
    >
        <form className="bg-gray-800 w-1/2 flex items-start justify-center flex-col" onSubmit={handleSubmit}>
            <div className="mx-auto">
                <div className="h-[80px] flex flex-col gap-1"> 
                    <input value={register.name} name="name" onChange={handleChange} type='text' placeholder="name..." className="p-2 rounded w-[400px] text-slate-950" />
                    {errors && <span className="text-yellow-400">{errors.name}</span>}
                </div>
                <div className="h-[80px] flex flex-col gap-1">
                    <input value={register.email} name="email" onChange={handleChange} type='email' placeholder="email..." className="p-2 rounded w-[400px] text-slate-950" />
                    {errors && <span className="text-yellow-400">{errors.email}</span>}
                </div>
                <div className="h-[80px] flex flex-col gap-1">
                    <input value={register.password} name="password" onChange={handleChange} type='password' placeholder="password..." className="p-2 rounded w-[400px] text-slate-950" />
                    {errors && <span className="text-yellow-400">{errors.password}</span>}
                </div>
                <div className="h-[80px] flex flex-col gap-1">
                    <input value={register.typePassword} name="typePassword" onChange={handleChange} type='password' placeholder="retype password..." className="p-2 rounded w-[400px] text-slate-950" />
                    {errors && <span className="text-yellow-400">{errors.typePassword}</span>}
                </div>
                <button type="submit"  className="bg-lime-500 w-[300px] rounded p-2 text-slate-950 font-semibold">create</button>
            </div>
        </form>
    </div>
  )
}

export default Register