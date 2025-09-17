import React, { useContext } from 'react'
import { useState } from 'react'
import bg from "../assets/authBg.png"
import {IoEye,IoEyeOff} from "react-icons/io5"
import { useNavigate } from 'react-router-dom'
import { userDataContext } from '../context/userContext'
import axios from "axios"
function SignUp() {
   const [showPassword, setShowPassword] = useState(false)
   const navigate=useNavigate();
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [error,setError]=useState("")

    const {serverUrl}=useContext(userDataContext)
    const handleSignUp=async(e)=>{
      e.preventDefault()
      setError("")
        try {
          let result=await axios.post(`${serverUrl}/api/auth/signup`,{name,email,password},{withCredentials:true})
          console.log(result.data)
        } catch (error) {
          console.log(error);
          setError(error.response.data.message)
        }
    }

  return (
    <div className='w-full h-[100vh] bg-cover flex justify-center items-center' style={{backgroundImage:`url(${bg})`}}>
        <form className='w-[90%] h-[600px] max-w-[500px] bg-[#00000069] backdrop-blur shadow-lg shadow-black flex flex-col items-center justify-center gap-[20px] px-[20px]'onSubmit={handleSignUp} >
            <h1 className=
            'text-white text-[30px] font-semibold mb-[30px]'>
                Register to
                 <span className='text-blue-400'>Virtual Assistant</span></h1>
            <input type="text" placeholder='Enter Your Name'  className='w-full h-[60px] outline-none border-2 bg-transparent text-white placeholder-gray-300 px-[20px] py-[10px] rounded-full text-[18px]' 
            value={name} required onChange={(e)=>setName(e.target.value)}/>
            <input type="Email" placeholder='Enter Your Email'  className='w-full h-[60px] outline-none border-2 bg-transparent text-white placeholder-gray-300 px-[20px] py-[20px] rounded-full text-[18px]' value={email}
             required onChange={(e)=>setEmail(e.target.value)}/>

            <div className='relative w-full h-[60px] border-2 bg-transparent text-white rounded-full text-[18px]'>
                <input type={showPassword?"text":"password"} placeholder='password'
                className='w-full h-full rounded-full otline-none bg-transparent placeholder-gray-300 px-[20px] py-[20px]'
                value={password} required onChange={(e)=>setPassword(e.target.value)}
                />
                {!showPassword &&  <IoEye className='cursor-pointer absolute top-[18px] right-[20px] text-[white] w-[25px] h-[25px]' onClick={()=>setShowPassword(true)}/>}
                {showPassword &&  <IoEyeOff className='cursor-pointer absolute top-[18px] right-[20px] text-[white] w-[25px] h-[25px]' onClick={()=>setShowPassword(false)}/>}  
            </div> 
            {error.length>0 && <p className='text-red-500 text-[17px]'>
              *{error}</p>}
            <button
            className='cursor-pointer min-w-[150px] h-[60px] text-black bg-white rounded-full font-semibold text-[19px] mt-[30px]'
            >
            Sign Up
            </button>
            <p className='text-white text-[18px] cursor-pointer' onClick={()=>navigate("/signin")}>
                Already have an account ? <span className='text-blue-400'>Sign In</span></p>
        </form>
    </div>
  )
}

export default SignUp
