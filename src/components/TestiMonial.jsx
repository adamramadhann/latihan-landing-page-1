import React from 'react'
import { AiFillLeftSquare, AiFillRightSquare } from "react-icons/ai";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Slider from './Slider';

const TestiMonial = () => {
  return (
    <div className={`mt-52 mb-72`} id='testimonial'>
       <div className={`flex justify-between items-center mx-32 `}>
       <div>
        <div className={`flex items-center text-black gap-5`}>
            <img src="src/assets/images/Line 23(1).png" alt="" className={`text-black`} />
            <h1 className={` text-[18px] font-bold`}> Testimonial</h1>
        </div>
            <h1 className={`text-[60px] font-bold pb-10 `}>What say our students</h1>
        </div>
        <div className={`flex gap-4`}>
                <AiFillLeftSquare  className={` w-[40px] h-[40px]  text-blue-300 hover:text-[#4759F9]`}/>    
                <AiFillRightSquare  className={` w-[40px] h-[40px]   text-blue-300 hover:text-[#4759F9]`}/>
        </div>
       </div>
        <div className={`flex justify-center gap-12 mt-4`}> 
        <Slider/>
        </div>
    </div>
  )
}

export default TestiMonial
