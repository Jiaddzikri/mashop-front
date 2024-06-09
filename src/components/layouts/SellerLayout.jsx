import { Outlet } from "react-router-dom";

const SellerLayout = () => {
  return (
    <div className="relative">
      <Outlet />
    </div>
  )
}
export default SellerLayout;