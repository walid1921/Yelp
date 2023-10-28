import Navbar from "./Navbar"

function Header() {
  return (
    <div className="  flex flex-col h-[60vh] header-bg ">
      <Navbar />
      <div className="flex justify-center item-center h-[50%]">
        <h2 className="text-[50px] font-bold text-white flex justify-center items-center ">Find great local businesses</h2>

      </div>
    </div>
  )
}

export default Header
