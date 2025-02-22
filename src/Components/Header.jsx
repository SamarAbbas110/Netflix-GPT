import React, { useState } from "react";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const Navigate = useNavigate();

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        Navigate("/")
      })
      .catch((error) => {
        // An error happened.
        Navigate("/error")
      });
  };

  return (
    <div className="absolute w-screen px-10 pl-20 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <img
        className="w-48"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt=""
      />
      <div className="relative">
        <img
          className="cursor-pointer w-12 h-12"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          src="https://i.pinimg.com/564x/5b/50/e7/5b50e75d07c726d36f397f6359098f58.jpg"
        />

        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 bg-white divide-y divide-gray-100 shadow-sm w-44 dark:bg-black">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
              <li>
                <a
                  href="#"
                  onClick={handleSignout}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-black dark:hover:text-white"
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
