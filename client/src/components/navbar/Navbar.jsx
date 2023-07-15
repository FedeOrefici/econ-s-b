import { NavLink } from "react-router-dom"
import UserProfile from "../user/UserProfile"
import UserContextProvider from "../../context/ContextUser"

const Navbar = () => {

  
  return (
    <UserContextProvider>
      <div className="w-full bg-gray-900 py-2 text-white flex items-center justify-around">
        <div className="py-4"><span class="material-symbols-outlined">groups</span></div>
          <ul className="flex w-1/2 gap-10 justify-around py-4">
              <NavLink className='cursor-pointer py-4' to='/allServices'>services</NavLink>
              <li className="cursor-pointer py-4">contact</li>
              <UserProfile />
          </ul>
      </div>
    </UserContextProvider>
  )
}

export default Navbar