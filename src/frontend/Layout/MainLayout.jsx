
import { Outlet } from 'react-router-dom';
import Header from '../global/Header/Header';
import MobileMenu from '../global/Mobile/MobileMenu';

const MainLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <MobileMenu />
        </>
    );
};

export default MainLayout;