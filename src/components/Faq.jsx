import React from 'react'
import Acordions from './Acordions'

const Faq = () => {
  return (
    <div className={``} id='faq'>
       <div className={`flex flex-col bg-[#EBEFFF4D] w-[1299px] h-[931px] ml-auto`}>
            <div className={`p-40`}>
            <div className={`flex items-center text-black gap-5 `}>
                <img src="src/assets/images/Line 23(1).png" alt="" className={`text-black`} />
                <h1 className={` text-[18px] font-bold`}>Faq</h1>
            </div>
            <div>
                <h1 className={`text-[60px] font-bold pb-10 `}>Frequently asked questions</h1>
                </div>
                <div className={`p-4 bg-[#EBEFFF4D] rounded-lg`}>
                    <Acordions/>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Faq
