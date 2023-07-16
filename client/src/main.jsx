import { RouterProvider } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './routes/Routes'
import UserContextProvider from './context/ContextUser'
import ProductContextProvider from './context/contextProducts'

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContextProvider>
    <ProductContextProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </ProductContextProvider>
  </UserContextProvider>
)
