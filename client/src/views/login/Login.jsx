import { useState } from "react"
import { useNavigate, NavLink } from "react-router-dom"
import back from '../../../assets/backhome.jpg'
import validationLogin from "./validation"
import axios from "axios"
import Swal from "sweetalert2"

const Login = () => {

  const navigate = useNavigate()

  const [login, setLogin] = useState({
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState({
    email: '',
    password: ''
  })

  const handleEvent = (event) => {
    setLogin({
      ...login,
      [event.target.name]: event.target.value
    })
    setErrors(validationLogin({
      ...login,
      [event.target.name]: event.target.value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const errors = validationLogin(login)
    if(Object.keys(errors).length > 0){
      Swal.fire({
        title: 'Empty fields',
        icon: 'error',
        confirm: 'accept'
      })
      return;
    }
    axios.post('http://localhost:3000/api/login', login)
    .then((res) => {

      const token = res.data.token
      const user = res.data.user
      localStorage.setItem('token', token)
      localStorage.setItem('user', JSON.stringify(user))

      Swal.fire({
        title: res.data.message,
        icon: 'info',
        confirmButtonText: 'Accept'
      }) 
      navigate('/');
    })
    setLogin({
      email: '',
      password: ''
    })
    .catch(error => {
      console.log({message: error.message})
    })
  }


  return (
    <div className="text-white w-full h-screen flex"
    style={{backgroundImage: `url(${back})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
    >
      <form className="bg-gray-800 w-1/2 flex items-start justify-center flex-col" onSubmit={handleSubmit}>
        <div className="mx-auto">
          <div className="h-[80px] flex flex-col gap-1">
            <input onChange={handleEvent} value={login.email} name='email' type="email" placeholder="email..." className="p-2 rounded w-[400px] text-slate-950" />
            {errors && <span className="text-yellow-400">{errors.email}</span>}
          </div>
          <div className="h-[80px] flex flex-col gap-1">
            <input onChange={handleEvent} value={login.password} name='password' type="password" placeholder="password..." className="p-2 rounded w-[400px] text-slate-950" />
            {errors && <span className="text-yellow-400">{errors.password}</span>}
          </div>
          <button type="submit" className="bg-lime-500 w-[300px] rounded p-2 text-slate-950 font-semibold">login</button>
        </div>
        <div className="mx-[300px] mt-10 flex items-center justify-center gap-4">
          <p>you don´t have account?</p>
          <NavLink to='/register' className="text-white"><span className="font-bold italic underline">Register</span></NavLink>
          
        </div>
      </form>
    </div>
  )
}

export default Login