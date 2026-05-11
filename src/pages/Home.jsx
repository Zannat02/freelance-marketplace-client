import React from 'react';
import Header from '../Components/Header';
import { useLoaderData } from 'react-router';
import FeaturedTask from '../Components/FeaturedTask';
import { Helmet } from 'react-helmet';
import Bannar from '../Components/Bannar';

const Home = () => {

  const tasks = useLoaderData();
  return (
    <div>

      <Helmet>
        <title>Home | My Freelance Marketplace</title>
        <meta name="description" content="Welcome to the freelance marketplace home page." />
      </Helmet>

       <section className='-mb-10'>
                <Bannar></Bannar>
            </section>
      <div className='bg-[#90AB8B] p-5'>
        <FeaturedTask tasks={tasks}></FeaturedTask>
      </div>

    </div>
  );
};

export default Home;



