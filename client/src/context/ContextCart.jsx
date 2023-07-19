import { createContext, useState } from "react";

export const CartContext = createContext()

const CartContextProvider = ({children}) => {

    const [isOpen, setIsOpen] = useState(false)
    const [isCartVisible, setIsCartVisible] = useState(false)

    const handleOpenCart = () => {
        setIsOpen(true)
        setIsCartVisible(true)
    }

    const handleCloseCart = () => {
        setIsCartVisible(false)
        setIsOpen(false)
    }
    

    return (
        <CartContext.Provider value={{handleOpenCart, isOpen, handleCloseCart, isCartVisible}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;