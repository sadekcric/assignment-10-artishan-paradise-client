import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { CommonContext } from "../../Layout/CommonRoute";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import background from "../../assets/loginBg.png";

const Login = () => {
  const { firebaseSignIn, setUser, user, loader, setLoader, setProfileActive, firebaseGithubAuth, firebaseGoogleAuth } =
    useContext(CommonContext);
  const [hidden, setHidden] = useState(false);
  const location = useLocation();
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

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (user) {
      setLoader(false);
      return Swal.fire({
        title: "Error!",
        text: "You are Already Log in. For new Log in Please Sign out.",
        icon: "error",
        confirmButtonText: "Back",
      });
    }

    firebaseSignIn(email, password)
      .then(({ user }) => {
        setProfileActive(false);
        navigate(location?.state ? location.state : "/");
        setUser(user);

        Swal.fire({
          icon: "success",
          title: "Successfully Sign in!",
          showConfirmButton: false,
          timer: 3000,
        });
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
  };

  const handleGoogleLogin = () => {
    firebaseGoogleAuth()
      .then(({ user }) => {
        setProfileActive(false);
        navigate(location?.state ? location.state : "/");
        setUser(user);

        Swal.fire({
          icon: "success",
          title: "Successfully Sign in!",
          showConfirmButton: false,
          timer: 3000,
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

  const handleGithubLogin = () => {
    firebaseGithubAuth()
      .then(({ user }) => {
        setProfileActive(false);
        navigate(location?.state ? location.state : "/");
        setUser(user);

        Swal.fire({
          icon: "success",
          title: "Successfully Sign in!",
          showConfirmButton: false,
          timer: 3000,
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
      <div className="w-full lg:h-[calc(100vh-120px)] hidden md:block">
        <img className="w-full h-full blur-sm opacity-50" src={background} alt="" />
      </div>
      <div className="min-h-[calc(100vh-100px)] flex justify-center items-center md:absolute md:top-1/2 md:left-1/2 md:-translate-y-[50%] md:-translate-x-[50%]">
        <Helmet>
          <title>Artisan Paradise|Login</title>
        </Helmet>
        <div className="w-full max-w-md p-3 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800 bg-[#E4C59E] md:bg-opacity-25 text-[#6D2932] font-semibold md:border-2 md:shadow-xl md:border-[#af8260]">
          <h1 className="text-2xl font-bold text-center">Login</h1>
          <form onSubmit={handleLogin} className="space-y-6">
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

            <div className="space-y-1 text-sm relative">
              <label htmlFor="password" className="block dark:text-gray-600">
                Your Password:
              </label>
              <input
                type={hidden ? "text" : "password"}
                name="password"
                id="password"
                placeholder=""
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />

              <div onClick={() => setHidden(!hidden)} className="absolute top-9 right-5 text-xl cursor-pointer">
                {hidden ? <FaRegEye /> : <FaRegEyeSlash />}
              </div>

              <div className="flex justify-end text-xs dark:text-gray-600">
                <a rel="noopener noreferrer" href="#">
                  Forgot Password?
                </a>
              </div>
            </div>

            <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600 goldenBG shadow-lg  goldenText  ">
              Login
            </button>
          </form>

          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>

            {/* Social Account Login */}
            <p className="px-3 text-sm dark:text-gray-600">Login with social accounts</p>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
          </div>
          <div className="flex justify-center space-x-4">
            <button onClick={handleGoogleLogin} aria-label="Log in with Google" className="p-3 rounded-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
            </button>

            <button onClick={handleGithubLogin} aria-label="Log in with GitHub" className="p-3 rounded-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
              </svg>
            </button>
          </div>

          <p className="text-xs text-center sm:px-6 dark:text-gray-600">
            Don't have an account?
            <Link to="/register" className="underline dark:text-gray-800 text-blue-400 font-semibold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
