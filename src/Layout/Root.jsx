import { Outlet } from "react-router-dom";
import Nav from "../Pages/Navbar/Nav";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <div className="dark:bg-blue-950 ">
      <Nav />
      <div className="min-h-[calc(100vh-120px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
