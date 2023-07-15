import { useState } from "react"
import axios from "axios"


const Register = () => {

    const [register, setRegister] = useState({
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
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/api/users', register)
        .then(res => {
            console.log(res.data);
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
    <div>
        <form onSubmit={handleSubmit}>
            <div> 
                <label>name</label>
                <input value={register.name} name="name" onChange={handleChange} type='text' />
            </div>
            <div>
                <label>email</label>
                <input value={register.email} name="email" onChange={handleChange} type='email' />
            </div>
            <div>
                <label>password</label>
                <input value={register.password} name="password" onChange={handleChange} type='password' />
            </div>
            <div>
                <label>password</label>
                <input value={register.typePassword} name="typePassword" onChange={handleChange} type='password' />
            </div>
            <button type="submit">create</button>
        </form>
    </div>
  )
}

export default Register