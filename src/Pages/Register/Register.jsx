import { useContext } from "react";
import { CommonContext } from "../../Layout/CommonRoute";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import { Link } from "react-router-dom";

const Register = () => {
  const { firebaseRegister, firebaseLogOut } = useContext(CommonContext);

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photo = form.photo.value;
    // console.log(name, email, password);
    firebaseRegister(email, password)
      .then(({ user }) => {
        updateProfile(user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            Swal.fire({
              icon: "success",
              title: "Successfully Registered",
              showConfirmButton: false,
              timer: 3000,
            });
            firebaseLogOut();
            form.reset();
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="min-h-[calc(100vh-100px)] flex justify-center items-center">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800 bg-[#E4C59E] text-[#6D2932] font-semibold">
        <h1 className="text-2xl font-bold text-center ">Register</h1>

        <form onSubmit={handleRegister} className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="name" className="block dark:text-gray-600">
              Your Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder=""
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>

          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block dark:text-gray-600">
              Your Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder=""
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>

          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block dark:text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder=""
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>

          <div className="space-y-1 text-sm">
            <label htmlFor="photo" className="block dark:text-gray-600">
              Your Profile URL:
            </label>
            <input
              type="text"
              name="photo"
              id="photo"
              placeholder=""
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600 font-semibold goldenBG shadow-lg  goldenText">
            Register
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>

          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
        </div>

        <p className="text-xs text-center sm:px-6 dark:text-gray-600">
          Don't have an account?
          <Link to="/login" className="underline dark:text-gray-800 text-blue-500 font-bold">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
