import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link, useLocation } from "react-router";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

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
    <section className="bg-[#fcfff6] min-h-screen pt-40">

      <div className="card bg-base-200 max-w-sm  mx-auto border  border-gray-200 rounded-xl">

        <Helmet>
          <title>Log In | My Freelance Marketplace</title>
        
        </Helmet>

        <h1 className="text-4xl font-bold p-4">Log In</h1>
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
            New here? <Link to="/signup" className="link">SignUp</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
