import React from 'react'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = () => {
  return (
    <div className={`ml-48`}>
      <div className="w-[80vw] flex justify-center items-center">
      <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={2}
    >
      <SwiperSlide>
      <div className={`flex gap-10 w-[560px] h-[220px] border p-9`}>
          <div >
            <img src="src/assets/images/Ellipse 25.png" alt="" />
          </div>
              <div className='flex w-[287px] h-[154px] justify-between -mt-2'>
                <span className={`flex flex-col`}>
                  <h1 className={`text-[18px] font-bold`}>Stevano Gonzales</h1>
                  <h2 className={`text-[14px] `}>Student University of Bistol</h2>
                    <p className={`text-[14px] pt-3`}> “I expected to learn more than what was actually taught. I knew I wouldn't become a designer, but at least wanted to grasp some of the basics. The main topic (App design).”</p>
                </span>
                <img className={`object-cover w-[20px] h-[16px]`} src="src/assets/images/“.png" alt="" />
            </div>
       </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className={`flex gap-10 w-[560px] h-[220px] border p-9`}>
          <div >
            <img src="src/assets/images/Ellipse 26.png" alt="" />
          </div>
              <div className='flex w-[287px] h-[154px] justify-between -mt-2'>
                <span className={`flex flex-col`}>
                  <h1 className={`text-[18px] font-bold`}>Jajang Miharha</h1>
                  <h2 className={`text-[14px] `}>Student of Oxford University</h2>
                    <p className={`text-[14px] pt-3`}>“I am happy with their arrangement of lessons and subjects. They reflect a scientific investigation into effective methods to adopt for learners.”</p>
                </span>
                <img className={`object-cover w-[20px] h-[16px]`} src="src/assets/images/“.png" alt="" />
            </div>
       </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className={`flex gap-10 w-[560px] h-[220px] border p-9`}>
          <div >
            <img src="src/assets/images/Ellipse 25.png" alt="" />
          </div>
              <div className='flex w-[287px] h-[154px] justify-between -mt-2'>
                <span className={`flex flex-col`}>
                  <h1 className={`text-[18px] font-bold`}>Stevano Gonzales</h1>
                  <h2 className={`text-[14px] `}>Student University of Bistol</h2>
                    <p className={`text-[14px] pt-3`}> “I expected to learn more than what was actually taught. I knew I wouldn't become a designer, but at least wanted to grasp some of the basics. The main topic (App design).”</p>
                </span>
                <img className={`object-cover w-[20px] h-[16px]`} src="src/assets/images/“.png" alt="" />
            </div>
       </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className={`flex gap-10 w-[560px] h-[220px] border p-9`}>
          <div >
            <img src="src/assets/images/Ellipse 26.png" alt="" />
          </div>
              <div className='flex w-[287px] h-[154px] justify-between -mt-2'>
                <span className={`flex flex-col`}>
                  <h1 className={`text-[18px] font-bold`}>Jajang Miharha</h1>
                  <h2 className={`text-[14px] `}>Student of Oxford University</h2>
                    <p className={`text-[14px] pt-3`}>“I am happy with their arrangement of lessons and subjects. They reflect a scientific investigation into effective methods to adopt for learners.”</p>
                </span>
                <img className={`object-cover w-[20px] h-[16px]`} src="src/assets/images/“.png" alt="" />
            </div>
       </div>
      </SwiperSlide>
      ...
    </Swiper>
      </div>
    </div>
  )
}

export default Slider
