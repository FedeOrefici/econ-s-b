import { createBrowserRouter } from 'react-router-dom'
import Register from '../views/register/Register';
import Login from '../views/login/Login';
import App from '../App';
import AllServices from '../views/AllServices/AllServices';
import DetailService from '../components/service detail/DetailService';


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
    },
    {
        path: '/allServices',
        element: <AllServices />
    },
    {
        path: '/products/:id',
        element: <DetailService />
    }
])

export default router;