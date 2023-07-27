import { NavLink } from "react-router-dom"
import profile from '../../../assets/pic.jpg'

const Card = ({product}) => {


  return (
    <>
      <div key={product?._id} className="bg-gray-200 w-[300px] h-[400px] flex items-center justify-center flex-col gap-10 rounded cursor-pointer hover:scale-105 hover:transition-transform">
        <div className="flex flex-col items-center justify-center w-full h-1/2">
          <img src={profile} className="w-[30%] rounded" />
          <p className="font-bold text-2xl">{product?.name}</p>
          <NavLink to={`/products/${product._id}`}  className="font-medium">more</NavLink>
        </div>
     </div>   
    </>
  )
}

export default Card