import React from 'react'

const Navbar = ({ IsAboutOpen, IsContectOpen, IsServiceOpen, IsHelpOpen }) => {

    return (
        <>
            <nav className='flex justify-between items-center mt-2 mb-5 border-b-2 border-gray-500 pb-6'>

                <div className='flex'>
                    <img src="public/vite.svg" alt="" />
                    <h1 className='text-5xl font-bold text-[bluevolet] mb-2'>it<span className='text-[crimson]'>e</span></h1>
                </div>

                <ul className='flex gap-8'>

                    <li className='font-bold text-2xl cursor-pointer text-[crimson] '
                        onClick={() => {
                            document.location.reload()
                        }}
                    >Home</li>

                    <li className='font-semibold text-2xl cursor-pointer duration-[.3s] hover:text-[crimson] '
                        onClick={IsAboutOpen}
                    >About</li>

                    <li className='font-semibold text-2xl cursor-pointer duration-[.3s] hover:text-[crimson] '
                        onClick={IsContectOpen
                        }
                    >Contect</li>

                    <li className='font-semibold text-2xl cursor-pointer duration-[.3s] hover:text-[crimson] '
                        onClick={IsServiceOpen}
                    >Service</li>

                    <li className='font-semibold text-2xl cursor-pointer duration-[.3s] hover:text-[crimson] '
                        onClick={IsHelpOpen}
                    >Help</li>

                </ul>

                <button className='bg-[crimson] text-white px-10 py-2 font-bold rounded border-2 border-transparent duration-500
 hover:bg-white hover:text-[crimson] hover:border-[crimson]'
                >Login</button>
            </nav>
        </>
    )
}

export default Navbar
