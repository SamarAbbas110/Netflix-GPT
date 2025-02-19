import React, { useState } from "react";
import Header from "./Header";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";

const Login = () => {
  const [isSignForm, setIsSignForm] = useState(true);
  const [isVisible, setisVisible] = useState(false);

  const toggleSignup = () => {
    setIsSignForm(!isSignForm);
  };

  const togglePassword = () => {
    setisVisible(!isVisible);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/IN-en-20250210-TRIFECTA-perspective_92338d5d-6ccd-4b1a-8536-eb2b0240a55e_large.jpg"
          alt=""
        />
      </div>
      <form className="w-3/12 absolute p-14  bg-black bg-opacity-80 justify-center align-center my-36 mx-auto right-0 left-0 text-white rounded-lg">
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
          placeholder="Email or Phone Number"
          className="my-2 py-4 px-3 w-full bg-gray-rgb border rounded "
        />
        <div className="relative w-full">
          <input
            type={isVisible ? "text" : "password"}
            required
            placeholder="Password"
            name="name"
            className="my-4 py-4 px-3 w-full bg-gray-rgb border rounded"
          />
          <span className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={togglePassword}>
            {isVisible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
          </span>
        </div>
        <button className="bg-red-rgb my-6 p-2 block w-full text-xl rounded ">
          {isSignForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4">
          {isSignForm ? "New to Netflix? " : "Already Registered?"}
          <span className="font-bold cursor-pointer hover:underline" onClick={toggleSignup}>
            {isSignForm ? "Sign up now" : " Sign In now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
