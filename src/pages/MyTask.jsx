import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const MyTasks = () => {
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/mytasks?email=${user.email}`)
      .then(res => res.json())
      .then(data => setTasks(data));
  }, [user.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This task will be deleted permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/tasks/${id}`, {
          method: "DELETE"
        })
          .then(res => res.json())
          .then(() => {
            setTasks(tasks.filter(task => task._id !== id));
            Swal.fire("Deleted!", "Task has been deleted.", "success");
          });
      }
    });
  };

  return (
   <section className="bg-[#afceaa]">
     <div className="w-11/12 mx-auto p-4 sm:p-6 lg:p-10 min-h-screen">

      <Helmet>
          <title>My Task | My Freelance Marketplace</title>
        
        </Helmet>

      <h2 className="text-2xl sm:text-3xl font-bold mb-6">
        My Posted Tasks
      </h2>

      
      <div className="overflow-x-auto">
        <table className="table w-full min-w-[700px] border ">
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Deadline</th>
              <th>Budget</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {
              tasks.map(task => (
                <tr key={task._id}>
                  <td className="break-words">{task.title}</td>
                  <td>{task.category}</td>
                  <td>{task.deadline?.split('T')[0]}</td>
                  <td>৳{task.budget}</td>
                  <td className="space-x-2 whitespace-nowrap">
                    <Link
                      to={`/updateTask/${task._id}`}
                      className="btn btn-sm btn-info"
                    >
                      Update
                    </Link>

                    <button
                      onClick={() => handleDelete(task._id)}
                      className="btn btn-sm btn-error"
                    >
                      Delete
                    </button>

                    <button className="btn btn-sm btn-secondary">
                      Bids
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
   </section>
  );
};

export default MyTasks;
