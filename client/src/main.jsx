import { RouterProvider } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './routes/Routes'
import UserContextProvider from './context/ContextUser'
import ProductContextProvider from './context/ContextProducts'
import CartContextProvider from './context/ContextCart'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
      <CartContextProvider>
        <ProductContextProvider>
          <RouterProvider router={router} />
        </ProductContextProvider>
      </CartContextProvider>
    </UserContextProvider>
  </React.StrictMode>
)
