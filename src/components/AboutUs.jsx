import React from 'react'

const AboutUs = () => {
  return (
    <div className={`bg-[#291D5D] w-[90%] h-[860px] mt-5 rounded-[10px]`} id='about'>
        <div className={`flex items-center gap-3 pt-32 pl-48`}>
            <img src="src/assets/images/Line 23.png" alt="" />
            <h1 className={`text-white text-[18px]`}> About Us</h1>
        </div>
        <div className={`text-white pl-36`}>
            <h1 className={`text-[60px] pb-2`}>What is a curso ? </h1>
            <p className={`text-[18px]`}>Curso is an online course class that provides various categories of courses ranging from design, photography, marketing, and <br /> many more. With more than 100 schools and college g together and 10,000 students from various countries. With this curriculum, <br /> it is hoped that students can learn with professional experts in their respective fields anytime and anywhere.</p>
        </div>
        <div className={`flex pt-32`}>
            <div>
                <img src="src/assets/images/Header.jpg" alt="" className={`rounded-3xl transform rotate-70 w-[747px] h-[467px]`} />
            </div>
            <div className={`text-white pl-20`}>
                <h1 className={`pb-4`}>
                    <span className={`text-[60px] text-[#20BFF7] pr-8`}>10+</span> 
                    <span className={`text-[18px]`}>Years of Experients</span>
                </h1>
                <h1 className={`pb-4`}>
                    <span className={`text-[60px] text-[#20BFF7] pr-8`}>1000+</span> 
                    <span className={`text-[18px]`}>Years of Experients</span>
                </h1>
                <h1 className={``}>
                    <span className={`text-[60px] text-[#20BFF7] pr-8   `}>50+</span> 
                    <span className={`text-[18px]`}>Years of Experients</span>
                </h1>
                <img src="src/assets/images/Ellipse 26(1).png" alt="" className={`absolute right-[410px] top-[2030px]`} />
                <img src="src/assets/images/Ellipse 27.png" alt="" className={`absolute right-[350px] top-[2370px]`} />
                <img src="src/assets/images/Ellipse 25(1).png" alt="" className={`absolute right-[300px] top-[1650px]`} />
                <img src="src/assets/images/Vector(2).png" alt="" className={`absolute right-[360px] top-[1720px]`} />
            </div>
        </div>
    </div>
  )
}

export default AboutUs
