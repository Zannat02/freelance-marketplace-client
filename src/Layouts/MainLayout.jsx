import React from 'react';
import { Outlet, useLocation } from 'react-router';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Bannar from '../Components/Bannar';

const MainLayout = () => {

    const location = useLocation();
    const hideFooterRoutes = ['/login', '/signup'];
    const hideFooter = hideFooterRoutes.includes(location.pathname);

    return (
        <div>
            <section className='bg-[#EBF4DD]'>
                <Header />
            </section>
           

            <section className=''>
                <Outlet />
            </section>

            {!hideFooter && (
                <section>
                    <Footer />
                </section>
            )}
        </div>
    );
};

export default MainLayout;




