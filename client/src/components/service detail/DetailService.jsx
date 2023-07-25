import { useContext, useEffect, useState } from "react"
import { NavLink, useParams } from "react-router-dom"
import axios from "axios"
import Navbar from "../navbar/Navbar"
import { CartContext } from "../../context/ContextCart"

const DetailService = () => {

  const { id } = useParams()
  const { addToCart } = useContext(CartContext)

  const [product, setProduct] = useState(null)

  useEffect(() => {
    const axiosDataDetail = async () => {
      const endpoint = `http://localhost:3000/api/products/${id}`
      const response = await axios.get(endpoint)
      setProduct(response.data)
    }
    axiosDataDetail()
  }, [id])

  return (
    <div className="">
      <Navbar />
        <div className="flex items-center justify-center w-full h-screen">
        {
          <div className="bg-slate-200 w-1/2 mx-auto shadow-lg rounded p-4" key={product?._id}>
            <p>{product?.name}</p>
            <p>{product?.description}</p>
            <p>${product?.price}</p>
            <div className="flex gap-1">
              <button onClick={() => addToCart(product)} className="bg-slate-800 hover:bg-slate-700 text-white rounded py-2 w-[180px]">add to cart</button>
              <NavLink to='/allServices' className="bg-slate-800 hover:bg-slate-700 text-white rounded py-2 w-[180px] text-center">more services</NavLink>
            </div>
          </div>
        }
        </div>
    </div>
  )
}

export default DetailService 