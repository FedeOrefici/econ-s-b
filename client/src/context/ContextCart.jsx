import { createContext, useState } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext()

const CartContextProvider = ({children}) => {

    const [isOpen, setIsOpen] = useState(false)
    const [isCartVisible, setIsCartVisible] = useState(false)
    const [cart, setCart] = useState([])

    const handleOpenCart = () => {
        setIsOpen(true)
        setIsCartVisible(true)
    }

    const handleCloseCart = () => {
        setIsCartVisible(false)
        setIsOpen(false)
    }

    const addToCart = (product) => {
        setCart([...cart, product])
        Swal.fire({
            icon: 'success',
            title: 'Item added to the Cart',
            confirmButtonText: 'Accept'
        })
    }

    const deleteItemFromCart = (id) => {
        setCart(prevCart => {
            const deleteItem = prevCart.filter((item) => item.id !== id)
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
            deleteItemFromCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;