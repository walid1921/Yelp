import React from 'react'
import { GiHamburger, GiPizzaSlice, GiFoodTruck } from "react-icons/gi";

import { BsFillStarFill, BsPersonCircle } from "react-icons/bs";

const DetailRestaurant = () => {
  const tags = "sdizza"

  return (
    <div>
      <div
        className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat text-center"
      >
        <img className='w-full h-96 object-cover' src='https://images.getrecipekit.com/20210730074921-Burger-Paprika-Mango-Chutney---Hauptbild-Rezept.jpeg?aspect_ratio=16:9&quality=90' />
        <div
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
        >
          <div className="flex h-full items-center justify-center mt-20 ">
            <div className='flex justify-between sm:gap-9 lg:gap-64'>
              <div className="text-white">
                <h2 className="mb-4 text-2xl font-semibold">Restaurant Name</h2>
                <div className="flex p-1 gap-1 text-orange-300">
                  <BsFillStarFill className='text-yellow-500' />
                  <BsFillStarFill className='text-yellow-500' />
                  <BsFillStarFill className='text-yellow-500' />
                  <BsFillStarFill className='text-yellow-500' />
                  <BsFillStarFill className='text-white' />
                  <small className="ml-1 text-xs font-medium text-white ">4/5</small>
                </div>
                <div className="ml-2 mb-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-white text-gray-700 border">
                  {tags === "burger" ? <GiHamburger /> : tags === "Pizza" ? <GiPizzaSlice /> : <GiFoodTruck />}
                  <span className='pl-2'> Tag </span>
                </div>
                <button
                  type="button"
                  className="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                  data-te-ripple-init
                  data-te-ripple-color="light">
                  Call to action
                </button>
              </div>
              <div className="flex text-white items-end justify-end">

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
      </div>
    </div>
  )
}

export default DetailRestaurant