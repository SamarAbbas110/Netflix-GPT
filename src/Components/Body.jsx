import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Utils/firebase";

const Body = () => {
  const dispatch = useDispatch();
  const Approuter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email , displayName , photoURL} = user;
        dispatch(
          addUser({
            uid: uid,
            displayName : displayName,
            photoURL : photoURL,
            email: email,
          })
        );
        // ...
      } else {
        dispatch(removeUser);
      }
    });
  }, []);

  return (
    <div>
      <RouterProvider router={Approuter} />
    </div>
  );
};

export default Body;
