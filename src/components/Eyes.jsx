import React, { useEffect, useState } from 'react'

const Eyes = () => {

    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth / 4;
            let deltaY = mouseY - window.innerHeight / 4;

            var angle = Math.atan2(deltaY, deltaX) * (180/ Math.PI);
            setRotate(angle-180);
        })
    })

    return (
        <div className='eyes w-full h-screen overflow-hidden bg-gray-200'>
            <div data-scroll data-scroll-speed='-.7' className='relative w-[70%] h-[70%] mt-[5%] ml-[15%] bg-no-repeat bg-cover bg-center bg-[url("./assets/websiteimg.jpg")]'>
                <div className='absolute flex gap-10 top-[22%] left-[19%] -translate-x-[50%] -translate-y-[50%] '>
                    <div className='flex items-center justify-center w-[12vw] h-[12vw] rounded-full bg-["#FF4D00"]'>
                        <div className='relative w-2/3 h-2/3 rounded-full bg-["#FDB813"]'>
                            <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='line absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 rotate-10'>
                                <div className='w-10 h-10 rounded-full bg-zinc-100'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eyes
