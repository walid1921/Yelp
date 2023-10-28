function CategoryCard({ icon, text }) {
  return (
    <div className=" py-16 shadow-lg flex flex-col  w-full border rounded border-slate-200 hover:border-slate-400 hover:bg-slate-100  cursor-pointer transition-all ease-in duration-200 transform hover:scale-[1.05] text-center ">

      <div className="flex flex-col justify-center items-center gap-6"> 

        <p className="">{icon}</p>
        <p className="text-xl font-semibold">{text}</p>
      </div>

    </div>
  )
}

export default CategoryCard
