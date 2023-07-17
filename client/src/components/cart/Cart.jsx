import { useContext } from "react"
import { CartContext } from "../../context/ContextCart"


const Cart = () => {

  const { handleCloseCart } = useContext(CartContext)

  console.log(handleCloseCart, 'aca');

  return (
    <div className="absolute bg-slate-50 h-[400px] w-[300px] top-7 right-[100px] p-4 rounded">
        <button onClick={handleCloseCart} className="text-white bg-red-600 hover:bg-red-500 p-2 rounded">close</button>
    </div>
  )
}

export default Cart