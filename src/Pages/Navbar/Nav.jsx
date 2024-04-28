import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CommonContext } from "../../Layout/CommonRoute";
import defaultProfile from "../../assets/Windows_10_Default_Profile_Picture.svg.png";
import { Tooltip as ReactTooltip } from "react-tooltip";

const Nav = () => {
  const { user, firebaseLogOut, profileActive, setProfileActive } = useContext(CommonContext);
  const [active, setActive] = useState(false);

  const handleLogOut = () => {
    firebaseLogOut().then().catch();
  };

  const handleResponsive = () => {
    setActive(!active);
  };

  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  // for Responsive
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("synthwave");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localThem = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localThem);
  }, [theme]);

  const navLink = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "goldenBG2 border-2 goldenBorder rounded-sm px-6 py-3 font-semibold goldenText"
              : "border-b-2 goldenBorder px-6 py-3 font-semibold goldenText"
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/allArt"
          className={({ isActive }) =>
            isActive
              ? "goldenBG2 border-2 goldenBorder rounded-sm px-6 py-3 font-semibold goldenText"
              : "border-b-2 goldenBorder px-6 py-3 font-semibold goldenText"
          }
        >
          All Art & craft
        </NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink
              to="/add"
              className={({ isActive }) =>
                isActive
                  ? "goldenBG2 border-2 goldenBorder  rounded-sm px-6 py-3 font-semibold goldenText"
                  : "border-b-2 goldenBorder px-6 py-3 font-semibold goldenText"
              }
            >
              Add Craft
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myArt"
              className={({ isActive }) =>
                isActive
                  ? "goldenBG2 border-2 goldenBorder  rounded-sm px-6 py-3 font-semibold goldenText"
                  : "border-b-2 goldenBorder px-6 py-3 font-semibold goldenText"
              }
            >
              My Art & Craft
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <>
      <header className="p-4 dark:bg-gray-100 dark:text-gray-800 bg-[#FFF5E0] relative">
        <div className="container flex justify-between h-16 mx-auto">
          <Link to="/" aria-label="Back to homepage" className="flex items-center p-2">
            <button className="text-lg bg-[#AF8260] lg:text-3xl  font-bold pl-3 lg:pl-6 py-3 ">
              <span className="text-[#561C24]">Artisan</span>{" "}
              <span className="goldenBG2 py-[14px] lg:py-[10px] pl-2 pr-3 lg:pr-6 w-full goldenText">Paradise</span>
            </button>
          </Link>

          <ul className="items-stretch hidden space-x-3 lg:flex lg:items-center">{navLink}</ul>

          {/* forMobile */}
          <ul
            className={`space-x-3 lg:hidden absolute lg:items-center flex flex-col gap-6 items-center right-5 goldenBG min-h-56 rounded-b-lg pt-8 pr-3 z-20 ${
              active ? "translate-y-20 opacity-100 duration-500 " : "-translate-y-56 transition duration-500 opacity-0 "
            }`}
          >
            {navLink}
            <>
              {user ? (
                <li>
                  <button
                    onClick={handleLogOut}
                    className="font-semibold self-center px-8 py-3 border-2 goldenBorder hover:goldenBG2 rounded-md goldenText"
                  >
                    Log Out
                  </button>
                </li>
              ) : (
                <>
                  <li>
                    <NavLink
                      to="/login"
                      className={({ isActive }) =>
                        isActive
                          ? "goldenBG2 border-2 goldenBorder  rounded-sm px-6 py-3 font-semibold goldenText"
                          : "border-b-2 goldenText goldenBorder px-6 py-3 font-semibold goldenText"
                      }
                    >
                      Login
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/register"
                      className={({ isActive }) =>
                        isActive
                          ? "goldenBG2 border-2 goldenBorder  rounded-sm px-6 py-3 font-semibold goldenText"
                          : "border-b-2 goldenBorder px-6 py-3 font-semibold goldenText"
                      }
                    >
                      Register
                    </NavLink>
                  </li>
                </>
              )}
            </>
          </ul>

          <div className="hidden lg:flex lg:items-center ">
            {user ? (
              <div className="flex items-center gap-1 relative">
                <div
                  onClick={() => setProfileActive(!profileActive)}
                  className="w-12 h-12 self-center cursor-pointer rounded-full bg-slate-100"
                >
                  <img
                    data-tooltip-id="my-tooltip-1"
                    src={user?.photoURL || defaultProfile}
                    alt=""
                    className="w-full h-full object-cover object-center rounded-full"
                  />
                  <ReactTooltip id="my-tooltip-1" place="left" content={user.displayName} />
                </div>

                {/* User Profile */}
                <div
                  className={`goldenBG py-10 z-50 min-h-[200px] absolute ${
                    profileActive ? "translate-y-[300px] opacity-100" : "-translate-y-72 opacity-0"
                  } transition duration-1000 ease-in-out px-10 text-white rounded-b-lg right-0 pb-5 min-w-[400px]`}
                >
                  <h2 className="text-xl font-semibold text-center border-b-2 border-[#e4c59e] mb-5 ">USER</h2>
                  <ul className="space-y-3">
                    <li>
                      <img className="w-40 h-40 mx-auto rounded-full" src={user.photoURL || defaultProfile} alt="" />
                    </li>

                    <li className="font-semibold text-center text-xl">Hi! {user.displayName}</li>
                    <li>
                      <ul className="goldenBG2 goldenText px-6 py-6 rounded-xl shadow-lg">
                        <li className="border-b-2 goldenBorder px-2 pt-3 text-md font-semibold">
                          <Link to="/profile">Profile</Link>
                        </li>

                        <li className="border-b-2 goldenBorder px-2 pt-3 text-md font-semibold">
                          <Link to="/myArt">My Art & Craft</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <button onClick={() => firebaseLogOut()} className="self-center w-full shadow-2xl py-3 rounded font-semibold">
                        Sign out
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="items-center font-semibold  gap-5 flex-shrink-0 hidden lg:flex goldenText">
                <Link
                  to="login"
                  className="self-center transition px-8 py-3 border-2 goldenBorder hover:text-white hover:bg-yellow-600 rounded-md"
                >
                  Login
                </Link>
                <Link
                  to="register"
                  className="self-center transition border-2 goldenBorder hover:text-white hover:bg-yellow-600  rounded-md px-8 py-3 font-semibold dark:bg-violet-600 dark:text-gray-50"
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          <label className="swap swap-rotate hidden lg:flex lg:items-center">
            {/* this hidden checkbox controls the state */}
            <input onChange={handleToggle} type="checkbox" className="theme-controller" value={theme} />

            {theme === "light" ? (
              <svg className=" goldenText fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>
            ) : (
              <svg className=" goldenText  fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            )}
          </label>

          {/* for Mobile */}

          {user && (
            <div className="flex lg:hidden items-center gap-1 relative">
              <div
                onClick={() => setProfileActive(!profileActive)}
                className="w-8 h-8 self-center cursor-pointer rounded-full bg-slate-100"
              >
                <img
                  src={user?.photoURL || defaultProfile}
                  alt=""
                  className="w-full h-full object-cover object-center rounded-full"
                  data-tooltip-id="my-tooltip-1"
                />
              </div>

              {/* User Profile */}
              <div
                className={`goldenBG py-5 z-50 min-h-[200px] -right-16  absolute ${
                  profileActive ? "translate-y-[276px] opacity-100" : "-translate-y-72 opacity-0"
                } transition duration-1000 ease-in-out px-3 text-white rounded-b-lg right-0 pb-5 min-w-[250px]`}
              >
                <h2 className="text-xl font-semibold text-center border-b-2 border-[#e4c59e] mb-5 ">USER</h2>
                <ul className="space-y-3">
                  <li>
                    <img className="w-32 h-32 mx-auto rounded-full" src={user.photoURL || defaultProfile} alt="" />
                  </li>
                  <li className="font-semibold text-center text-xl">Hi! {user.displayName}</li>
                  <li>
                    <ul className="goldenBG2 goldenText px-6 py-6 rounded-xl shadow-lg">
                      <li className="border-b-2 goldenBorder px-2 pt-3 text-md font-semibold">
                        <Link to="/profile">Profile</Link>
                      </li>

                      <li className="border-b-2 goldenBorder px-2 pt-3 text-md font-semibold">
                        <Link to="/myArt">My Art & Craft</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <button onClick={() => firebaseLogOut()} className="self-center w-full shadow-2xl py-3 rounded font-semibold">
                      Sign out
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* for Mobile */}
          <button className="lg:hidden inline-block">
            <svg
              onClick={handleResponsive}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 goldenText"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </header>
    </>
  );
};

export default Nav;

{
  /* <button onClick={handleLogOut} className="self-center px-8 py-3 border-2 goldenBorder transition hover:bg-yellow-600 rounded-md goldenText">
  Log Out
</button>; */
}
