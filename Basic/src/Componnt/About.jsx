import React from 'react'

const About = ({IsAbout}) => {
    return (
        <>
            { IsAbout &&
               <main className='flex items-center'>
                <div className="w-[50%]">
                    <h1 className='text-9xl font-bold uppercase text-gray-700'>Beauty of <span className='text-[crimson]'>nature</span></h1>
                    <p className=' text-gray-600 mt-5 text-xl italic  '>The nature is very beautyfull on real life.Nature is wonderfull felling you can feel Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat distinctio dolore ipsam illum officiis libero ut amet sapiente explicabo magni.</p>
                </div>

                <div>
                    <img src="Image/meta home.jpg" alt="" />
                </div>
               </main>
            }
        </>
    )
}

export default About
