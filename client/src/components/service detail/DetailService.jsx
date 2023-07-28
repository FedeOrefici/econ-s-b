import { useContext, useEffect, useState } from "react"
import { NavLink, useParams } from "react-router-dom"
import { CartContext } from "../../context/ContextCart"
import { ProductContext } from "../../context/ContextProducts"
import axios from "axios"
import Navbar from "../navbar/Navbar"
import DatesCalendar from "../calendar/DatesCalendar"



const DetailService = () => {

  const { id } = useParams()
  const { addToCart } = useContext(CartContext)
  const { backMenu } = useContext(ProductContext)

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
    <div>
      <Navbar />
        <div className="flex items-center justify-center w-full h-screen p-10 bg-slate-50">
        {
          <div className="flex flex-col items-center justify-center w-1/2 h-screen mx-auto rounded p-4" key={product?._id}>
            <div className="flex flex-col items-center justify-center w-[900px] h-[670px] border border-red-600 p-10">
              <img src={product?.photo} className="w-[300px] h-[300px] border border-red-500 shadow-lg" />
              <div className="flex flex-col p-10 items-center justify-center text-center">
                <p className="text-slate-900 text-4xl font-bold py-2">{product?.name}</p>
                <p className="text-slate-900 text-center w-[400px]">{product?.description}</p>
                <p className="font-bold text-slate-900 py-2 mt-4 w-1/2 px-2">${product?.price}</p>
              </div>
              
                <NavLink onClick={backMenu} to='/allServices' className="bg-slate-900 hover:bg-slate-800 text-white rounded py-2 w-[180px] text-center">more services</NavLink>
            </div>
          </div>
        }
        <div className="flex flex-col justify-center w-[900px] h-[670px] border border-red-600 p-10">
          <div className="flex flex-col items-center justify-center left-10 gap-10 py-2 w-full">
            <DatesCalendar />
            <button onClick={() => addToCart(product)} className="bg-slate-900 hover:bg-slate-800 text-white rounded py-2 w-[180px]">add Service and date</button>
          </div>
        </div>
        </div>
    </div>
  )
}

export default DetailService