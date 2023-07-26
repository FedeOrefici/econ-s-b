import { useContext, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { ProductContext } from "../../context/ContextProducts"

const Card = () => {

    const { products } = useContext(ProductContext)
  

  return (
    <>
        {products?.map((product) => (
              <div key={product?._id} className="bg-slate-500 w-[400px] h-[400px] flex items-center justify-center flex-col rounded">
                <p>{product?.name}</p>
                <p>{product?.photo}</p>
                <NavLink to={`/products/${product._id}`}  className="bg-slate-300">more</NavLink>
              </div>
            ))}
    </>
  )
}

export default Card