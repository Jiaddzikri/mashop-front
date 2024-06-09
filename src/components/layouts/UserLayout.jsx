import { Outlet } from "react-router-dom";
import GuestNavbar from "../navbars/GuestNavbar";

const UserLayout = () => {
  return (
    <div>
      <GuestNavbar />
      <Outlet />
    </div>
  )
}
export default UserLayout;