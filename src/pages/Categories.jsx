import CategoryCard from "../components/CategoryCard"
import { PiForkKnife, PiDotsThreeOutlineDuotone } from 'react-icons/pi';
import { AiOutlineShoppingCart, AiOutlineScissor, AiFillCar } from 'react-icons/ai';
import { MdNightlife } from 'react-icons/md';
import { MdSportsEsports } from 'react-icons/md';
import { BsHouseHeart } from 'react-icons/bs';


function Categories() {
  return (

    <div className=" my-36">

      <h2 className="text-center text-3xl font-bold">Categories</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mt-16 ">

        <CategoryCard icon={<PiForkKnife size={30} color="orange" />} text={'Restaurant'} />

        <CategoryCard icon={<AiOutlineShoppingCart size={30} color="orange" />} text={'Shopping'} />

        <CategoryCard icon={<MdNightlife size={30} color="orange" />} text={'Nightlife'} />

        <CategoryCard icon={<MdSportsEsports size={30} color="orange" />} text={'Sport & Freetime'} />

        <CategoryCard icon={<AiOutlineScissor size={30} color="orange" />} text={'Beauty & Wellness'} />

        <CategoryCard icon={<AiFillCar size={30} color="orange" />} text={'Vehicles'} />

        <CategoryCard icon={<BsHouseHeart size={30} color="orange" />} text={'Around the house'} />

        <CategoryCard icon={<PiDotsThreeOutlineDuotone size={30} color="orange" />} text={'More'} />




      </div>
    </div>
  )
}

export default Categories
