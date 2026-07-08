

import React, { useEffect } from 'react';
import { animate, stagger } from "motion";

const FeaturedTask = ({ tasks ,
darkMode }) => {

   

    useEffect(() => {
    if (tasks.length > 0) {
        animate(
            "li",
            { y: 0, opacity: 1 },
            { delay: stagger(0.1), duration: 0.4 }
        );
    }
}, [tasks]); 

    return (
        <div className="p-10">
            <h2 className={`text-3xl text-center font-bold mb-4 ${darkMode?'text-white':''}`}>Featured Tasks</h2>

            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                {
                    tasks.map(task => (
                        <li
                            key={task._id}
                            className={`border rounded p-4 shadow translate-y-10 opacity-0 ${darkMode ? "bg-[#1E293B] text-white border-gray-600"  : "bg-[#EBF4DD]"}`}>
        
                            <h3 className="text-xl font-semibold">
                                {task.title}
                            </h3>
                            <p>Category: {task.category}</p>
                            <p>Budget: ৳{task.budget}</p>
                            {/* <p>Deadline: {task.deadline}</p> */}
                            <p>Deadline: {new Date(task.deadline).toLocaleDateString()}</p>

                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default FeaturedTask;





