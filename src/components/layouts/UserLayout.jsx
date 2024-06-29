import { Outlet } from "react-router-dom";
import GuestNavbar from "../navbars/GuestNavbar";
import Footer from "./Footer";
import Header from "./Header";

const UserLayout = () => {
  return (
    <div className="relative">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
export default UserLayout;