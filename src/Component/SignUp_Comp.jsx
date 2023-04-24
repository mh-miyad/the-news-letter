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
    </form></div>
    </div>
  );
};

export default SignUp_Comp;
