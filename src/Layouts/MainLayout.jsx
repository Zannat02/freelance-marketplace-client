import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';

const MainLayout = () => {
    return (
        <div className=''>
           
            <section className='bg-[#EBF4DD]  '>
                  <Header></Header>
            </section>


          <section className=' '>
               <Outlet></Outlet>
          </section>
        </div>
    );
};

export default MainLayout;