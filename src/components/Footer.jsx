import React from 'react'
import Slider from './Slider'

const Footer = () => {
  return (
    <div className={`w-full h-[507px] bg-[#291D5D] mt-[500px] flex flex-col justify-center items-center relative mb-11 `} id='footer'>
        <div className={`w-[1160px] h-[473px] bg-[#4E74FA] flex justify-start items-center relative -mt-[350px] rounded-xl  `}>
            <div className={`left-16 pl-10 `}>
                <h1 className={`text-[36px] font-bold text-white mb-6`}>Download the Curso App</h1>
                <p className={`text-[18px] text-white `}>The Curso academy app is available on Google Play and the App <br />Store. Want to improve your skills and <br /> learn with experts anywhere and anytime? Let's download the application now.</p>
                <div className={`flex gap-3 mt-14`}>
                    <img src="src/assets/images/Group(1).png" alt="" />
                    <img src="src/assets/images/Group.png" alt="" />
                </div>
            </div>
            <div className={`absolute -right-1 max-w-full  `}>
                <img src="src/assets/images/Group 13740.png" alt="" className={`max-w-[619px] object-cover`} />
            </div>
        </div>
        <div>
        <div className={`flex justify-center items-center gap-3 mt-20`}>
            <img src="src/assets/images/Group(2).png" alt="" />
            <span className={`flex flex-col text-white `}>
                <h1 className={`text-[39px] font-bold`}>Curso</h1>
                <h2 className={`-mt-3 text-[#E6E9ED] text-[16px]`}>academy</h2>
            </span>
        </div>
        </div>
            <nav className={`flex gap-16 text-white capitalize mt-9 text-[16px] font-bold`}>
                <a href="#about">About Us</a>
                <a href="#courses">courses</a>
                <a href="#feature">feature</a>
                <a href="#home">home</a>
                <a href="#benefit"> benefit</a>
                <a href="#faq">faq</a>
            </nav>
    </div>
  )
}

export default Footer
