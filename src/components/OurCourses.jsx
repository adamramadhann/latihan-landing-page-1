import React, { useState } from 'react'

const OurCourses = () => {


  return (
    <div className={`mt-32 `} id='courses'>
        <div className={`flex items-center justify-center text-black gap-5`}>
            <img src="src/assets/images/Line 23(1).png" alt="" className={`text-black`} />
            <h1 className={` text-[18px]`}> Our Courses</h1>
        </div>
            <h1 className={`text-[60px] flex justify-center -mt-1`}>Most Popular Courses</h1>
          <div className={`flex justify-center mt-14`}>
          <div className={`border w-[1124px] h-[76px flex gap-3 rounded-full p-2 bg-[#F6F7FA] `}>
                <button className={`hover:border w-[76px] h-[60px] rounded-full  hover:bg-white `}>All</button>
                <button className={`hover:border w-[212px] h-[60px] rounded-full hover:bg-white`}> Finance & Acounting</button>
                <button className={`hover:border w-[116px] h-[60px] rounded-full hover:bg-white`}>busines</button>
                <button className={`hover:border w-[105px] h-[60px] rounded-full hover:bg-white`}>disgn</button>
                <button className={`hover:border w-[129px] h-[60px] rounded-full hover:bg-white`}>computer</button>
                <button className={`hover:border w-[228px] h-[60px] rounded-full hover:bg-white`}>information tecnology</button>
                <button className={`hover:border w-[188px] h-[60px] rounded-full hover:bg-white`}>computeer science</button>
            </div>
          </div>
          <div className={`flex justify-center gap-5 mt-14  `}>
          <div className={`w-[260px] h-[315px] flex flex-col justify-center ml-9  relative`}>
            <div className={` bg-gradient-to-b w-[260px] h-[175px] from-[#363535] to-[#C4C4C4] rounded-md`}>
                    <span className={`flex justify-between p-2 mt-1`}>
                    <h3 className={`text-white`}>h1 12m . 5 leason</h3>
                    <img className={`object-cover`} src="src/assets/images/Group 10082.png" alt="" />
                    </span>
                <img className={`object-cover -ml-20 -mt-10`} src="src/assets/images/Group 10081(1).png" alt="" />  
            </div>
            <button className={`border w-[83px] h-[28px] rounded-full mt-2 text-[14px] text-[#4759F9]`}>Design</button>
            <h1 className={`mt-2 font-bold`}>Introduction to Design Systems with Figma</h1>
            <div className={`mt-4 flex gap-3 items-center`}>
                <img src="src/assets/images/Frame 13769.png" alt="" />
                <h1 className={`text-[14px] text-[#7E8CA0]`}>Azela Susanti</h1>
                <h1 className={`pl-5 text-[14px] text-[#4759F9]`}>IDR 112.000</h1>
            </div>
          </div>
          <div className={`w-[260px] h-[315px] flex flex-col justify-center ml-9  relative`}>
            <div className={` bg-gradient-to-b w-[260px] h-[175px] from-[#363535] to-[#C4C4C4] rounded-md`}>
                    <span className={`flex justify-between p-2 mt-1`}>
                    <h3 className={`text-white`}>h1 12m . 5 leason</h3>
                    <img className={`object-cover`} src="src/assets/images/Group 10082.png" alt="" />
                    </span>
                <img className={`object-cover -ml-20 -mt-10`} src="src/assets/images/Group 10081(1).png" alt="" />  
            </div>
            <button className={`border w-[83px] h-[28px] rounded-full mt-2 text-[14px] text-[#4759F9]`}>Design</button>
            <h1 className={`mt-2 font-bold`}>Beginner to Pro in Excel: Financial Modeling & Valuation</h1>
            <div className={`mt-4 flex gap-3 items-center`}>
                <img src="src/assets/images/Frame 13769.png" alt="" />
                <h1 className={`text-[14px] text-[#7E8CA0]`}>Christin Wilson</h1>
                <h1 className={`pl-5 text-[14px] text-[#4759F9]`}>IDR 115.000</h1>
            </div>
          </div>
          <div className={`w-[260px] h-[315px] flex flex-col justify-center ml-9  relative`}>
            <div className={` bg-gradient-to-b w-[260px] h-[175px] from-[#363535] to-[#C4C4C4] rounded-md`}>
                    <span className={`flex justify-between p-2 mt-1`}>
                    <h3 className={`text-white`}>h1 12m . 5 leason</h3>
                    <img className={`object-cover`} src="src/assets/images/Group 10082.png" alt="" />
                    </span>
                <img className={`object-cover -ml-20 -mt-10`} src="src/assets/images/Group 10081(1).png" alt="" />  
            </div>
            <button className={`border w-[83px] h-[28px] rounded-full mt-2 text-[14px] text-[#4759F9]`}>Design</button>
            <h1 className={`mt-2 font-bold`}>Introduction to Adobe XD for Cell Phone Apps</h1>
            <div className={`mt-4 flex gap-3 items-center`}>
                <img src="src/assets/images/Frame 13769.png" alt="" />
                <h1 className={`text-[14px] text-[#7E8CA0]`}>Robert Axel</h1>
                <h1 className={`pl-5 text-[14px] text-[#4759F9]`}>IDR 90.000</h1>
            </div>
          </div>
          <div className={`w-[260px] h-[315px] flex flex-col justify-center ml-9  relative`}>
            <div className={` bg-gradient-to-b w-[260px] h-[175px] from-[#363535] to-[#C4C4C4] rounded-md`}>
                    <span className={`flex justify-between p-2 mt-1`}>
                    <h3 className={`text-white`}>h1 12m . 5 leason</h3>
                    <img className={`object-cover`} src="src/assets/images/Group 10082.png" alt="" />
                    </span>
                <img className={`object-cover -ml-20 -mt-10`} src="src/assets/images/Group 10081(1).png" alt="" />  
            </div>
            <button className={`border w-[83px] h-[28px] rounded-full mt-2 text-[14px] text-[#4759F9]`}>Design</button>
            <h1 className={`mt-2 font-bold`}>How to Start an Amazon FBA Store on a Tight Budget</h1>
            <div className={`mt-4 flex gap-3 items-center`}>
                <img src="src/assets/images/Frame 13769.png" alt="" />
                <h1 className={`text-[14px] text-[#7E8CA0]`}>Thomas Rodrigo</h1>
                <h1 className={`pl-5 text-[14px] text-[#4759F9]`}>IDR 150.000</h1>
            </div>
          </div>
          </div>
          <div className={`flex justify-center gap-5 mt-14  `}>
          <div className={`w-[260px] h-[315px] flex flex-col justify-center ml-9  relative`}>
            <div className={` bg-gradient-to-b w-[260px] h-[175px] from-[#363535] to-[#C4C4C4] rounded-md`}>
                    <span className={`flex justify-between p-2 mt-1`}>
                    <h3 className={`text-white`}>h1 12m . 5 leason</h3>
                    <img className={`object-cover`} src="src/assets/images/Group 10082.png" alt="" />
                    </span>
                <img className={`object-cover -ml-20 -mt-10`} src="src/assets/images/Group 10081(1).png" alt="" />  
            </div>
            <button className={`border w-[83px] h-[28px] rounded-full mt-2 text-[14px] text-[#4759F9]`}>Design</button>
            <h1 className={`mt-2 font-bold`}>How to learn digital marketing for beginners</h1>
            <div className={`mt-4 flex gap-3 items-center`}>
                <img src="src/assets/images/Frame 13769.png" alt="" />
                <h1 className={`text-[14px] text-[#7E8CA0]`}>Sebastian Rudi</h1>
                <h1 className={`pl-5 text-[14px] text-[#4759F9]`}>IDR 145.000</h1>
            </div>
          </div>
          <div className={`w-[260px] h-[315px] flex flex-col justify-center ml-9  relative`}>
            <div className={` bg-gradient-to-b w-[260px] h-[175px] from-[#363535] to-[#C4C4C4] rounded-md`}>
                    <span className={`flex justify-between p-2 mt-1`}>
                    <h3 className={`text-white`}>h1 12m . 5 leason</h3>
                    <img className={`object-cover`} src="src/assets/images/Group 10082.png" alt="" />
                    </span>
                <img className={`object-cover -ml-20 -mt-10`} src="src/assets/images/Group 10081(1).png" alt="" />  
            </div>
            <button className={`border w-[83px] h-[28px] rounded-full mt-2 text-[14px] text-[#4759F9]`}>Design</button>
            <h1 className={`mt-2 font-bold`}>How to learn photos and videos to become an expert</h1>
            <div className={`mt-4 flex gap-3 items-center`}>
                <img src="src/assets/images/Frame 13769.png" alt="" />
                <h1 className={`text-[14px] text-[#7E8CA0]`}>Alexander Marko</h1>
                <h1 className={`pl-5 text-[14px] text-[#4759F9]`}>IDR 150.000</h1>
            </div>
          </div>
          <div className={`w-[260px] h-[315px] flex flex-col justify-center ml-9  relative`}>
            <div className={` bg-gradient-to-b w-[260px] h-[175px] from-[#363535] to-[#C4C4C4] rounded-md`}>
                    <span className={`flex justify-between p-2 mt-1`}>
                    <h3 className={`text-white`}>h1 12m . 5 leason</h3>
                    <img className={`object-cover`} src="src/assets/images/Group 10082.png" alt="" />
                    </span>
                <img className={`object-cover -ml-20 -mt-10`} src="src/assets/images/Group 10081(1).png" alt="" />  
            </div>
            <button className={`border w-[83px] h-[28px] rounded-full mt-2 text-[14px] text-[#4759F9]`}>Design</button>
            <h1 className={`mt-2 font-bold`}>Learn flutter programming for mobile developers</h1>
            <div className={`mt-4 flex gap-3 items-center`}>
                <img src="src/assets/images/Frame 13769.png" alt="" />
                <h1 className={`text-[14px] text-[#7E8CA0]`}>Chelsy Olivia</h1>
                <h1 className={`pl-5 text-[14px] text-[#4759F9]`}>IDR 200.000</h1>
            </div>
          </div>
          <div className={`w-[260px] h-[315px] flex flex-col justify-center ml-9  relative`}>
            <div className={` bg-gradient-to-b w-[260px] h-[175px] from-[#363535] to-[#C4C4C4] rounded-md`}>
                    <span className={`flex justify-between p-2 mt-1`}>
                    <h3 className={`text-white`}>h1 12m . 5 leason</h3>
                    <img className={`object-cover`} src="src/assets/images/Group 10082.png" alt="" />
                    </span>
                <img className={`object-cover -ml-20 -mt-10`} src="src/assets/images/Group 10081(1).png" alt="" />  
            </div>
            <button className={`border w-[83px] h-[28px] rounded-full mt-2 text-[14px] text-[#4759F9]`}>Design</button>
            <h1 className={`mt-2 font-bold`}>How to learn to develop your potential to be the best</h1>
            <div className={`mt-4 flex gap-3 items-center`}>
                <img src="src/assets/images/Frame 13769.png" alt="" />
                <h1 className={`text-[14px] text-[#7E8CA0]`}>Stefano William</h1>
                <h1 className={`pl-5 text-[14px] text-[#4759F9]`}>IDR 120.000</h1>
            </div>
          </div>
          </div>
          <div className={ `flex justify-center items-center mt-28`}>
          <button className={`border w-[240px] h-[50px] bg-[#4759F9] text-white rounded-[4px]`}>Learn More Course</button>
          </div>
    </div>
  )
}

export default OurCourses
