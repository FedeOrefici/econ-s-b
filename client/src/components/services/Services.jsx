import { NavLink } from "react-router-dom"
import back from '../../../assets/backabout.jpg'

const Services = () => {

  

  return (
    <div className="text-white w-full h-screen bg-slate-900 flex flex-col items-center"
    style={{backgroundImage: `url(${back})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
    >
      <div className="bg-slate-50 text-slate-950 w-full h-2/3 p-10 flex items-center justify-center">
        <div className="w-1/2">
          <p className="text-4xl uppercase">About</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu suscipit tortor. Vivamus blandit, libero vitae rutrum tristique, enim orci lacinia ante, non bibendum felis nunc sed nisi. Nulla egestas dapibus sodales. Duis sed ipsum ut justo pellentesque pellentesque. Vivamus sed convallis leo, commodo suscipit leo. Donec vitae urna purus. Fusce elementum tincidunt diam, sit amet rhoncus metus viverra sit amet. Pellentesque aliquet elit mauris, ut pretium purus tempus sed.</p>
        </div>
      </div>
        <NavLink to='/allServices'>
          <button className="bg-gray-800 shadow-lg text-white p-2 rounded w-[200px] absolute left-[850px] bottom-[-650px] hover:bg-gray-700 transition-colors">all services</button>
        </NavLink>
    </div>
  )
}

export default Services