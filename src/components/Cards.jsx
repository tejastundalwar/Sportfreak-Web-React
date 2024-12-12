import React from 'react'

const Cards = () => {
    return (
        <div className='w-full h-screen bg-fuchsia-100 flex items-center px-32 gap-5'>
            <div className="classcontainer h-[50vh] w-1/2">
                <div className="card rounded-xl w-full h-full bg-[#004D43]" >
                    <h1 className='text-5xl text-semibold pt-40 px-40'>SportFreak</h1>
                    <button className='p-1 mt-[10vh] ml-[5vh] border-[1px] border-zinc-500 rounded-full'>
                        <span className='text-xs text-semibold'>Read More</span>
                    </button>
                </div>
            </div>

            <div className="classcontainer flex gap-5 w-1/2 h-[50vh]">
                <div className="card rounded-xl w-full h-full bg-[#192826]" ></div>
                <div className="card rounded-xl w-full h-full bg-[#192826]" ></div>
            </div>
        </div>
    )
}

export default Cards
