
import { Outlet } from 'react-router-dom';
import Header from '../global/Header/Header';
import MobileMenu from '../global/Mobile/MobileMenu';
import Footer from '../global/Footer/Footer';

const MainLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
            <MobileMenu />
        </>
    );
};

export default MainLayout;