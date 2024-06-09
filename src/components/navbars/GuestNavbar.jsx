const GuestNavbar = () => {
  return (
    <nav className="container fixed border-b border-gray-300 mx-auto px-36 py-2 flex items-center gap-3">
      <a href="/">
        <img className="w-20" src="/mashop-logo.png"/>
      </a>
      <div className="relative w-[800px] mb-10 ml-10">
        <input type="text" placeholder="Cari disini..." className="absolute w-full px-4 py-2 border-[1px] border-gray-300 rounded-lg focus:outline-none focus:shadow" />
        <button type="button" className="absolute px-6 py-2 top-0 border-[1px] border-blue-500 right-0 bg-blue-500 rounded-tr-lg rounded-br-lg text-white">Cari</button>
      </div>
    </nav>
  )

} 
export default GuestNavbar;