import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex justify-center flex-col items-center">

      <nav className="container mx-auto py-6">
        <a className="flex justify-center items-center" href="/">
          <img className="w-16" src="/mashop-logo.png" alt="" />
          <h2 className="text-2xl font-semibold">MaShop</h2>
        </a>
      </nav>
      <Outlet />
    </div>
  )
}
export default AuthLayout;