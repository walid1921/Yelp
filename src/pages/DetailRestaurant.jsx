import React from 'react'
import { GiHamburger, GiPizzaSlice, GiFoodTruck } from "react-icons/gi";

import { BsFillStarFill, BsCamera, BsStar, BsBookmark, BsUpload, BsBoxArrowUpRight } from "react-icons/bs";

const DetailRestaurant = ({restaurantData}) => {
  const tags = "sdizza"

  return (
    <div>
      <section id='header-detail' className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat text-center"
      >
        <img className='w-full h-96 object-cover' src='https://img.freepik.com/premium-photo/hamburger-stone-rustic-pub-wide-panoramic-generative-ai_918839-9607.jpg?w=1380' />
        <div
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
        >
          <div className="flex h-full items-center justify-center mt-20 ">
            <div className='flex justify-between sm:gap-9 lg:gap-64'>
              <div className="flex text-white flex-col">
                <h2 className="mb-4 text-3xl font-bold">Restaurant Name</h2>
                <div className="flex p-1 gap-1 text-orange-100 mb-4">
                  <BsFillStarFill className='text-yellow-500' size={30} />
                  <BsFillStarFill className='text-yellow-500' size={30} />
                  <BsFillStarFill className='text-yellow-500' size={30} />
                  <BsFillStarFill className='text-yellow-500' size={30} />
                  <BsFillStarFill className='' size={30} />
                  <small className="ml-1 text-xs font-medium text-white ">4/5</small>
                </div>


                <div className="mb-4 w-auto text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full  text-white ">
                  {tags === "burger" ? <GiHamburger size={30} /> : tags === "Pizza" ? <GiPizzaSlice size={30} /> : <GiFoodTruck size={30} />}
                  <span className='p-3'> Tag </span>
                </div>
                <div className=" mb-4 w-auto text-lg inline-flex items-center  font-bold leading-sm  px-3 py-1 rounded-full  text-white border shadow-md">
                  <h3 className=' text-green-700'> Open:  </h3>
                  <span className='text-xs item-center pl-2'>Time</span>
                </div>
              </div>

              <div className="ml-2 mb-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full  ">

              </div>
              <div className="flex text-white items-end justify-end my-2">

                <button
                  type="button"
                  className="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                  data-te-ripple-init
                  data-te-ripple-color="light">
                  See All photos
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='main-detail' className='container mx-auto'>

        <div className='mt-3 w-2/5 shadow-sm p-6 flex justify-start gap-6 border-b '>

          <button className="bg-red-500 hover:bg-red-700 text-white  py-2 px-4 rounded inline-flex items-center rounded-lg border">
            <BsStar className='text-white' />

            <span className='pl-1'>Write a review</span>
          </button>
          <button className="bg-white hover:bg-gray-50 text-black  py-2 px-4 rounded inline-flex items-center rounded-lg border">
            <BsCamera className='text-black' />

            <span className='pl-1'>take a picture</span>
          </button>
          <button className="bg-white hover:bg-gray-50 text-black  py-2 px-4 rounded inline-flex items-center rounded-lg border">
            <BsUpload className='text-black' />

            <span className='pl-1'>Split</span>

          </button>
          <button className="bg-white hover:bg-gray-50 text-black  py-2 px-4 rounded inline-flex items-center rounded-lg border">
            <BsBookmark className='text-black' />
            <span className='pl-1'>Save</span>
          </button>
        </div>
        <div>
        <div className='p-6'>
          <h2 className=' text-2xl font-bold'>Menu</h2>
         
          <button className="bg-white hover:bg-gray-50 text-black  mt-6 py-2 px-4 rounded inline-flex items-center rounded-lg border">
            <BsBoxArrowUpRight className='text-black' />
            <span className='pl-2 '>Website menu</span>
          </button>
          </div>
          
        </div>

        <div className='p-6'>
          <h2 className='mb-6 text-2xl font-bold'>
            Location & opening hours

          </h2>
          <div >
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d21283.463671284222!2d16.37568774999999!3d48.17900898537065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2sat!4v1698500706591!5m2!1str!2sat"
           width="300" height="300"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
           

          </div>
        </div>

      </section>


    </div>
  )
}

export default DetailRestaurant