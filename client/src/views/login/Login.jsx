import { useState } from "react"
import { useNavigate } from "react-router-dom"
import back from '../../../assets/backhome.jpg'
import google from '../../../assets/logogoogle.png'
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
      Swal.fire({
        title: res.data.message,
        icon: 'info',
        confirmButtonText: 'Accept'
      });
      setLogin({
        email: '',
        password: ''
      });
      navigate('/');
    })
    .catch(error => {
      console.log({message: error.message});
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
          <p className="text-white">or <span className="font-bold italic underline">Login</span> with</p>
          <img src={google} className="w-[10%] cursor-pointer" />
        </div>
      </form>
    </div>
  )
}

export default Login