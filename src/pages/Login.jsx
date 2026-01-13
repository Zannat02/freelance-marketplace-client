// import { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { useNavigate, Link } from "react-router";
// import Swal from "sweetalert2";

// const Login = () => {
//   const { signIn, googleLogin } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleSignIn = e => {
//     e.preventDefault();
//     const form = e.target;
//     const email = form.email.value;
//     const password = form.password.value;

//     signIn(email, password)
//       .then(() => {
//         Swal.fire("Success", "Login successful", "success");
//         navigate("/");
//       })
//       .catch(err => {
//         Swal.fire("Error", err.message, "error");
//       });
//   };

//   const handleGoogleLogin = () => {
//     googleLogin()
//       .then(() => {
//         Swal.fire("Success", "Google login successful", "success");
//         navigate("/");
//       })
//       .catch(err => {
//         Swal.fire("Error", err.message, "error");
//       });
//   };

//   return (
//     <div className="card bg-base-100 max-w-sm mt-10 mx-auto shadow-2xl">
//       <h1 className="text-4xl font-bold p-3">Sign In</h1>
//       <div className="card-body">
//         <form onSubmit={handleSignIn}>
//           <input name="email" type="email" className="input" placeholder="Email" />
//           <input name="password" type="password" className="input mt-2" placeholder="Password" />
//           <button className="btn btn-neutral mt-4 w-full">Login</button>
//         </form>

//         <button onClick={handleGoogleLogin} className="btn btn-outline mt-2">
//           Google Login
//         </button>

//         <p className="mt-2 text-sm">
//           New here? <Link to="/signup" className="link">Register</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;


import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link, useLocation } from "react-router";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

 
  const from = location.state?.from?.pathname || "/";

  const handleSignIn = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(() => {
        Swal.fire("Success", "Login successful", "success");

      
        navigate(from, { replace: true });
      })
      .catch(err => {
        Swal.fire("Error", err.message, "error");
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        Swal.fire("Success", "Google login successful", "success");

       
        navigate(from, { replace: true });
      })
      .catch(err => {
        Swal.fire("Error", err.message, "error");
      });
  };

  return (
    <div className="card bg-base-100 max-w-sm mt-10 mx-auto shadow-2xl">
      <h1 className="text-4xl font-bold p-3">Sign In</h1>
      <div className="card-body">
        <form onSubmit={handleSignIn}>
          <input name="email" type="email" className="input" placeholder="Email" />
          <input name="password" type="password" className="input mt-2" placeholder="Password" />
          <button className="btn btn-neutral mt-4 w-full">Login</button>
        </form>

        <button onClick={handleGoogleLogin} className="btn btn-outline mt-2">
          Google Login
        </button>

        <p className="mt-2 text-sm">
          New here? <Link to="/signup" className="link">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
