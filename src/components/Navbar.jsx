import React from 'react'
import myLogo from "../assets/images/Logo.jpg"

const Navbar = () => {
  return (
    <div>
        <nav className={`border-b-2 h-[110px] flex justify-between items-center mx-48 relative`}>
            <div className={`flex  gap-8 capitaliz items-center relative text-[16px]`}>
                <a href="#about" className={`hover:text-[#4759F9] `}>abaut us</a>
                <a href="#courses" className={`hover:text-[#4759F9]`}>courses</a>
                <a href="#feature" className={`hover:text-[#4759F9]`}>feature</a>
                <a href="#footer" className={`hover:text-[#4759F9]`} >footer</a>
            </div>
            <div className={`flex text-[16px]`}>   
                <a href="" className={`text-[#4759F9] hover:text-white flex justify-center items-center hover:border hover:bg-[#4759F9] rounded-md border-gray-400 w-[100px] h-[48px]`}>login</a>
                <a href="" className={`text-[#4759F9] hover:text-white text- flex justify-center items-center hover:border hover:bg-[#4759F9] rounded-md border-gray-400 w-[140px] h-[48px] `}>sign Up</a>
            </div>
            <img src={myLogo} alt="" className={`absolute w-[80px] h-[80px] top-[100%] left-1/2 transform -translate-x-1/2 -translate-y-1/2`} />
        </nav>
    </div>
  )
}

export default Navbar
