import { useContext } from "react"
import { CartContext } from "../../context/ContextCart"


const Cart = () => {

  const { handleCloseCart, cart, deleteItemFromCart } = useContext(CartContext)


  return (
  
      <div className="absolute top-[30px] right-32 w-[400px] h-[700px] bg-slate-400 rounded shadow-lg p-3">
        {cart.map((item) => {
          return (
            <div className="flex  items-center justify-between px-4 mt-1 text-black py-2 bg-slate-300 rounded w-full">
              <p className="font-medium">{item.name}</p>
              <p className=""> $ {item.price}</p>
              <button onClick={() => deleteItemFromCart(item._id)} className="bg-lime-400 p-2 rounded text-black hover:bg-lime-500">delete</button>
            </div>
          )
        })}
        <button className="bg-lime-400 text-black rounded p-2 hover:bg-lime-500">Go to pay</button>
        <button className="bg-red-600 p-2 w-[120px] rounded hover:bg-red-700" onClick={handleCloseCart}>close</button>
      </div>
    
  )
}

export default Cart