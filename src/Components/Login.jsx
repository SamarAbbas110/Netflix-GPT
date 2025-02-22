import React, { useRef, useState } from "react";
import Header from "./Header";
import {
  EyeOutlined,
  EyeInvisibleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import { checkValidateData } from "../Utils/Validate";
import { auth } from "../Utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignForm, setIsSignForm] = useState(true);
  const [isVisible, setisVisible] = useState(false);
  const [errorMessage, seterrorMessage] = useState(null);
  const Navigate = useNavigate();

  const toggleSignup = () => {
    setIsSignForm(!isSignForm);
  };

  const togglePassword = () => {
    setisVisible(!isVisible);
  };

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const checkHandleValidate = () => {
    const errors = checkValidateData(
      email.current.value,
      password.current.value
    );
    seterrorMessage(errors);
    if (errors) return; //if value is null then return the User

    if (!isSignForm) {
      //!isSignForm means the Sign up Form
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              Navigate("/browse");
            })
            .catch((error) => {
              seterrorMessage(error);
            });

          console.log(user);
          Navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + " " + errorMessage);
          console.log(errorCode);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          Navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + " " + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute bg-black">
        <img
          className="w-screen h-screen overflow-hidden object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/IN-en-20250210-TRIFECTA-perspective_92338d5d-6ccd-4b1a-8536-eb2b0240a55e_large.jpg"
          alt=""
        />
      </div>
      <form
        className="w-3/12 h-3/12 absolute p-14  bg-black bg-opacity-80 justify-center align-center my-36 mx-auto right-0 left-0 text-white rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl pb-10">
          {isSignForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignForm && (
          <input
            type="text"
            placeholder="Enter Full Name"
            className="my-2 py-4 px-3 w-full bg-gray-rgb border rounded "
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email or Phone Number"
          className="my-2 py-4 px-3 w-full bg-gray-rgb border rounded "
        />

        <div className="relative w-full">
          <input
            type={isVisible ? "text" : "password"}
            ref={password}
            placeholder="Password"
            className="my-4 py-4 px-3 w-full bg-gray-rgb border rounded"
          />
          <span
            className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={togglePassword}
          >
            {isVisible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
          </span>
        </div>
        {errorMessage && (
          <p className="text-red-500 text-xs flex items-center">
            <CloseCircleOutlined className="mr-1" /> {errorMessage}
          </p>
        )}

        <button
          className="bg-red-rgb my-6 p-2 block w-full text-xl rounded "
          onClick={checkHandleValidate}
        >
          {isSignForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4">
          {isSignForm ? "New to Netflix? " : "Already Registered?"}
          <span
            className="font-bold cursor-pointer hover:underline"
            onClick={toggleSignup}
          >
            {isSignForm ? "Sign up now" : " Sign In now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
