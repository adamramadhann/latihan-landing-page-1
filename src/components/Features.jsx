import React from 'react'

const Features = () => {
  return (
    <div className={`flex flex-col items-center justify-center mt-52 h-[949px]`} id='feature'>
      <div className={`flex items-center justify-center text-black gap-5`}>
            <img src="src/assets/images/Line 23(1).png" alt="" className={`text-black`} />
            <h1 className={` text-[18px]`}> Our Features</h1>
        </div>
        <h1 className={`text-[60px]`}>Courso Top Features</h1>
        <div className={`mt-14 flex gap-14`}>
            <div className={`w-360px h-auto flex flex-col gap-5`}>
                <img src="src/assets/images/Frame 13722.png" alt="" />
                <h1 className={`text-[30px]`}>A complete variety of <br /> learning topics</h1>
                <p className={`18px text-gray-400`}>Easily find a comprehensive range of topics <br /> including design, development, and more.</p>
            </div>
            <div className={`w-360px h-auto flex flex-col gap-5`}>
                <img src="src/assets/images/Frame 13733.png" alt="" />
                <h1 className={`text-[30px]`}>A complete variety of <br /> learning topics</h1>
                <p className={`18px text-gray-400`}>Easily find a comprehensive range of topics <br /> including design, development, and more.</p>
            </div>
            <div className={`w-360px h-auto flex flex-col gap-5`}>
                <img src="src/assets/images/Frame 13734.png" alt="" />
                <h1 className={`text-[30px]`}>A complete variety of <br /> learning topics</h1>
                <p className={`18px text-gray-400`}>Easily find a comprehensive range of topics <br /> including design, development, and more.</p>
            </div>
        </div>
    </div>
  )
}

export default Features
