import { useContext } from "react"
import { CartContext } from "../../context/ContextCart"


const Cart = () => {

  const { handleCloseCart } = useContext(CartContext)


  return (
    <div className="absolute bg-slate-50 h-[400px] w-[300px] top-7 right-[100px] p-4 rounded opacity-0 transition-opacity duration-300 hover:opacity-100">
        <button onClick={handleCloseCart} className="text-white bg-red-600 hover:bg-red-500 p-2 rounded">close</button>
    </div>
  )
}

export default Cart