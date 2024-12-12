import React from 'react'

const Featured = () => {
    return (
        <div className='w-full py-10 bg-sky-800'>
            <div className='w-full px-10 border-b-[1px] border-zinc-700 pb-20'>
                <h1 className='text-6xl font-semibold tracking-tighter'>Featured Projects</h1>

            </div>
            <div className='px-20'>
                <div className="cards w-full flex gap-10 mt-10">


                    <div className="cardcontainer w-1/2 h-[75vh] relative rounded-xl overflow-hidden">
                        <div className='card w-full h-full rounded-xl'>
                            <img className='w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                        </div>
                    </div>

                    <div className="cardcontainer w-1/2 h-[75vh] relative rounded-xl bg-red-500 overflow-hidden">
                        <div className='card w-full h-full rounded-xl overflow-hidden'>
                            <img className='w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Featured
