
import { Outlet } from 'react-router-dom';
import Header from '../global/Header/Header';

const MainLayout = () => {
    return (
        <>
            <Header />
            <Outlet />

        </>
    );
};

export default MainLayout;