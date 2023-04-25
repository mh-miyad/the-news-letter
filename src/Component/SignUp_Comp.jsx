import React, { useState } from "react";
import { Button } from "flowbite-react";
import Lottie from "lottie-react";
import log_in_Img from "../assets/log-in-img.json";

const SignUp_Comp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex items-center justify-center gap-x-10 flex-col-reverse lg:flex-row-reverse">
      <div className="w-2/5">
    <Lottie animationData={log_in_Img}/>
      </div>
      <div className=""><form className=" flex flex-col items-center justify-center h-screen">
      <input
        className="mb-4 px-4 py-2 border border-gray-400 rounded-lg outline-none w-80"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        className="mb-4 px-4 py-2 border border-gray-400 rounded-lg outline-none w-80"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        className="mb-4 px-4 py-2 border border-gray-400 rounded-lg outline-none w-80"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <Button
        className="mb-4 w-80"
        onClick={handleSubmit}
        color="blue"
        variant="contained"
      >
        Sign Up
      </Button>
      <div className='flex justify-center gap-10'>
    <button className='text-white bg-gradient-to-tr from-emerald-500 from-25% hover:from-30%  hover:via-40% to-lime-600  via-green-400 via-30% to-70% hover:to-60%  px-10 py-2 rounded  hover:px-8 hover:py-1 transition-all duration-100 capitalize font-semibold shadow-2xl shadow-red-900'>google</button>
    <button className='text-white bg-gradient-to-tr from-blue-500 from-25% hover:from-30%  hover:via-40% to-sky-600  via-cyan-400 via-30% to-70% hover:to-60%  px-10 py-2 rounded  hover:px-8 hover:py-1 transition-all duration-100 capitalize font-semibold shadow-2xl shadow-blue-900'>Facebook</button>
  </div>
    </form></div>
    </div>
  );
};

export default SignUp_Comp;
