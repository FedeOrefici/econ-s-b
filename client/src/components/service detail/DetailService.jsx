import { useContext, useEffect, useState } from "react"
import { NavLink, useParams } from "react-router-dom"
import axios from "axios"
import Navbar from "../navbar/Navbar"
import { CartContext } from "../../context/ContextCart"
import { ProductContext } from "../../context/ContextProducts"
import back from '../../../assets/backabout.jpg'
import profile from '../../../assets/pic.jpg'

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
        <div className="flex items-center justify-center w-full h-screen" style={{backgroundImage:`url(${back})`}}>
        {
          <div className="bg-slate-100 w-3/4 h-3/4 mx-auto border rounded p-4 flex" key={product?._id}>
            <img src={profile} className="w-[500px] h-[670px] shadow-lg" />
            <div className="flex flex-col justify-center w-[900px] h-[670px]">
              <div className="flex flex-col p-10">
                <p className="text-slate-900 text-4xl font-bold py-2">{product?.name}</p>
                <p className="text-slate-900 text-justify">{product?.description}</p>
                <p className="font-bold text-slate-900 py-2 mt-4 w-1/2 px-2">${product?.price}</p>
              </div>
              <div className="flex relative left-10 gap-10 py-2 w-full ">
                <button onClick={() => addToCart(product)} className="bg-slate-900 hover:bg-slate-800 text-white rounded py-2 w-[180px]">add to cart</button>
                <NavLink onClick={backMenu} to='/allServices' className="bg-slate-900 hover:bg-slate-800 text-white rounded py-2 w-[180px] text-center">more services</NavLink>
              </div>
            </div>
          </div>
        }
        </div>
    </div>
  )
}

export default DetailService