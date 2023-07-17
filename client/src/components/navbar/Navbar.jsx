import { NavLink } from "react-router-dom"
import UserProfile from "../user/UserProfile"
import UserContextProvider from "../../context/ContextUser"
import Cart from "../cart/Cart"
import { useContext } from "react"
import { CartContext } from "../../context/ContextCart"

const Navbar = () => {

  const { handleOpenClose, isOpen } = useContext(CartContext)

  
  return (
    <UserContextProvider>
      <div className="w-full h-[100px] py-2 text-white flex items-center justify-around">
        <div>
          <span class="material-symbols-outlined">groups</span>
        </div>
          <div className="flex items-center cursor-pointer gap-1">
            <NavLink className='cursor-pointer' to='/'>Home</NavLink>
            <NavLink className='cursor-pointer' to='/allServices'>services</NavLink>
            <UserProfile />
          <div onClick={handleOpenClose} className="flex items-center justify-center">
            <span class="material-symbols-outlined">shopping_cart</span>
            {isOpen ? <Cart /> : null}
          </div>
          </div>
      </div>
    </UserContextProvider>
  )
}

export default Navbar