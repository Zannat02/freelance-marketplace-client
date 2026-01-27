import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useParams, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const UpdateTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/tasks/${id}`)
      .then(res => res.json())
      .then(data => setTask(data));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:3000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(task)
    })
      .then(res => res.json())
      .then(() => {
        Swal.fire("Success!", "Task updated successfully", "success");
        navigate('/myTasks');
      });
  };

  if (!task) return <p>Loading...</p>;

  return (
   <section className='bg-[#fffef5]'>
     <div className="w-11/12 mx-auto py-10 ">

      <Helmet>
        <title>Update Task | My Freelance Marketplace</title>
        <meta name="description" content="Update your task details." />
      </Helmet>

      <h2 className="text-3xl font-bold mb-8 text-center md:text-left">
        Update Task
      </h2>

      {/* MAIN RESPONSIVE FLEX */}
      <div className="flex flex-col md:flex-row gap-10 md:items-start">

        {/* FORM SECTION */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4 w-full md:w-1/2 max-w-xl mx-auto"
        >
          <input
            type="text"
            value={task.title}
            onChange={e => setTask({ ...task, title: e.target.value })}
            className="input input-bordered w-full"
          />

          <input
            type="text"
            value={task.category}
            onChange={e => setTask({ ...task, category: e.target.value })}
            className="input input-bordered w-full"
          />

          <textarea
            value={task.description}
            onChange={e => setTask({ ...task, description: e.target.value })}
            className="textarea textarea-bordered w-full"
          />

          <input
            type="date"
            value={task.deadline?.split('T')[0]}
            onChange={e => setTask({ ...task, deadline: e.target.value })}
            className="input input-bordered w-full"
          />

          <input
            type="number"
            value={task.budget}
            onChange={e => setTask({ ...task, budget: e.target.value })}
            className="input input-bordered w-full"
          />

          <input
            type="text"
            value={task.email}
            readOnly
            className="input input-bordered w-full bg-gray-200"
          />

          <input
            type="text"
            value={task.name}
            readOnly
            className="input input-bordered w-full bg-gray-200"
          />

          {/* BUTTONS */}
          <div className="grid grid-cols-2 gap-4 pt-4">

            <button
              type="button"
              onClick={() => navigate('/myTasks')}
              className="btn w-full"
            >
              Back to MyTasks
            </button>



            <button type="submit" className="btn bg-[#5A7863] text-white  w-full">
              Update Task
            </button>

            
          </div>
        </form>

        {/* ANIMATION SECTION */}
        <div className="hidden md:flex w-full md:w-1/2 items-center justify-center">
          <div className="flex flex-col items-center">
            <DotLottieReact
              src="/public/Manager.lottie"
              loop
              autoplay
              className="w-[320px] md:w-[380px] lg:w-[620px]"
            />

            <p className="mt-4 italic text-gray-500 text-center max-w-sm">
              Refine your task details to keep your project on track.
            </p>
          </div>
        </div>

      </div>
    </div>
   </section>
  );
};

export default UpdateTask;


