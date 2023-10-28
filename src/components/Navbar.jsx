import { BsSearch } from 'react-icons/bs';
import DropDown from './DropDown';

function Navbar() {


  return (
    <nav >

      <div className="flex items-center justify-between flex-wrap e py-4 lg:px-12 shadow">

        <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
          <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
            <a href="/" role="link" className='logo text-2xl font-semibold text-red-300 '>Yelp</a>
          </div>
          <div className="block lg:hidden">
            <button
              id="nav"
              className="flex items-center px-3 py-2 border-2 rounded text-blue-700 border-blue-700 hover:text-blue-700 hover:border-blue-700"
            >
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">


          <div className="relative mx-auto text-gray-600 lg:block hidden ">
            <input
              className="w-[400px] border-2 border-gray-300 bg-white opacity-70 focus:opacity-100 h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
              type="search"
              name="search"
              placeholder="Search"
            />
            <button type="submit" className="absolute right-0 top-0 mt-3 mr-2">
              <BsSearch />
            </button>


          </div>


          <div className="flex gap-4">
            <DropDown title={'Yelp for Business'} text1={'Add Company'} text2={'Claim you business'} text3={'Log in to Business Account'} text4={'Explore Yelp for Business'} border={' border border-gray-300 rounded-md shadow-sm'} />

            <a href="#" className="block text-md px-4 py-2  rounded text-white ml-2 border font-semibold hover:text-white mt-4 hover:bg-red-400 lg:mt-0">
              Sign in
            </a>
            <a href="#" className="block text-md px-4 py-2 rounded text-white  bg-red-600 ml-2 border font-semibold hover:text-white mt-4 hover:opacity-50 lg:mt-0">
              Register
            </a>

          </div>
        </div>
      </div>

      <div className='flex justify-center mt-3 '>

        <DropDown title={'Restaurants'} text1={'To pick up'} text2={'Citizens '} text3={'Chinese'} text4={'Italian'} />

        <DropDown title={'Craft services'} text1={'Construction Company'} text2={'Electrician'} text3={'Cleaning Company'} text4={'Landscaping'} />
        <DropDown title={'Around the car'} text1={'Auto repair shop'} text2={'Car detailing'} text3={'Car Wash'} text4={'Car dealer'} />

        <DropDown title={'More'} text1={'Chemical cleaning'} text2={'Gyms'} text3={'Bars'} text4={'Nightlife'} />
      </div>


    </nav>
  );
}

export default Navbar;


// 