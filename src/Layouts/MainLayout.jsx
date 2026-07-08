import React from 'react';
import { useState } from 'react';
import { Outlet, useLocation } from 'react-router';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Bannar from '../Components/Bannar';

const MainLayout = () => {

    const location = useLocation();
    const hideFooterRoutes = ['/login', '/signup'];
    const hideFooter = hideFooterRoutes.includes(location.pathname);
    const [darkMode, setDarkMode] = useState(false)

    return (
        <div>
            <section className='bg-[#EBF4DD]'>
                <Header darkMode={darkMode}
                    setDarkMode={setDarkMode} />
            </section>


            <section className=''>
                <Outlet context={{
                    darkMode,
                    setDarkMode
                }} />
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




