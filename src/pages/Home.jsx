import React from 'react';
import Header from '../Components/Header';
import { useLoaderData } from 'react-router';
import FeaturedTask from '../Components/FeaturedTask';
import { Helmet } from 'react-helmet';
import Bannar from '../Components/Bannar';


import HowItWorks from "../Components/HowItWorks";
import WhyChooseUs from "../Components/WhyChooseUs";
import { useOutletContext } from "react-router";



const Home = () => {

  const tasks = useLoaderData();
  const { darkMode } = useOutletContext();

  return (
    <div >

      <Helmet>
        <title>Home | My Freelance Marketplace</title>
        <meta name="description" content="Welcome to the freelance marketplace home page." />
      </Helmet>




      <section className='-mb-10'>
        <Bannar darkMode={darkMode}  ></Bannar>
      </section>
      <div className={darkMode ? 'bg-[#0F172A] p-5 text-white':'bg-[#90AB8B] p-5'}>
        <FeaturedTask tasks={tasks}  darkMode={darkMode}  ></FeaturedTask>
      </div>



      <section>
        <HowItWorks  darkMode={darkMode} ></HowItWorks>
      </section>
      <section>
        <WhyChooseUs darkMode={darkMode}></WhyChooseUs>
      </section>

    </div>
  );
};

export default Home;



