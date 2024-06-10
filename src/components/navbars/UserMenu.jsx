"use client"
const UserMenu = ({is_menu_active, set_menu_active}) => {
  return (
    <div className={`absolute transition-all w-screen h-screen bg-white ${is_menu_active ? `top-0` : `top-[100vh]`}`}>
      <div className="px-6 py-8 flex justify-between items-center border-b-[1px] border-gray-300">
        <h2 className="text-xl">Menu</h2>
      <div
        onClick={() => set_menu_active((prev) => !prev)}
        className="block lg:hidden relative"
      >
        <button className="w-6 h-6 relative flex flex-col items-center justify-center gap-[5px]">
          <span className={`absolute w-6 h-[2px] bg-gray-500 rounded-xl rotate-[45deg]`}></span>
          <span className={`absolute w-6 h-[2px] bg-gray-500 rounded-xl rotate-[-45deg]`}></span>
        </button>
      </div>
      </div>
    </div>
  )
}
export default UserMenu;