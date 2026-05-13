import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from './Layouts/MainLayout.jsx';
import Home from './pages/Home.jsx';
import AddTask from './pages/AddTask.jsx';
import BrowseTask from './pages/BrowseTask.jsx';

import TaskDetails from './pages/TaskDetails.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import AuthProvider from './context/AuthProvider.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';
import MyTask from './pages/MyTask.jsx';
import UpdateTask from './pages/UpdateTask.jsx';
import NotFound from './pages/NotFound.jsx';


const BASE_URL = import.meta.env.VITE_API_URL;
const router = createBrowserRouter([
  
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => fetch(`${BASE_URL}/tasks`),
        Component: Home


      },
      {
        path: "addTask",
        // Component: AddTask
        element: <PrivateRoute>
          <AddTask></AddTask>
        </PrivateRoute>
      },
      {
        path: 'browseTask',
        Component: BrowseTask
      },
      {
        path: 'task/:id',
        // Component:TaskDetails
        element: (
          <PrivateRoute>
            <TaskDetails />
          </PrivateRoute>
        )
      }
      ,
      {
        path: 'myTasks',
        // Component: PostedTask
        element: (
          <PrivateRoute>
            <MyTask />
          </PrivateRoute>
        )
      },

      {
        path: 'updateTask/:id',
        element: (
          <PrivateRoute>
            <UpdateTask />
          </PrivateRoute>
        )
      },
      

      {
        path: 'login',
        Component: Login
      },
      {
        path: 'signup',
        Component: Signup
      }


    ]
  },

  {
    path: "*",
    Component: NotFound
  }

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
