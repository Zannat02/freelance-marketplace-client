import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { section } from "motion/react-client";

const TaskDetails = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/alltasks/${id}`)
      .then(res => res.json())
      .then(data => setTask(data));
  }, [id]);

  if (!task) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
     <section className='bg-[#90AB8B]'>
       <div className="max-w-4xl mx-auto p-6 min-h-screen  flex flex-col items-center justify-center ">
      <h2 className="text-2xl font-bold mb-4">{task.title}</h2>

      <p><b>Category:</b> {task.category}</p>
      <p><b>Description:</b> {task.description}</p>
      <p><b>Deadline:</b> {task.deadline}</p>
      <p><b>Budget:</b> {task.budget}</p>
      <p><b>Posted By:</b> {task.email}</p>
    </div>
     </section>

  );
};

export default TaskDetails;
