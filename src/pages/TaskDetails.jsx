import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const TaskDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);
  const [bidsCount, setBidsCount] = useState(0);
  

  useEffect(() => {
    fetch(`http://localhost:3000/alltasks/${id}`)
      .then(res => res.json())
      .then(data => {
        setTask(data);
        setBidsCount(data.bidsCount || 0);
      });;
  }, [id]);

  const handleBid = () => {
    fetch(`http://localhost:3000/tasks/bid/${id}`, {
      method: 'PATCH',
    })
      .then(res => res.json())
      .then(() => {
        setBidsCount(prev => prev + 1);
      });
  };



  if (!task) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <section className="bg-[#90AB8B] min-h-screen flex items-center justify-center px-4">

      <div
        className="w-full max-w-4xl bg-[#FCFFF6] rounded-lg shadow-md p-6 sm:p-8
        "
      >

        <Helmet>
          <title>{task?.title || "Task Details"} | My Freelance Marketplace</title>
        </Helmet>

        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 break-words">
          {task.title}
        </h2>

        <p className="text-center font-semibold mb-4 text-sm sm:text-base">
          You bid for {bidsCount} opportunities.
        </p>


        <div className="space-y-3 text-left text-sm sm:text-base break-words">
          <p><b>Category:</b> {task.category}</p>
          <p><b>Description:</b> {task.description}</p>
          <p><b>Deadline:</b> {task.deadline}</p>
          <p><b>Budget:</b> {task.budget}</p>
          <p><b>Posted By:</b> {task.email}</p>
        </div>

        {/* Button */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={handleBid}
            className="
      px-6 py-2 rounded-md
      bg-[#90AB8B] text-white
      hover:bg-black
      transition
      text-sm sm:text-base
    "
          >
            Bids
          </button>

          <button
            onClick={() => navigate("/browseTask")}
            className="
      px-6 py-2 rounded-md
      bg-[#EBF4DD] text-black
      hover:bg-black hover:text-white
      transition
      text-sm sm:text-base
    "
          >
            Back to Browse Tasks
          </button>
        </div>
      </div>
    </section>
  );
};

export default TaskDetails;

