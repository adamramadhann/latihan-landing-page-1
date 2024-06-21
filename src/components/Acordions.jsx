import React, { useState } from 'react'

const Acordions = () => {


    const [accordions, setAccordions] = useState(false)
    const [accordions2, setAccordions2] = useState(false)
    const [accordions3, setAccordions3] = useState(false)
    const [accordions4, setAccordions4] = useState(false)
    const [accordions5, setAccordions5] = useState(false)

  return (  
    <div className={`bg-[#EBEFFF4D] `}>
      <div className={`py-4 bg-transparent border-b-2`}>
      <button className={`flex justify-between w-full bg-transparent`} onClick={() => setAccordions(!accordions)}>
        <span>01. What is a Curso</span>
        {accordions ? <button className={`text-[30px] border w-[40px] bg-slate-200  font-extralight text-center  h-[40px] flex justify-center items-center`}>-</button> : <button  className={`text-[30px] border w-[40px] bg-slate-200  font-extralight text-center  h-[40px] flex justify-center items-center`}>+</button>}
      </button>
      <div className={`grid overflow-hidden transition-all duration-300 ease-in-out ${accordions ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
      <div className={`overflow-hidden mt-3`} >Curso is an online course class that provides various categories of courses ranging from design, photography and many more. With this curriculum, it is hoped that students can learn with professional experts in their respective fields anytime anywhere.   </div>
      </div>
    </div>
    <div className={`py-4 bg-opacity-100  border-b-2 `}>
      <button className={`flex justify-between w-full`} onClick={() => setAccordions2(!accordions2)}>
        <span>02. What can be done after joining Curso?</span>
        {accordions2 ? <button className={`text-[30px] border w-[40px] bg-[#4759F9] font-extralight text-center  h-[40px] flex justify-center items-center`}>-</button> : <button  className={`text-[30px] border w-[40px] bg-slate-200 font-extralight text-center  h-[40px] flex justify-center items-center`}>+</button>}
      </button>
      <div className={`grid overflow-hidden transition-all duration-300 ease-in-out ${accordions2 ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
      <div className={`overflow-hidden mt-3`} >Curso is an online course class that provides various categories of courses ranging from design, photography and many more. With this curriculum, it is hoped that students can learn with professional experts in their respective fields anytime anywhere.   </div>
      </div>
    </div>
    <div className={`py-4   border-b-2`}>
      <button className={`flex justify-between w-full`} onClick={() => setAccordions3(!accordions3)}>
        <span>03. What are the advantages of Curso over other online course providers?</span>
        {accordions3 ? <button className={`text-[30px] border w-[40px] bg-[#4759F9] font-extralight text-center  h-[40px] flex justify-center items-center`}>-</button> : <button  className={`text-[30px] border w-[40px] bg-slate-200 font-extralight text-center  h-[40px] flex justify-center items-center`}>+</button>}
      </button>
      <div className={`grid overflow-hidden transition-all duration-300 ease-in-out ${accordions3 ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
      <div className={`overflow-hidden mt-3`} >Curso is an online course class that provides various categories of courses ranging from design, photography and many more. With this curriculum, it is hoped that students can learn with professional experts in their respective fields anytime anywhere.   </div>
      </div>
    </div>
    <div className={`py-4 border-b-2`}>
      <button className={`flex justify-between w-full`} onClick={() => setAccordions4(!accordions4)}>
        <span>04. What are the topics on Curso</span>
        {accordions4 ? <button className={`text-[30px] border w-[40px] bg-[#4759F9] font-extralight text-center  h-[40px] flex justify-center items-center`}>-</button> : <button  className={`text-[30px] border w-[40px] bg-slate-200 font-extralight text-center  h-[40px] flex justify-center items-center`}>+</button>}
      </button>
      <div className={`grid overflow-hidden transition-all duration-300 ease-in-out ${accordions4 ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
      <div className={`overflow-hidden mt-3`} >Curso is an online course class that provides various categories of courses ranging from design, photography and many more. With this curriculum, it is hoped that students can learn with professional experts in their respective fields anytime anywhere.   </div>
      </div>
    </div>
    <div className={`py-4 `}>
      <button className={`flex justify-between w-full`} onClick={() => setAccordions5(!accordions5)}>
        <span>05. How to join the Curso?</span>
        {accordions5 ? <button className={`text-[30px] border w-[40px] bg-[#4759F9] font-extralight text-center  h-[40px] flex justify-center items-center`}>-</button> : <button  className={`text-[30px] border w-[40px] bg-slate-200 font-extralight text-center  h-[40px] flex justify-center items-center`}>+</button>}
      </button>
      <div className={`grid overflow-hidden transition-all duration-300 ease-in-out ${accordions5 ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
      <div className={`overflow-hidden mt-3`} >Curso is an online course class that provides various categories of courses ranging from design, photography and many more. With this curriculum, it is hoped that students can learn with professional experts in their respective fields anytime anywhere.   </div>
      </div>
    </div>
    </div>
  )
}

export default Acordions
