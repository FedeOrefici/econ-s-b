import { createBrowserRouter } from 'react-router-dom'
import Register from '../../views/register/Register';
import Login from '../../views/login/Login';
import App from '../../App';
import Footer from '../footer/Footer';
import AllServices from '../../views/AllServices/AllServices';
import DetailService from '../service detail/DetailService';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Footer />
            }
        ]
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
        path: '/detail',
        element: <DetailService />
    }
])

export default router;