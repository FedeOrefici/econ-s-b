import { useContext } from "react"
import { CartContext } from "../../context/ContextCart"
import { ProductContext } from "../../context/contextProducts"


const Cart = () => {

  const { handleCloseCart } = useContext(CartContext)
  const { products } = useContext(ProductContext)


  return (
    <div className="text-black absolute flex items-center justify-center flex-col gap-2 bg-slate-50 h-[400px] w-[300px] top-[25px] right-[101px] p-4 rounded opacity-0 transition-opacity duration-300 hover:opacity-100 overflow-y-auto">
        <div className="flex gap-4 border items-center justify-center">
          <p className="italic font-medium">item 1</p>
          <button className="bg-red-500 px-2 rounded">-</button>
          <p>$ 50</p>
          <button className="bg-green-500 px-2 rounded">+</button>
        </div>
        <button onClick={handleCloseCart} className="text-white bg-red-600 hover:bg-red-500 p-2 rounded">close</button>
    </div>
  )
}

export default Cart