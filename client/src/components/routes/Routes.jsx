import { createBrowserRouter } from 'react-router-dom'
import App from '../../App'
import Register from '../register/Register'
import Login from '../login/Login'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/register',
        element: <Register />,
    },
    {
        path: '/login',
        element: <Login />,
    }
])

export default router;