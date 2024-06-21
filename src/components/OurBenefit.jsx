import React from 'react'

const OurBenefit = () => {
  return (
    <div className={`mt-52 `}>
        <div className={`flex justify-center gap-32 relative`} id='benefit'>
            <div>
                <div className={`flex items-center text-black gap-5`}>
                    <img src="src/assets/images/Line 23(1).png" alt="" className={`text-black`} />
                    <h1 className={` text-[18px] font-bold `}> Our Benefit</h1>
                </div>
                     <h1 className={`text-[60px] font-bold pb-10 `}>Making your <br /> learning enjoyable</h1>
                    <img src="src/assets/images/Frame 13742.png" alt="" />
            </div>
            <div className={`grid grid-cols-2 gap-10 max-w-6xl flex-col`}>
                <div>
                    <img src="src/assets/images/Group 13783(1).png" alt="" />
                    <h1 className={`text-[24px] pt-3 font-bold`}> Course Certificate</h1>
                    <h2 className={`text-[16px] pt-3`}>You can get a certificate after <br /> completing the course.</h2>
                </div>
                <div>
                    <img src="src/assets/images/Group 13783(1).png" alt="" />
                    <h1 className={`text-[24px] pt-3 font-bold`}> Expert Tutor</h1>
                    <h2 className={`text-[16px] pt-3`}>You can easily ask many <br /> experienced mentors.</h2>
                </div>
                <div>
                    <img src="src/assets/images/Group 13783(1).png" alt="" />
                    <h1 className={`text-[24px] pt-3 font-bold`}> Learning Videos</h1>
                    <h2 className={`text-[16px] pt-3`}>You can get access to all <br /> learning videos.   </h2>
                </div>
                <div>
                    <img src="src/assets/images/Group 13783(1).png" alt="" />
                    <h1 className={`text-[24px] pt-3 font-bold`}> Accept Companies</h1>
                    <h2 className={`text-[16px] pt-3`}>You are definitely going to the <br /> best company or startup</h2>
                </div>
                <button className={`border w-[168px] bg-[#4759F9] text-white rounded-[6px] text-center `}>Get Started</button>
               <div  className={`absolute right-56 -mt-28`} >
               </div>
            </div>
        </div>
        <div className={`w-full h-[246px] bg-[#291D5D] mt-32 flex-col items-center flex justify-center `}>
             <h1 className={`text-white  text-[24px]`}>Over 100+ School & College Learning With Us</h1>
        <div className={`flex mt-10 gap-10 object-cover`}>
            <img className={`object-cover w-[162px] h-[35px] bg-cover`} src="src/assets/images/Group 13747.png" alt="" />
            <img className={`object-cover w-[162px] h-[35px] bg-cover`} src="src/assets/images/Group 13746.png" alt="" />
            <img className={`object-cover w-[162px] h-[35px] bg-cover`} src="src/assets/images/Group 13745.png" alt="" />
            <img className={`object-cover w-[162px] h-[35px] bg-cover`} src="src/assets/images/Mask group.png" alt="" />
        </div>   
        </div>
    </div>
  )
}

export default OurBenefit
