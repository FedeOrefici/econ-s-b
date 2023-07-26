import { useState } from "react"
import validationsContact from "./validations"

const Contact = () => {

  const [message, setMessage] = useState({
    email: '',
    message: ''
  })

  const [errors, setErrors] = useState({
    email:'',
    message: ''
  })

  const handleChange = (event) => {
    setMessage({
      ...message,
      [event.target.name]: event.target.value
    })
    setErrors(validationsContact({
      ...message,
      [event.target.name]: event.target.value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(message)
    setMessage({
      email: '',
      message: ''
    })
  }


  return (
    <div className="flex flex-col text-slate-950 w-full h-screen gap-20 items-center justify-center bg-slate-900">
      <p className="relative right-[360px] italic font-bold text-lime-500">contact us for more information</p>
      <form onSubmit={handleSubmit} className="w-1/2 h-1/2">
        <div className="flex flex-col h-[80px]">
          <input onChange={handleChange} name="email" value={message.email} className="p-2 w-full" type="email" placeholder="email" />
          {errors && <span className="text-yellow-300 p-2">{errors.email}</span>}
        </div>
        <div className="flex flex-col h-[350px]">
          <textarea onChange={handleChange} name="message" value={message.message} className="h-[300px] p-2" placeholder="mesage" />
          {errors && <span className="text-yellow-300 p-2">{errors.message}</span>}
        </div>
        <button type="submit" className="bg-lime-400 w-[180px] py-2 rounded font-medium hover:bg-lime-500">send</button>
      </form>
    </div>
  )
}

export default Contact