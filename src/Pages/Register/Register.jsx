import { useContext, useState } from "react";
import { CommonContext } from "../../Layout/CommonRoute";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import background from "../../assets/loginBg.png";

const Register = () => {
  const { firebaseRegister, firebaseLogOut, user, loader, setLoader } = useContext(CommonContext);
  const [hidden1, setHidden1] = useState(false);
  const [hidden2, setHidden2] = useState(false);
  const navigate = useNavigate();

  if (loader) {
    return (
      <div className="fixed top-[50%] left-[50%] z-50">
        <div className="flex items-center justify-center space-x-2">
          <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600 goldenBG"></div>
          <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600 goldenBG2"></div>
          <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600 goldenBG"></div>
        </div>
      </div>
    );
  }

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const conformPassword = form.conformPassword.value;
    const name = form.name.value;
    const photo = form.photo.value;
    // console.log(name, email, password);

    if (user) {
      return Swal.fire({
        title: "Error!",
        text: "You are Already Log in. For new Register Please Sign out.",
        icon: "error",
        confirmButtonText: "Back",
      });
    }

    if (password !== conformPassword) {
      setLoader(false);
      return Swal.fire({
        title: "Error!",
        text: "Password Not match!",
        icon: "error",
        confirmButtonText: "Back",
      });
    }

    if (password.length < 6) {
      setLoader(false);
      return Swal.fire({
        title: "Error!",
        text: "Password must be up to 6 correcter!",
        icon: "error",
        confirmButtonText: "Back",
      });
    }

    if (!/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
      // return toast.error("Password must be a Uppercase & Lowercase!");
      setLoader(false);
      return Swal.fire({
        title: "Error!",
        text: "Password must be a Uppercase & Lowercase!",
        icon: "error",
        confirmButtonText: "Back",
      });
    }
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
            navigate("/login");
            form.reset();
          })
          .catch((err) => {
            setLoader(false);
            return Swal.fire({
              title: "Error!",
              text: err.message,
              icon: "error",
              confirmButtonText: "Back",
            });
          });
      })
      .catch((err) => {
        setLoader(false);
        return Swal.fire({
          title: "Error!",
          text: err.message,
          icon: "error",
          confirmButtonText: "Back",
        });
      });
  };

  return (
    <div className="md:relative p-3">
      <div className="w-full h-[calc(100vh-120px)] hidden md:block">
        <img className="w-full h-full blur-sm opacity-50" src={background} alt="" />
      </div>

      <div className="min-h-[calc(100vh-120px)] flex justify-center items-center md:absolute md:top-1/2 md:left-1/2 md:-translate-y-[50%] md:-translate-x-[50%]">
        <Helmet>
          <title>Artisan Paradise|Register</title>
        </Helmet>
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800 bg-[#E4C59E] text-[#6D2932] font-semibold md:border-2 md:shadow-xl md:border-[#af8260] md:bg-opacity-25 md:w-[800px]">
          <h1 className="text-2xl font-bold text-center ">Register</h1>

          <form onSubmit={handleRegister} className="space-y-6 md:grid md:grid-cols-2 md:gap-3 md:items-center md:justify-center">
            <div className="space-y-1 text-sm md:col-span-2">
              <label htmlFor="name" className="block dark:text-gray-600">
                Your Name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder=""
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                required
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
                required
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

            <div className="space-y-1 text-sm relative">
              <label htmlFor="password" className="block dark:text-gray-600">
                Password
              </label>
              <input
                type={hidden1 ? "text" : "password"}
                name="password"
                id="password"
                placeholder=""
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                required
              />
              <div onClick={() => setHidden1(!hidden1)} className="absolute top-9 right-5 text-xl cursor-pointer">
                {hidden1 ? <FaRegEye /> : <FaRegEyeSlash />}
              </div>
            </div>

            <div className="space-y-1 text-sm relative">
              <label htmlFor="conformPassword" className="block dark:text-gray-600 ">
                Conform Password
              </label>
              <input
                type={hidden2 ? "text" : "password"}
                name="conformPassword"
                id="conformPassword"
                placeholder=""
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                required
              />
              <div onClick={() => setHidden2(!hidden2)} className="absolute top-9 right-5 text-xl cursor-pointer">
                {hidden2 ? <FaRegEye /> : <FaRegEyeSlash />}
              </div>
            </div>

            <button className="block w-full md:col-span-2 p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600 font-semibold goldenBG shadow-lg  goldenText">
              Register
            </button>
          </form>

          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>

            <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
          </div>

          <p className="text-xs text-center sm:px-6 dark:text-gray-600">
            Have you Already an account?
            <Link to="/login" className="underline dark:text-gray-800 text-blue-500 font-bold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
