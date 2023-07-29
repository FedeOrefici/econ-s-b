import App from '../App';
import { createBrowserRouter } from 'react-router-dom'
import Register from '../views/register/Register';
import Login from '../views/login/Login';
import AllServices from '../views/AllServices/AllServices';
import DetailService from '../components/service detail/DetailService';
import CreateService from '../views/create service/CreateService';
import MyServices from '../views/my services/MyServices';
import Payment from '../views/payment/Payment';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />,
    },
    {
        path: '/home',
        element: <App />,
    },
    {
        path: '/register',
        element: <Register />,
    },
    {
        path: '/allServices',
        element: <AllServices />
    },
    {
        path: '/products/:id',
        element: <DetailService />
    },
    {
        path: '/createService',
        element: <CreateService />
    },
    {
        path: '/myServices',
        element: <MyServices />
    },
    {
        path: '/payment',
        element: <Payment />
    }
])

export default router;