import { useState } from "react"


const Login = () => {

  const [login, setLogin] = useState({
    email: '',
    password: ''
  })

  const handleEvent = (event) => {
    setLogin({
      ...login,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(login)
    setLogin({
      email: '',
      password: ''
    })
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>email</label>
          <input onChange={handleEvent} value={login.email} name='email' type="email" />
        </div>
        <div>
          <label>password</label>
          <input onChange={handleEvent} value={login.password} name='password' type="password" />
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  )
}

export default Login