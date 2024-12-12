import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed z-[999] w-full px-20 py-8 font-["Doto"] flex justify-between items-center' >
      <div className='logo h-[4vw] w-[8vw]'>
	  <h1>
      <img src="https://pbs.twimg.com/profile_images/1689900648869797888/QypwXCYS_400x400.jpg" alt="" />
    </h1>
	  </div>

	  <div className='links flex gap-10 text-white font-["Doto"]'>
		{["Services", "Our Work", "About Us", "Insights", "Contact"].map((item, index) => (
			<a 
            key={index} 
            className={`text-lg capitalize text-white relative group ${index === 4 && "ml-32"}`}
          >
            {item}
            <span 
              className='absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full '
            />
          </a>
		))}

		
	  </div>
    </div>
  )
}

export default Navbar
