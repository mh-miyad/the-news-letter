import { Button, Checkbox, Label, TextInput } from 'flowbite-react'
import Lottie from "lottie-react";
import log_in_Img from "../assets/111594-login.json";
import 'animate.css'


const LogIn_Comp = () => {
  return (
  <>
   <div className='flex  flex-col-reverse lg:flex-row items-center gap-10 justify-around '>
    <div className=' w-1/2 mt-5'>
    <Lottie animationData={log_in_Img} className=' ' />
    </div>
    <div className='w-1/2'>
        <form className="flex flex-col gap-4">
          <h2 className='text-center text-3xl  shadow-lg py-4  shadow-sky-600/50 my-5 animate__animated animate__rubberBand  rounded-xl  bg-blue-300/60 text-blue-600 font-bold '> <span className='animate-pulse'>Please Log In</span> </h2>
  <div className=''>
    <div className="mb-2 block">
      <Label
        htmlFor="email1"
        value="Your email"
      />
    </div>
    <TextInput
      id="email1"
      type="email"
      placeholder=' Write Your Email  '
      required={true}
    />
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="password1"
        value="Your password"
      />
    </div>
    <TextInput
      id="password1"
      type="password"
      required={true}
      placeholder='Write Your Password '
    />
  </div>
  <div className="flex items-center gap-2">
   
  </div>
  <Button type="submit" className='hover:bg-sky-600/80 bg-blue-500/70'>
    Submit
  </Button>
  <div className='flex justify-center gap-10'>
    <button className='text-white bg-gradient-to-tr from-emerald-500 from-25% hover:from-30%  hover:via-40% to-lime-600  via-green-400 via-30% to-70% hover:to-60%  px-10 py-2 rounded  hover:px-8 hover:py-1 transition-all duration-100 capitalize font-semibold shadow-2xl shadow-red-900'>google</button>
    <button className='text-white bg-gradient-to-tr from-blue-500 from-25% hover:from-30%  hover:via-40% to-sky-600  via-cyan-400 via-30% to-70% hover:to-60%  px-10 py-2 rounded  hover:px-8 hover:py-1 transition-all duration-100 capitalize font-semibold shadow-2xl shadow-blue-900'>Facebook</button>
  </div>
</form>
    </div>
   </div>
  
  </>
  )
}

export default LogIn_Comp