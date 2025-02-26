import React, { useEffect, useState } from "react";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { NetflixLogo } from "../Utils/constants";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user); //It is use to access the state of the user slice.

  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        Navigate("/error");
      });
  };

  //Handling signout and signin Logic
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        await user.reload(); // Ensures the latest profile update is fetched

        const { uid, email, displayName, photoURL } = auth.currentUser; // Fetch updated user details
        dispatch(
          addUser({
            uid: uid,
            displayName: displayName,
            photoURL: photoURL,
            email: email,
          })
        );

        Navigate("/browse");
      } else {
        dispatch(removeUser());
        Navigate("/");
      }
    });

    return () => unsubscribe(); // Cleanup function to prevent memory leaks
  }, []);

  return (
    <div className="absolute w-screen px-10 pl-20 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <img
        className="w-48"
        src={NetflixLogo}
        alt=""
      />
      {user && ( //show icon only
        <div className="relative">
          <img
            className="cursor-pointer w-12 h-12"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            src={user.photoURL}
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
      )}
    </div>
  );
};

export default Header;
