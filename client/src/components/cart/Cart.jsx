import { useContext, useEffect } from "react"
import { CartContext } from "../../context/ContextCart"


const Cart = () => {

  const { handleCloseCart, cart, deleteItemFromCart } = useContext(CartContext)
  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0)



  useEffect(() => {
    if(cart.length === 0){
      handleCloseCart()
    }
  }, [cart, handleCloseCart])



  return (
  
      <div className="absolute top-[20px] right-[75px] w-[600px] h-[800px] bg-slate-950 rounded shadow-lg p-3 flex flex-col items-center justify-around">
        <div className="flex flex-col w-full h-[650px] p-8 absolute bottom-32 overflow-y-auto">
          {cart.map((item) => {
            return (
              <div className="flex items-center justify-between px-4 mt-1 text-black py-2 bg-slate-300 rounded w-full">
                <p className="font-semibold">{item.name}</p>
                <p> $ {item.price}</p>
                <button onClick={() => deleteItemFromCart(item._id)} className="bg-red-600 p-2 rounded text-white hover:bg-red-500">delete</button>
              </div>
            )
          })}
        </div>
        <div className="flex flex-col w-full gap-2 absolute bottom-6">
          <div className="text-white flex items-center justify-center py-2 m-2 h-[30px] w-full">
            <p>total to pay: $</p>
            <span>{totalPrice}</span>
          </div>
          <div className="flex items-center justify-center p-2 gap-10 h-1/4 w-full">
            <button className="bg-lime-400 text-black rounded w-[120px] p-2 hover:bg-lime-500">Go to pay</button>
            <button className="bg-red-600 p-2 w-[120px] rounded hover:bg-red-700" onClick={handleCloseCart}>close</button>
          </div>
        </div>
      </div>
    
  )
}

export default Cart