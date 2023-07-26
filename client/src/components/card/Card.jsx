import { useContext, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { ProductContext } from "../../context/ContextProducts"
import profile from '../../../assets/pic.jpg'

const Card = () => {

    const { products } = useContext(ProductContext)
  

  return (
    <>
        {products?.map((product) => (
              <div key={product?._id} className="bg-gray-200 w-[400px] h-[500px] flex items-center justify-center flex-col gap-10 rounded">
                <img src={profile} className="w-[300px] h-[300px] rounded relative bottom-8" />
                <div className="flex flex-col items-center justify-center w-full">
                  <p className="font-bold text-2xl">{product?.name}</p>
                  <NavLink to={`/products/${product._id}`}  className="font-medium">more</NavLink>
                </div>
              </div>
            ))}
    </>
  )
}

export default Card