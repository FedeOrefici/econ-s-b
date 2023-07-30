import { NavLink } from "react-router-dom"
import back from '../../../assets/backabout.jpg'

const Services = () => {

  

  return (
    <div className="text-white w-full h-screen bg-slate-900 flex flex-col items-center"
    style={{backgroundImage: `url(${back})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
    >
      <div className="bg-slate-50 text-slate-950 w-full h-full p-10 flex items-center justify-center">
        <div className="w-1/2">
          <p className="text-4xl uppercase">About</p>
          <p className="text-justify my-2">Introducing a platform where you can access a diverse range of consultations tailored to your needs. Our services encompass a wide array of expertise, including musicians, lawyers, plumbers, truck drivers, and much more. Whatever assistance you require, whether it's legal advice, musical guidance, plumbing solutions, or professional trucking insights, our platform has you covered. Connect with experts in their respective fields, ensuring you receive top-notch advice and support to help you make informed decisions and enhance your endeavors. Embrace the power of knowledge and experience as you explore the vast opportunities offered by our advisory services.</p>
        </div>
      </div>
        <NavLink to='/allServices'>
          <button className="bg-gray-800 shadow-lg text-white p-2 rounded w-[200px] absolute left-[850px] bottom-[-850px] hover:bg-gray-700 transition-colors">all services</button>
        </NavLink>
    </div>
  )
}

export default Services