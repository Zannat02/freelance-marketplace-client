import React from 'react';
import { Outlet, useLocation } from 'react-router';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const MainLayout = () => {

    const location = useLocation();
    const hideFooterRoutes = ['/login', '/signup'];
    const hideFooter = hideFooterRoutes.includes(location.pathname);

    return (
        <div>
            <section className='bg-[#EBF4DD]'>
                <Header />
            </section>

            <section>
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


// import React from 'react';
// import { Outlet, useLocation } from 'react-router';
// import Header from '../Components/Header';
// import Footer from '../Components/Footer';

// const MainLayout = () => {
//     const location = useLocation();

//     const authRoutes = ['/login', '/signup'];
//     const isAuthPage = authRoutes.includes(location.pathname);

//     return (
//         <div className="min-h-screen">
            
//             {/* Header সব page এ আগের মতই থাকবে */}
//             <section className='bg-[#EBF4DD]'>
//                <Header />
//              </section>

//             {/* 🔥 শুধু content area তেই bg লাগবে */}
//             <div className={`${isAuthPage ? 'bg-[#3B4953]' : 'bg-[#EBF4DD]'} `}>
//                 <Outlet />
//             </div>

//             {/* Footer শুধু auth page বাদে */}
//              {!isAuthPage && (
//                <section>
//                    <Footer />
//                 </section>
//             )}
//         </div>
//     );
// };

// export default MainLayout;


