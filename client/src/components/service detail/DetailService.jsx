import { useContext, useEffect, useState } from "react"
import { ProductContext } from "../../context/contextProducts"
import { useParams } from "react-router-dom"
import axios from "axios"

const DetailService = () => {

  const { id } = useParams()

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
      {
        <div key={product._id}>
          <p>{product.name}</p>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>  
      }
    </div>
  )
}

export default DetailService