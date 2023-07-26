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


    const searchProducts = async (name) => {
        try {
            const response = await axios.get(`http://localhost:3000/api/products?name=${name}`)
            setProducts(response.data)
        } catch (error) {
            console.log('error searching products', error);
        }
    }


  

    return (
        <ProductContext.Provider value={{products, searchProducts}}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider;
