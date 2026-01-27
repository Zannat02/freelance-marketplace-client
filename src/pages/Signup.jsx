import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";
import { useNavigate, Link } from "react-router";
import { section } from "motion/react-client";
import { Helmet } from "react-helmet";

const Signup = () => {
  const { createUser, updateUserProfile, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    // if (!/[A-Z]/.test(password))
    //   return Swal.fire("Error", "Must have uppercase letter", "error");
    // if (!/[a-z]/.test(password))
    //   return Swal.fire("Error", "Must have lowercase letter", "error");
    // if (password.length < 6)
    //   return Swal.fire("Error", "Password must be 6 characters", "error");

    createUser(email, password)
      .then(() => {
        updateUserProfile(name, photo);
        Swal.fire("Success", "Account created", "success");
        navigate("/");
      })
      .catch(err => Swal.fire("Error", err.message, "error"));
  };

  return (
    <section className="bg-[#fcfff6] min-h-screen pt-10">
      <div className="card bg-base-200 max-w-sm mt-20 mx-auto border  border-gray-200 rounded-xl ">
        <Helmet>
          <title>Sign Up| My Freelance Marketplace</title>
        
        </Helmet>

        <h1 className="text-4xl font-bold p-4">Sign Up</h1>
        <div className="card-body">
          <form onSubmit={handleSignUp}>
            <input name="name" className="input" placeholder="Name" required />
            <input name="photo" className="input mt-2" placeholder="Photo URL" required />
            <input name="email" className="input mt-2" placeholder="Email" />
            <input name="password" type="password" className="input mt-2" placeholder="Password" />
            <button className="btn btn-neutral mt-4 w-full">Register</button>
          </form>

          <button onClick={googleLogin} className="btn btn-outline mt-2">
            Google Signup
          </button>

          <p className="mt-2 text-sm">
            Already have an account? <Link to="/login" className="link">SignIn</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Signup;
