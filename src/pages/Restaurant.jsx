import React from 'react'
import { GiHamburger, GiPizzaSlice, GiFoodTruck } from "react-icons/gi";
import { BsFillStarFill, BsPersonCircle } from "react-icons/bs";

const Restaurant = () => {
  const tags = "sdizza"
  return (
    <div className='mt-9 '>

      <div className="sm:flex sm:justify-center gap-4 rounded-xl shadow-lg">
        <div
          className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  sm:shrink-0 sm:grow sm:basis-0 sm:rounded-r-none">
          <a href="#!">
            <img
              className="rounded-t-lg sm:rounded-tr-none"
              src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
              alt="Restaurant Name" />
          </a>
          <div className="p-6">
            <div className='flex justify-between mb-4 '>
              <h5
                className="mb-2 text-xl font-medium leading-tight text-neutral-800 ">
                Restaurant Name
              </h5>
              <p className="mb-2 text-base  text-neutral-600 ">
                <small>Location</small>
              </p>
            </div>
            <div className="ml-2 mb-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-white text-gray-700 border">
              {tags === "burger" ? <GiHamburger /> : tags === "Pizza" ? <GiPizzaSlice /> : <GiFoodTruck />}
              <span className='pl-2'> Tag </span>
            </div>
            <p className="mb-4 text-base text-neutral-600 ">
              <small>Adress: </small>
            </p>
            <div className='shadow-md pr-3 pt-3 pb-3 pl-1 rounded-lg'>
              <div className="flex items-center ">
                <div className="flex flex-col gap-4  p-4">
                  <div className="flex justify justify-between">
                    <div className="flex gap-2 justify-center items-center">
                      <div className="w-4 h-4 text-center rounded-full text-red-500 text-white">
                        <BsPersonCircle /> </div>
                      <span className=' text-center'>Jess Hopkins</span><small className='pl-2 text-xs text-center'>Feb 13, 2021</small>
                    </div>
                    <div className="flex p-1 gap-1 text-orange-300">
                      <BsFillStarFill className='text-yellow-500' />
                      <BsFillStarFill className='text-yellow-500' />
                      <BsFillStarFill className='text-yellow-500' />
                      <BsFillStarFill className='text-yellow-500' />
                      <BsFillStarFill className='text-black' />
                      <small className="ml-1 text-xs font-medium text-gray-500 ">4/5</small>
                    </div>

                  </div>
                  <div>
                    Gorgeous design! Even more responsive than the previous version. A pleasure to use!
                  </div>
                </div>
              </div>
            </div>


          </div>

        </div>
        <div
          className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  sm:shrink-0 sm:grow sm:basis-0 sm:rounded-r-none">
          <a href="#!">
            <img
              className="rounded-t-lg sm:rounded-tr-none"
              src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
              alt="Restaurant Name" />
          </a>
          <div className="p-6">
            <div className='flex justify-between mb-4 '>
              <h5
                className="mb-2 text-xl font-medium leading-tight text-neutral-800 ">
                Restaurant Name
              </h5>
              <p className="mb-2 text-base  text-neutral-600 ">
                <small>Location</small>
              </p>
            </div>
            <div className="ml-2 mb-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-white text-gray-700 border">
              {tags === "burger" ? <GiHamburger /> : tags === "Pizza" ? <GiPizzaSlice /> : <GiFoodTruck />}
              <span className='pl-2'> Tag </span>
            </div>
            <p className="mb-4 text-base text-neutral-600 ">
              <small>Adress: </small>
            </p>
            <div className='shadow-md pr-3 pt-3 pb-3 pl-1 rounded-lg'>
              <div className="flex items-center ">
                <div className="flex flex-col gap-4  p-4">
                  <div className="flex justify justify-between">
                    <div className="flex gap-2 justify-center items-center">
                      <div className="w-4 h-4 text-center rounded-full text-red-500 text-white">
                        <BsPersonCircle /> </div>
                      <span className=' text-center'>Jess Hopkins</span><small className='pl-2 text-xs text-center'>Feb 13, 2021</small>
                    </div>
                    <div className="flex p-1 gap-1 text-orange-300">
                      <BsFillStarFill className='text-yellow-500' />
                      <BsFillStarFill className='text-yellow-500' />
                      <BsFillStarFill className='text-yellow-500' />
                      <BsFillStarFill className='text-yellow-500' />
                      <BsFillStarFill className='text-black' />
                      <small className="ml-1 text-xs font-medium text-gray-500 ">4/5</small>
                    </div>

                  </div>
                  <div>
                    Gorgeous design! Even more responsive than the previous version. A pleasure to use!
                  </div>
                </div>
              </div>
            </div>


          </div>

        </div>
        <div
          className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  sm:shrink-0 sm:grow sm:basis-0 sm:rounded-r-none">
          <a href="#!">
            <img
              className="rounded-t-lg sm:rounded-tr-none"
              src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
              alt="Restaurant Name" />
          </a>
          <div className="p-6">
            <div className='flex justify-between mb-4 '>
              <h5
                className="mb-2 text-xl font-medium leading-tight text-neutral-800 ">
                Restaurant Name
              </h5>
              <p className="mb-2 text-base  text-neutral-600 ">
                <small>Location</small>
              </p>
            </div>
            <div className="ml-2 mb-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-white text-gray-700 border">
              {tags === "burger" ? <GiHamburger /> : tags === "Pizza" ? <GiPizzaSlice /> : <GiFoodTruck />}
              <span className='pl-2'> Tag </span>
            </div>
            <p className="mb-4 text-base text-neutral-600 ">
              <small>Adress: </small>
            </p>
            <div className='shadow-md pr-3 pt-3 pb-3 pl-1 rounded-lg'>
              <div className="flex items-center ">
                <div className="flex flex-col gap-4  p-4">
                  <div className="flex justify justify-between">
                    <div className="flex gap-2 justify-center items-center">
                      <div className="w-4 h-4 text-center rounded-full text-red-500 text-white">
                        <BsPersonCircle /> </div>
                      <span className=' text-center'>Jess Hopkins</span><small className='pl-2 text-xs text-center'>Feb 13, 2021</small>
                    </div>
                    <div className="flex p-1 gap-1 text-orange-300">
                      <BsFillStarFill className='text-yellow-500' />
                      <BsFillStarFill className='text-yellow-500' />
                      <BsFillStarFill className='text-yellow-500' />
                      <BsFillStarFill className='text-yellow-500' />
                      <BsFillStarFill className='text-black' />
                      <small className="ml-1 text-xs font-medium text-gray-500 ">4/5</small>
                    </div>

                  </div>
                  <div>
                    Gorgeous design! Even more responsive than the previous version. A pleasure to use!
                  </div>
                </div>
              </div>
            </div>


          </div>

        </div>
      </div>

    </div>
  )
}

export default Restaurant