import { Outlet } from "react-router-dom";
import Nav from "../Pages/Navbar/Nav";

const Root = () => {
  return (
    <div className="dark:bg-blue-950 ">
      <Nav />
      <Outlet />
    </div>
  );
};

export default Root;
