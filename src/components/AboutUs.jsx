import React from 'react'

const Aboutus = () => {
    return (
        <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
            <h1 className='text-7xl leading-1 font-semibold pt-1 mb-20 text-zinc-900 font-["doto"]'>
                About Us
            </h1>
            <h1 className='text-4xl  leading-1 font-semibold text-zinc-950 font-["Roboto_Condensed"]'>
                Our mission is to inspire, educate, and connect sports lovers from all walks of life. We strive to provide the latest news, insightful articles, comprehensive guides, and a vibrant community where you can share your love for sports.
            </h1>

            <div className='w-full flex gap-5 border-t-[1px] border-[#a1b562] mt-20 pt-10'>
                <div className='w-1/3'>
                    <h1 className='text-7xl pb-[4vw] font-["doto"] font-semibold text-zinc-900 font-semibold'>Our Approach</h1>
                    <button className='flex uppercase items-center gap-10 bg-zinc-900 rounded-full text-white px-7 py-4 mt-10'>Read More
                        <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                    </button>
                </div>

                <div className='text-5xl w-[2vh] h-[2vh] mt-[30vh] ml-[4vh] flex flex-col justify-center items-center font-["Roboro_Condensed"]'>
                    <h1 className='mb-[2vh] semibold bg-pink-900 text-white rounded-xl'>Sale is On!!</h1>
                    <h1 className='mb-[2vh] semibold bg-pink-900 text-white rounded-xl'>Sale is On!!</h1>
                    <h1 className='semibold bg-pink-900 text-white rounded-xl'>Sale is On!!</h1>
                </div>

                <div className=' w-[90vh] h-[60vh] rounded-3xl overflow-hidden ml-[30vh]'>
                    <div>
                        <img src="https://img.freepik.com/free-photo/low-angle-view-unrecognizable-muscular-build-man-preparing-lifting-barbell-health-club_637285-2497.jpg" alt="" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Aboutus
