import { useContext } from "react"
import { CartContext } from "../../context/ContextCart"


const Cart = () => {

  const { handleCloseCart, cart } = useContext(CartContext)

  console.log(cart, 'desde cart');

  return (
    <>
      {cart ? cart.map(item => (
        <div key={item._id} className="text-black absolute flex items-center justify-center flex-col gap-2 bg-slate-100 h-[700px] w-[400px] top-[25px] right-[140px] p-4 rounded opacity-0 transition-opacity duration-300 hover:opacity-100 hover:shadow-lg overflow-y-auto">
          <div className="flex gap-4 items-center justify-center">
            <p className="italic font-medium">{item?.name}</p>
            <span>$ {item?.price}</span>
          </div>
          <button onClick={handleCloseCart} className="text-white bg-red-600 hover:bg-red-500 p-2 rounded">close</button>
      </div>
      )) : ( null )}
    </>
  )
}

export default Cart