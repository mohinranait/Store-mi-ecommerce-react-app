import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../frontend/Layout/MainLayout';
import Home from '../frontend/pages/Home/Home';
import Login from '../frontend/pages/Login/Login';
import Register from '../frontend/pages/Register/Register';
import Products from '../frontend/pages/Products/Products';
import Shops from '../frontend/pages/Shops/Shops';
import Carts from '../frontend/pages/Carts/Carts';
import UserDashboard from '../frontend/pages/User/UserDashboard';
import Account from '../frontend/pages/User/Account';
import UserOrders from '../frontend/pages/User/UserOrders';
import UserProfile from '../frontend/pages/User/UserProfile';

const myRoutes = createBrowserRouter([
    {
        path : "/",
        element : <MainLayout />,
        children : [
            { index : true, element : <Home />, loader : async () => await fetch("https://assignment-10-server-theta-ivory.vercel.app/products") },
            { path : "/shops", element : <Shops /> , loader : async () => await fetch("https://assignment-10-server-theta-ivory.vercel.app/products") },
            { path : "/products", element : <Products /> },
            { path : "/carts", element : <Carts /> },
            { path : "/login", element : <Login /> },
            { path : "/register", element : <Register /> },
            {
                path: "/dashboard",
                element : <UserDashboard />,
                children : [
                    {
                        index: true,
                        element : <Account />
                    },
                    {
                        path: "orders",
                        element : <UserOrders />
                    },
                    {
                        path: "profile",
                        element : <UserProfile />
                    },
                    {
                        path: "address",
                        element : <div>Address</div>
                    },
                ]
            }
        ]
    }
]);

export default myRoutes;