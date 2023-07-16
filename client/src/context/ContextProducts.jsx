import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext()

const ProductContextProvider = ({children}) => {

    const [products, setProducts] = useState()

    useEffect(() => {
        const axiosData = async () => {
            const endpoint = 'http://localhost:3000/api/products/'
            const response = await axios.get(endpoint)
            setProducts(response.data)
        }
        axiosData()
    }, [])

    return (
        <ProductContext.Provider value={{products}}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider;
