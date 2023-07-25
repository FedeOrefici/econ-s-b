import { createContext, useState } from "react";

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
    }

    




    

    return (
        <CartContext.Provider value={{handleOpenCart, isOpen, handleCloseCart, isCartVisible, addToCart, cart, setCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;