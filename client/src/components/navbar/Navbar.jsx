import { NavLink } from "react-router-dom"
import UserProfile from "../user/UserProfile"
import UserContextProvider from "../../context/ContextUser"
import Cart from "../cart/Cart"
import { useContext } from "react"
import { CartContext } from "../../context/ContextCart"
import Swal from "sweetalert2"
import SearchBar from "../search bar/SearchBar"

const Navbar = () => {

  const { handleOpenCart, isCartVisible, cart } = useContext(CartContext)


  const handleCartClick = () => {
    if(cart.length > 0){
      handleOpenCart()
    } else {
      Swal.fire({
        icon: 'info',
        title: 'Empty Cart',
        confirmButtonText: 'Accept'
      })
    }
  }

  
  return (
    <UserContextProvider>
      <div className="w-full h-[100px] py-2 text-white flex items-center justify-around bg-slate-800">
        <div>
          <span className="material-symbols-outlined">groups</span>
        </div>
          <div className="flex items-center justify-between px-20 cursor-pointer gap-10 w-2/3">
          
            <SearchBar />
            <NavLink className='cursor-pointer' to='/'>Home</NavLink>
            <NavLink className='cursor-pointer' to='/allServices'>services</NavLink>
            <UserProfile />
          </div>
          <div onClick={handleCartClick} className="w-[40px] h-[40px] flex items-center justify-center text-lime-400 cursor-pointer hover:bg-lime-400 hover:text-slate-900 hover:rounded-full hover:w-[40px] hover:h-[40px] hover:transition-colors">
            <span className="material-symbols-outlined">shopping_cart</span>
          </div>
            {isCartVisible ? <Cart /> : null}
      </div>
    </UserContextProvider>
  )
}

export default Navbar