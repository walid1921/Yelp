import React, { useState, useEffect, useRef } from 'react';

function DropDown({ title, text1, text2, text3, text4, border }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', closeDropdown);

    return () => {
      window.removeEventListener('click', closeDropdown);
    };
  }, []);

  return (
    <div className="flex items-center justify-center z-100">
      <div className="relative group w-[170px] mr-10" ref={dropdownRef}>
        <button
          id="dropdown-button"
          className={`inline-flex justify-center w-full py-2 text-sm font-medium text-black ${border}`}
          onClick={toggleDropdown}
        >
          <span className="mr-2">{title}</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        <div id="dropdown-menu" className={isOpen ? `absolute left-0 mt-2 rounded-md shadow-lg w-[250px] bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1` : "hidden"}>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md">{text1}</a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover.bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md">{text2}</a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover.bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md">{text3}</a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover.bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md">{text4}</a>
        </div>
      </div>
    </div>
  );
}

export default DropDown;
