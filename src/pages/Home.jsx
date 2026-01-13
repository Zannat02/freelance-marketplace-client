import React from 'react';
import Header from '../Components/header';
import { useLoaderData } from 'react-router';
import FeaturedTask from '../Components/FeaturedTask';

const Home = () => {
   
  const tasks = useLoaderData();
    return (
        <div>
            

              <div className='bg-[#90AB8B] p-5'>
                 <FeaturedTask tasks={tasks}></FeaturedTask>
              </div>

        </div>
    );
};

export default Home;