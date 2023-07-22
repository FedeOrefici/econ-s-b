import App from '../App';
import { createBrowserRouter } from 'react-router-dom'
import Register from '../views/register/Register';
import Login from '../views/login/Login';
import AllServices from '../views/AllServices/AllServices';
import DetailService from '../components/service detail/DetailService';
import CreateService from '../views/create service/CreateService';
import MyServices from '../views/my services/MyServices';


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
    },
    {
        path: '/createService',
        element: <CreateService />
    },
    {
        path: '/myServices',
        element: <MyServices />
    }
])

export default router;