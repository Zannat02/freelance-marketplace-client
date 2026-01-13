

import React, { useEffect } from 'react';
import { animate, stagger } from "motion";

const FeaturedTask = ({ tasks }) => {

    useEffect(() => {
        animate(
            "li",
            { y: 0, opacity: 1 },
            { delay: stagger(0.1), duration: 0.4 }
        );
    }, []);

    return (
        <div className="p-10">
            <h2 className="text-3xl text-center  font-bold mb-4">Featured Tasks</h2>

            <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                {
                    tasks.map(task => (
                        <li
                            key={task._id}
                            className="border rounded p-4 shadow
                                       translate-y-10 opacity-0 bg-[#EBF4DD]"
                        >
                            <h3 className="text-xl font-semibold">
                                {task.title}
                            </h3>
                            <p>Category: {task.category}</p>
                            <p>Budget: ৳{task.budget}</p>
                            <p>Deadline: {task.deadline}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default FeaturedTask;
