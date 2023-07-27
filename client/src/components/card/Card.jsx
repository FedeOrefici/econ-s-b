import { NavLink } from "react-router-dom"
import profile from '../../../assets/pic.jpg'

const Card = ({product}) => {


  return (
    <>
      <div key={product?._id} className="border w-[300px] h-[400px] flex items-center justify-center flex-col gap-10 rounded cursor-pointer hover:scale-105 hover:transition-transform" style={{backgroundImage: `url(${profile})`, backgroundSize:'cover', backgroundPosition:'center'}}>
        <div className="flex flex-col items-center justify-center w-full">
          <p className="font-bold text-2xl text-white">{product?.name}</p>
          <span className="border-b-2 border-lime-400 w-2/3"></span>
          <div className="flex text-white relative top-[30px]">
            <span>$</span>
            <p>{'10'}</p>
          </div>
            <NavLink to={`/products/${product._id}`} className="font-medium bg-lime-400 w-[170px] hover:bg-lime-500 text-center py-2 rounded text-slate-950 relative top-[90px]">more</NavLink>
        </div>
     </div>   
    </>
  )
}

export default Card