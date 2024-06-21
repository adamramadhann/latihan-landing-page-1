import React from 'react'

const Hero = () => {
  return (
   <>
    <div className={`flex flex-col items-center justify-center mt-9 mb-10`} id='home'>
        <div >
        <h1 className={`top-72 capitalize text-[25px] font-bold mb-0`}>curso</h1>
        <p className={`text-[11px] -mt-2`}>academy</p>
        </div>
    </div>
    <div className={`flex flex-col justify-center items-center `}>
      <div  className={`text-center font-bold text-[80px]`}>
        <h1>Learn With <span className={`text-[#4759F9]`}>Expert</span></h1>
        <h1  className={`-mt-8`}>  Anytime & Anywhere</h1>
      </div>
        <p className={`text-[18px] text-center mt-7`}>or mision is to help people to find the best course online anbd learn <br /> with expert anytime , anywhere</p>
      <div className={`flex mt-10 gap-6`}>
        <img src="src/assets/images/google_store.png" alt="" className={`w-[200px] h-[58px]`} />
        <img src="src/assets/images/apps_store.png" alt="" className={`w-[200px] h-[58px]`} />
      </div>
      <div className={`flex mt-10 mb-10`}>
        <img src="src/assets/images/bgWarnaHero.png" alt="" className='z-[-10] absolute top-[36%] left-[15%] rounded-[500px] w-[1200px] h-[1100px] -rotate-45 opacity-70'/>
        <img src="src/assets/images/iPhone 12 Pro(1).png" alt="" className={` pt-14`} />
        <img src="src/assets/images/iPhone 12 Pro.png" alt="" className={`-ml-44 pb-14`} />
      </div>
      <img src="src/assets/images/Ellipse 24.png" alt="" className={` absolute top-[430px] left-[430px]`}/>
      <img src="src/assets/images/Ellipse 22.png" alt="" className={` absolute top-[300px] right-[450px] w-[19px] h-[19px]`}/>
      <img src="src/assets/images/Ellipse 22.png" alt="" className={` absolute  top-[730px] left-[420px]`}/>
      <img src="src/assets/images/Ellipse 20.png" alt="" className={` absolute top-[990px] left-[200px] `}/>
      <img src="src/assets/images/Ellipse 21.png" alt="" className={` absolute top-[1050px] right-[350px]`}/>
      <img src="src/assets/images/Ellipse 17(1).png" alt="" className={`absolute top-[450px] right-[200px]`}/>
    </div>
    </>
  )
}

export default Hero
