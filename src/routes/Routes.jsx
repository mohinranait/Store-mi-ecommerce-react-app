import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../frontend/Layout/MainLayout';
import Home from '../frontend/pages/Home/Home';
import Login from '../frontend/pages/Login/Login';
import Register from '../frontend/pages/Register/Register';
import Products from '../frontend/pages/Products/Products';

const myRoutes = createBrowserRouter([
    {
        path : "/",
        element : <MainLayout />,
        children : [
            { path : "/", element : <Home />, loader : async () => await fetch("https://assignment-10-server-theta-ivory.vercel.app/products") },
            { path : "/products", element : <Products /> },
            { path : "/login", element : <Login /> },
            { path : "/register", element : <Register /> },
        ]
    }
]);

export default myRoutes;