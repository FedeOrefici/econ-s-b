import { createContext, useState } from "react";

export const CartContext = createContext()

const CartContextProvider = ({children}) => {

    const [isOpen, setIsOpen] = useState(false)

    const handleOpenClose = () => {
        setIsOpen(!isOpen)
        console.log('click');
    }



    return (
        <CartContext.Provider value={{handleOpenClose, isOpen}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;