# Freelance Marketplace

A modern and responsive Freelance Task Marketplace web application where clients can post tasks and freelancers can browse opportunities, view task details, and place bids. The project focuses on authentication, CRUD operations, protected routes, responsive UI, and a clean user experience.

---

##  Live Website

🔗 Live Site: 

---

## Client Repository

🔗 https://github.com/Zannat02/freelance-marketplace-client

---

## Server Repository

🔗 https://github.com/Zannat02/freelance-marketplace-server

---

#  Features

-  Firebase Authentication (Email/Password & Google Sign-In)
-  Protected Routes for Add Task, Task Details, My Posted Tasks, and Update Task
-  Complete CRUD Operations (Create, Read, Update, Delete)
-  Freelancers can bid on tasks with automatic bid count updates
-  Featured Tasks display the nearest upcoming deadlines with MongoDB sorting and limit
-  Dark / Light Theme Toggle on the Home Page
-  Fully Responsive Design for Mobile, Tablet, and Desktop
-  Custom Hero Slider with Auto Play, Manual Navigation, Typewriter Animation, and Dark Mode Support
-  Interactive UI using React Awesome Reveal and Motion Animations
-  SweetAlert2 notifications for successful operations
-  Loading Spinner during data fetching
-  Custom 404 Not Found Page
-  Environment Variables used for Firebase and MongoDB credentials

---

#  Technologies Used

### Frontend

- React
- React Router
- Tailwind CSS
- DaisyUI
- Firebase Authentication
- React Helmet
- React Awesome Reveal
- Motion
- React Simple Typewriter
- SweetAlert2

### Backend

- Node.js
- Express.js
- MongoDB
- dotenv
- CORS

---

#  Pages

- Home
- Login
- Signup
- Add Task (Private)
- Browse Tasks
- Task Details (Private)
- My Posted Tasks (Private)
- Update Task (Private)
- 404 Not Found

---

#  Authentication

- Email & Password Login
- Google Login
- Protected Routes
- Password Validation
- User Profile Display
- Logout Functionality

---

#  CRUD Functionalities

### Create

- Add a new task

### Read

- Browse all tasks
- Featured Tasks
- Task Details
- My Posted Tasks

### Update

- Edit existing task information

### Delete

- Delete task with confirmation

---

#  UI Features

- Custom Responsive Hero Slider
- Dark / Light Theme
- Responsive Navigation
- Featured Task Animation
- How It Works Section
- Why Choose Us Section
- Footer with Contact Information
- Responsive Cards
- Modern UI Design

---

#  Project Structure

```
src
│
├── Components
│   ├── Header
│   ├── Footer
│   ├── Bannar
│   ├── FeaturedTask
│   ├── CategoryDropdown
│   ├── HowItWorks
│   └── WhyChooseUs
│
├── Layouts
│   └── MainLayout
│
├── Pages
│   ├── Home
│   ├── Login
│   ├── Signup
│   ├── AddTask
│   ├── BrowseTask
│   ├── TaskDetails
│   ├── MyTask
│   ├── UpdateTask
│   └── NotFound
│
├── Context
│   ├── AuthContext
│   └── AuthProvider
│
├── Firebase
│   └── firebase_config
│
└── main.jsx
```

---

#  Installation

Clone the repositories

```bash
git clone <client-repository-url>
git clone <server-repository-url>
```

Install dependencies

```bash
npm install
```

Run client

```bash
npm run dev
```

Run server

```bash
nodemon index.js
```

---

#  Environment Variables

Create a `.env` file.

```
VITE_API_KEY=
VITE_AUTH_DOMAIN=
VITE_PROJECT_ID=
VITE_STORAGE_BUCKET=
VITE_MESSAGING_SENDER_ID=
VITE_APP_ID=

DB_USER=
DB_PASS=
```

---

#  Developed By

**Zannatul Ferdous Shawon**

B.Sc. in Computer Science & Engineering

University of Asia Pacific



 