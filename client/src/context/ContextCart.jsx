import { createContext, useState } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext()

const CartContextProvider = ({children}) => {

    const [isOpen, setIsOpen] = useState(false)
    const [isCartVisible, setIsCartVisible] = useState(false)
    const [cart, setCart] = useState([])

    const [value, setValue] = useState(new Date())
    
    const handleChange = (date) => {
        setValue(date)
    }

    const formatDate = value.toLocaleDateString('en-EN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })

    const handleOpenCart = () => {
        setIsOpen(true)
        setIsCartVisible(true)
    }

    const handleCloseCart = () => {
        setIsCartVisible(false)
        setIsOpen(false)
    }

    const addToCart = (product) => {
        const productExist = cart.find((item) => item._id === product._id)
            if(productExist){
                Swal.fire({
                    icon: 'info',
                    title: 'Item is already added',
                    confirmButtonText: 'Accept'
                })
            } else {
                setCart([...cart, product])
                Swal.fire({
                    icon: 'success',
                    title: 'Item added to the Cart',
                    confirmButtonText: 'Accept'
                })     
            }
    }

    const deleteItemFromCart = (_id) => {
        setCart(prevCart => {
            const deleteItem = prevCart.filter((item) => item._id !== _id)
            return deleteItem
        })
    }

    return (
        <CartContext.Provider value={{
            handleOpenCart,
            isOpen,
            handleCloseCart,
            isCartVisible,
            addToCart,
            cart,
            setCart,
            deleteItemFromCart,
            handleChange,
            formatDate,
            value
            }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;