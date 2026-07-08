import React, { use, useRef } from 'react';
import { FaCalendarAlt } from "react-icons/fa";
import CategoryDropdown from '../Components/CategoryDropdown';
import Swal from 'sweetalert2';
import { AuthContext } from '../context/AuthContext';
import { Helmet } from 'react-helmet';

const AddTask = () => {
    const dateRef = useRef(null);
    const categoryRef = useRef(null);

    const { user } = use(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        if (categoryRef.current) {
            formData.set("category", categoryRef.current.value);
        }

        for (let [key, value] of formData.entries()) {
            if (!value) {
                alert(`Please fill the ${key} field`);
                return;
            }
        }

        const newTask = Object.fromEntries(formData.entries());
        newTask.deadline = new Date(newTask.deadline);

       fetch(`${import.meta.env.VITE_API_URL}/tasks`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newTask)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Task added successfully!",
                        icon: "success",
                        draggable: true
                    });
                    form.reset();
                }
            });
    };

    return (
        <div className="p-6 sm:p-10 lg:p-24 bg-[#90AB8B]">

            <Helmet>
                <title>Add Task | My Freelance Marketplace</title>
                <meta name="description" content="Add new tasks to your freelance projects." />
            </Helmet>

            {/* Header Section */}
            <div className="text-center space-y-4 w-11/12 mx-auto">
                <h1 className="
                    text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                    font-semibold
                ">
                    Add Task
                </h1>

                <p className="
                    text-sm sm:text-base
                    px-2 sm:px-6
                    leading-relaxed
                ">
                    Add a new task by providing clear details about what needs to be done.
                    Make sure to choose the correct category, set a realistic deadline,
                    and define a suitable budget so freelancers can understand your
                    requirements easily. Accurate information helps you receive better
                    bids from skilled freelancers and complete your task efficiently.
                </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-10">

                <fieldset className="fieldset border-base-300 rounded-box p-3 sm:p-4">
                    <label className="label">Task Title</label>
                    <input type="text" className="input w-full" name='title' placeholder="Title" />
                </fieldset>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">

                    <fieldset className="fieldset border-base-300 rounded-box p-3 sm:p-4">
                        <label className="label">Name</label>
                        <input
                            type="text"
                            value={user?.displayName || ""}
                            className="input w-full"
                            name='name'
                            readOnly
                        />
                    </fieldset>

                    <fieldset className="fieldset border-base-300 rounded-box p-3 sm:p-4">
                        <label className="label">Email</label>
                        <input
                            type="email"
                            value={user?.email || ""}
                            className="input w-full"
                            name='email'
                            readOnly
                        />
                    </fieldset>

                    <fieldset className="fieldset border-base-300 rounded-box p-3 sm:p-4">
                        <label className="label">Budget</label>
                        <input type="text" className="input w-full" name='budget' placeholder="Budget" />
                    </fieldset>

                    {/* <fieldset className="fieldset border-base-300 rounded-box p-3 sm:p-4">
                        <label className="label">Deadline</label>
                        <div className="relative">
                            <input
                                ref={dateRef}
                                type="text"
                                name="deadline"
                                placeholder="YYYY-MM-DD"
                                className="input w-full pr-10"
                                onFocus={(e) => (e.target.type = "date")}
                                onBlur={(e) => (e.target.type = "text")}
                            />
                            <FaCalendarAlt
                                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600"
                                onClick={() => {
                                    dateRef.current.type = "date";
                                    dateRef.current.showPicker();
                                }}
                            />
                        </div>
                    </fieldset> */}

                    <fieldset className="fieldset border-base-300 rounded-box p-3 sm:p-4">
                        <label className="label">Deadline</label>
                        <div className="relative">
                            <input
                                ref={dateRef}
                                type="date"
                                name="deadline"
                                className="input w-full pr-10"
                            />
                            <FaCalendarAlt
                                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600"
                                onClick={() => {
                                    dateRef.current.showPicker();
                                }}
                            />
                        </div>
                    </fieldset>

                    <fieldset className="fieldset border-base-300 rounded-box p-3 sm:p-4">
                        <label className="label">Category</label>
                        <CategoryDropdown ref={categoryRef} />
                    </fieldset>

                    <fieldset className="fieldset border-base-300 rounded-box p-3 sm:p-4">
                        <label className="label">Description</label>
                        <input type="text" className="input w-full" name='description' placeholder="Task Description" />
                    </fieldset>

                </div>

                <input
                    type="submit"
                    className="btn w-full mt-6"
                    value="Add Task"
                />
            </form>
        </div>
    );
};

export default AddTask;


