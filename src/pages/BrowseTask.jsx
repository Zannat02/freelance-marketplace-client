import { section } from "motion/react-client";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router";
import Spinner from "../Components/Spinner";


const BrowseTasks = () => {
    const [tasks, setTasks] = useState([]);

    const [loading, setLoading] = useState(true);

   const BASE_URL = import.meta.env.VITE_API_URL;
    useEffect(() => {
        fetch(`http://localhost:3000/alltasks`)
            .then(res => res.json())
            .then(data => {
                setTasks(data);
                setLoading(false);
            });
    }, []);


    if (loading) return <Spinner />;

    return (

        <section className='bg-[#5A7863]'>
            <div className="w-11/12 mx-auto p-6 ">
                <Helmet>
                    <title>Browse Tasks | My Freelance Marketplace</title>

                </Helmet>

                <h2 className="text-2xl font-bold mb-6 text-center">Browse Tasks</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                    {tasks.map(task => (
                        <div key={task._id} className="border rounded-lg p-4 shadow bg-[#f7fbf1]">
                            <h3 className="text-xl font-semibold">{task.title}</h3>
                            <p className="text-gray-600">{task.category}</p>
                            <p className="text-sm">Deadline: {task.deadline}</p>

                            <Link to={`/task/${task._id}`}>
                                <button className="mt-3 btn btn-primary">
                                    See Details
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>


    );
};

export default BrowseTasks;
